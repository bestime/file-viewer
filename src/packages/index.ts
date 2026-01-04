
import parsePdfInfo from './parsePdfInfo'
import { resolvePath } from './common'
import type { ITypeDom, IViewerConfig } from './common'

import { getRelativePos, observeMouseWheel } from '@bestime/utils_browser'
import { isArray, isNull, roundFixed } from '@bestime/utils_base'
import { libraryFile } from "@bestime/utils_browser";
import parseIMageInfo from './parseIMageInfo'

interface IFileItem {
  url: string,
  type: 'image' | 'pdf'
}






async function loadPdfCss (url: string) {
  return new Promise(function (resolve) {
    libraryFile({
      type: 'css',
      module: '',
      attribute: {
        author: 'bestime'
      },
      url
    }, resolve)
  })
}

const scaleRatio = 0.05


let pluginBaseUrl = ''

export function install (baseUrl: string) {
  pluginBaseUrl = baseUrl
}

export default class FileViewer {
  
  _viewrWrapper: HTMLDivElement
  _viewrBody: HTMLDivElement
  _scalevalue:HTMLElement
  _setpvalue: HTMLElement
  _viewrScale: HTMLDivElement
  _initTimer: any
  _config: IViewerConfig
  _dataList: IFileItem[] = []
  _viewTimes = -99999999999999
  
  _mouse = {
    x: 0,
    y: 0,
    forceX: undefined as number | undefined,
    forceY: undefined as number | undefined,
    downX: 0,
    downY: 0,
    isDown: false
  }
  _rotate = {
    timer: -1 as any,
    value: 0,
    locking: false
  }
  _current = {
    type: undefined as IFileItem['type'] | undefined,
    index: -1,
    file: undefined as ITypeDom | undefined,
    /** 这个是上一次对齐左上角的left值，不参与居中计算 */
    left: 0,
    /** 这个是上一次对齐左上角的top值，不参与居中计算 */
    top: 0,
    center: [0, 0, 0, 0],
    initScale: 1,
    minScale: 1,
    maxScale: 1,
    
  }
  
  _scale =1
  _mouseWeelObs: ReturnType<typeof observeMouseWheel> | undefined
  constructor (options?: Partial<IViewerConfig>) {
    this._config = Object.assign({
      theme: 'default',
      ratio: 3,
      mouseWheelPdfScale: true,
    }, options)
    
    this._viewrScale = document.createElement('div')
    this._onDocMove = this._onDocMove.bind(this)
    this._onMouseUp = this._onMouseUp.bind(this)
    const oWrapper = document.createElement('div')
    
    const oBody = document.createElement('div')
    const oTool = document.createElement('div')
    
    const oToolBody = document.createElement('div')
    oWrapper.className = 'file-viewer-wrapper'
    if(this._config.outline) {
      oWrapper.className += ' outline'
    }
    
    oWrapper.setAttribute('theme', this._config.theme)
    oTool.className = 'file-viewer-tool'
    oToolBody.className = 'file-viewer-tool-body'
    oBody.className = 'file-viewer-content'
    this._viewrScale.className = 'scale-item'

    oBody.appendChild(this._viewrScale)
    const oPre = document.createElement('span')
    const oSetp = document.createElement('i')
    const oNext = document.createElement('span')
    const o100 = document.createElement('span')
    const ooop = document.createElement('span')
    const oBig = document.createElement('span')
    const oSmall = document.createElement('span')
    const oRotate = document.createElement('span')
    const oGroup_01 = document.createElement('div')
    const oGroup_02 = document.createElement('div')
    const oScaleValue = document.createElement('i')
    oSetp.className = 'file-viewer-scale-value'
    oScaleValue.className = 'file-viewer-scale-value'
    this._scalevalue = oScaleValue
    oGroup_01.className = 'icon-group'
    oGroup_02.className = 'icon-group'

    oPre.className = 'prev'
    oNext.className = 'next'
    oBig.className = 'big'
    oSmall.className = 'small'
    oRotate.className = 'rotate'
    o100.className = 'adaption'
    ooop.className = 'ratio_1'

    this._setpvalue = oSetp

    oPre.title = '上一个'
    oNext.title = '下一个'
    oBig.title = '放大'
    oSmall.title = '缩小'
    o100.title = '适配尺寸'
    oRotate.title = '旋转'
    ooop.title = '1:1显示'

    oTool.appendChild(oToolBody)
    oGroup_02.appendChild(oPre)
    oGroup_02.appendChild(oSetp)
    oGroup_02.appendChild(oNext)
    oToolBody.appendChild(oGroup_02)
    oToolBody.appendChild(oGroup_01)
    oGroup_01.appendChild(oSmall)
    oGroup_01.appendChild(oScaleValue)
    oGroup_01.appendChild(oBig)
    oGroup_01.appendChild(o100)
    oGroup_01.appendChild(ooop)
    
    
    oToolBody.appendChild(oRotate)
    oWrapper.appendChild(oTool)
    
    
    oWrapper.appendChild(oBody)

    oNext.onclick = () => {
      let toIndex = this._current.index + 1
      if(toIndex === this._dataList.length) {
        toIndex = 0
      }
      this.preview(toIndex)
    }
    oPre.onclick = () => {
      let toIndex = this._current.index - 1
      if(toIndex <0) {
        toIndex = this._dataList.length - 1
      }
      this.preview(toIndex)
    }

    oBig.onclick = () => {
      this._setMouseToImgCenter(true, true)
      this._stepBig()
    }
    oSmall.onclick = () => {
      this._setMouseToImgCenter(true, true)
      this._stepSmall()
    }

    o100.onclick = ()=> {
      this._mouse.x = 0
      this._mouse.y = 0
      this._initCenterScale()
    }

    ooop.onclick =() => {
      this._mouse.x = 0
      this._mouse.y = 0
      this._setScale(1, true)
    }

    this._mouseWeelObs = observeMouseWheel(oWrapper, (dir) => {
      this._mouse.forceX = undefined
      this._mouse.forceY = undefined
      if(this._current.type === 'pdf' && !this._config.mouseWheelPdfScale) {
        const oNextBtn = this._current.file?.tool.querySelector('.next') as HTMLSpanElement
        const oPreBtn = this._current.file?.tool.querySelector('.prev') as HTMLSpanElement
        if(dir === -1) {
          oNextBtn?.click?.()
        } else {
          oPreBtn?.click?.()
        }
        
      } else {
        if(dir === -1) {
          this._stepSmall()
        } else if(dir === 1){
          this._stepBig()
        }
      }
    }, true)

    this._viewrBody = oBody
    this._viewrWrapper = oWrapper
    oWrapper.onmousedown = (ev) => {
      this._mouse.downX = ev.clientX
      this._mouse.downY = ev.clientY
      this._mouse.isDown = true
      this._viewrBody.classList.add('move')
      document.addEventListener('mousemove', this._onDocMove)
      document.addEventListener('mouseup', this._onMouseUp)
    }
    oWrapper.onmousemove = ev => {
      this._mouse.x = ev.clientX
      this._mouse.y = ev.clientY
      this._mouse.forceX = undefined
      this._mouse.forceY = undefined
      
    }
    oRotate.onclick = () => {

      if(this._rotate.locking) return;
      this._rotate.locking = true
      let toRotate = this._rotate.value + 90
      
      

      const vertical = toRotate === 0 || toRotate === 180
      const width = this._viewrScale.offsetWidth
      const height = this._viewrScale.offsetHeight

      const domOrigin = this._viewrScale.getElementsByClassName('original')[0] as HTMLDivElement
      const fwl = (width - height)/ 2*this._scale
      this._viewrScale.style.width = height + 'px'
      this._viewrScale.style.height = width + 'px'

      domOrigin.style.transform = `rotate(${toRotate}deg)`
      this._setScale(this._scale, false)
      
      
      this._rotate.timer = setTimeout(() => {
        
        if(toRotate === 360) {
          toRotate = 0
          domOrigin.classList.add('no-duration')
          domOrigin.style.transform = `rotate(0deg)`          
          this._rotate.timer = setTimeout(() => {
            domOrigin.classList.remove('no-duration')
            this._rotate.locking = false
            this._rotate.value = toRotate
          }, 60)
        } else {
          this._rotate.locking = false
          this._rotate.value = toRotate
        }
      }, 400)
    }
    
  }

  _reset () {
    this._mouse.x = 0
    this._mouse.y = 0
    this._mouse.forceX = undefined
    this._mouse.forceY = undefined
    this._rotate.value = 0
    clearTimeout(this._rotate.timer)
    this._rotate.locking = false
    if(this._current.file) {
      this._current.file.tool.remove()
      this._current.file.source.remove()
    }
    this._viewrScale.classList.add('loading')
  }

  

  get _coordinateX () {    
    return isNull(this._mouse.forceX) ? this._mouse.x : this._mouse.forceX
  }

  get _coordinateY () {    
    return isNull(this._mouse.forceY) ? this._mouse.y : this._mouse.forceY
  }

  _stepBig () {
    
    this._setScale(this._scale + scaleRatio, false)
  }

  _stepSmall () {
    this._setScale(this._scale - scaleRatio, false)
  }

  setData (data: IFileItem | IFileItem[]) {
    if(!data) {
      throw "数据格式不正确"
    }
    this._dataList = isArray(data) ? data : [data]

  }

  /**
   * 预览一个资源
   * @param index 资源索引
   */
  preview (index: number) {
    if(index <0 || index>=this._dataList.length) {
      throw "当前索引超出了数据级"
    }
    
    this._current.index = index
    this._show(this._dataList[index]!)
    this._setpvalue.innerHTML = `${index+1}/${this._dataList.length}`
  }



  async _show (item: IFileItem) {    
    const flag = ++this._viewTimes
    
    this._current.type = item.type
    
    let typeDom: ITypeDom | undefined;
    if(item.type === 'pdf') {
      const [pdf] = await Promise.all([
        parsePdfInfo(pluginBaseUrl, item.url, this._config.ratio)
      ])
      typeDom = pdf
    } else if(item.type === 'image') {
      typeDom = await parseIMageInfo(item.url)
    }

    // 防止点击太快
    if(flag !== this._viewTimes) return;
    if(!typeDom) return;
    await loadPdfCss(resolvePath(pluginBaseUrl, 'index.min.css'))
    this._reset()    
    

    // 上面先清空之前的东西
    this._current.file = typeDom
    if(this._config.mount) {
      this._config.mount.appendChild(this._viewrWrapper)
    }

    this._viewrScale.appendChild(typeDom.source)
    this._viewrWrapper.appendChild(typeDom.tool)
    this._viewrScale.style.width = typeDom.width + 'px'
    this._viewrScale.style.height = typeDom.height + 'px'
    clearTimeout(this._initTimer)
    
    this._initTimer = setTimeout(() => {      
      this._initCenterScale()
      this._viewrScale.classList.remove('loading')
    }, 100)
  }

  


  _setMouseToImgCenter (setX: boolean, setY: boolean) {
    // this._mouse.x = 0
    // this._mouse.y = 0
    // return;
    const oScaleItem = this._viewrWrapper.getElementsByClassName('scale-item')[0] as HTMLDivElement
    const wrapper = getRelativePos(this._viewrWrapper)
    const body = getRelativePos(oScaleItem)
    

    if(setX) {
      if(body.x + body.width * this._scale > wrapper.x + wrapper.width) {
        this._mouse.forceX = wrapper.x + wrapper.width / 2
      } else if(body.x<wrapper.x) {
        this._mouse.forceX = (body.width*this._scale - (wrapper.x - body.x))/2+wrapper.x
      } else {
        this._mouse.forceX = body.x + body.width*this._scale/2
      }
    }
    
    if(setY) {
      if(body.y + body.height * this._scale > wrapper.y + wrapper.height) {
        this._mouse.forceY = wrapper.y + wrapper.height / 2
      } else if(body.y < wrapper.y) {
        this._mouse.forceY = (body.height*this._scale / 2 - (wrapper.y - body.y))+wrapper.y
      } else {
        this._mouse.forceY = body.y + body.height*this._scale/2
      }
    }
    
  }



  _setScale (v: number, toCenter: boolean) {
    
    v = Math.max(this._current.minScale, v)
    v = Math.min(this._current.maxScale, v)
    const scaleDomInfo = getRelativePos(this._viewrScale)

    // 获取鼠标在图片的坐标（百分比）
    const preLeft =  this._coordinateX - scaleDomInfo.x
    const preTop =  this._coordinateY - scaleDomInfo.y
   
    const toLeft = preLeft/this._scale * v
    const toTop = preTop/this._scale * v

    let realLeft = 0, realTop = 0
    let focusX = !toCenter && this._canFocusX(v) && this._canFocusX(this._scale);
    let focusY = !toCenter && this._canFocusY(v) && this._canFocusY(this._scale)

    if(focusX) {
      realLeft = -(toLeft-preLeft) + this._current.left
    } else {
      realLeft = (this._viewrWrapper.offsetWidth - scaleDomInfo.width*v) /2
    }
    if(focusY) {
      realTop = -(toTop - preTop) + this._current.top
    }else {
      realTop = (this._viewrWrapper.offsetHeight - scaleDomInfo.height*v) /2
    }

    
    
    // const domOriginal = this._viewrScale.getElementsByClassName('original')[0] as HTMLDivElement
    this._viewrScale.style.transform = `scale(${v})`
    
    this._scale = v
    this._setleftTop(realLeft, realTop, v, true, focusX, focusY)
    this._scalevalue.innerText = roundFixed(v*100, 0) + '%'
  }

  _canFocusX (scale: number) {
    const pos = getRelativePos(this._viewrWrapper)
    
    const scaleDomInfo = getRelativePos(this._viewrScale)
    
    const isXCenter = this._viewrScale.offsetWidth*scale<=this._viewrWrapper.offsetWidth
    // 在图片上
    const _xIsInImg = this._coordinateX > scaleDomInfo.x && this._coordinateX <=  scaleDomInfo.width * this._scale + scaleDomInfo.x
    // 图片比容器大
    const _xIsImgBigger = Math.ceil(scaleDomInfo.x + scaleDomInfo.width * this._scale) >= pos.x + pos.width

    const isXOn = _xIsInImg && _xIsImgBigger
    
    return !isXCenter && isXOn
  }
  _canFocusY (scale: number) {
    const pos = getRelativePos(this._viewrWrapper)
    
    const scaleDomInfo = getRelativePos(this._viewrScale)
    const isYCenterr = this._viewrScale.offsetHeight*scale<=this._viewrWrapper.offsetHeight

    const _yIsInImg =this._coordinateY > scaleDomInfo.y && this._coordinateY <=  scaleDomInfo.height * this._scale + scaleDomInfo.y
    const _yIsImgBigger = Math.ceil(scaleDomInfo.y + scaleDomInfo.height * this._scale) >= pos.y + pos.height

    const isYOn = _yIsInImg && _yIsImgBigger
    

    return !isYCenterr && isYOn
  }

  _onDocMove (ev: any, changeCacheValue?: boolean) {
    let vx = this._canFocusX(this._scale)
    let vy = this._canFocusY(this._scale)
    
    const canMove = vx || vy
    if(this._mouse.isDown && canMove) {
      // console.log("抬起")
      const moveX = vx ? ev.clientX - this._mouse.downX : 0
      const moveY = vy ? ev.clientY - this._mouse.downY : 0
      
      this._setleftTop(this._current.left + moveX, this._current.top + moveY, this._scale, changeCacheValue === true, vx, vy)
    }
  }

  _onMouseUp (ev?: any) {
    this._viewrBody.classList.remove('move')
    document.removeEventListener('mousemove', this._onDocMove)
    document.removeEventListener('mouseup', this._onMouseUp)
    if(isNull(ev?.clientX)) return
    
    this._onDocMove(ev, true)
    this._mouse.isDown = false
  }

  _setleftTop (left: number, top: number, scale: number, changeCacheValue: boolean, focusX: boolean, focusY: boolean) {
  
    
    const pos = getRelativePos(this._viewrWrapper)
    // 由于被css transform-origin center 了，所有先向左上靠齐    
    let ml = (this._viewrScale.offsetWidth - this._viewrScale.offsetWidth * scale)/2
    let mt = (this._viewrScale.offsetHeight - this._viewrScale.offsetHeight * scale)/2 
    

    let limitToX = 0
    let limitToY = 0
    if(focusX) {
      const maxLeft = this._viewrScale.offsetWidth * this._scale-this._viewrWrapper.offsetWidth
      if(left>0 ) {
        left = 0
        limitToX = -1
      } else if(left <= -maxLeft) {
        limitToX = 1
        left = -maxLeft
      }
    }


    if(focusY) {
      const maxTop = this._viewrScale.offsetHeight * this._scale-this._viewrWrapper.offsetHeight
      
      if(top>0) {
        top = 0
        limitToY = -1
      } else if(top<-maxTop) {
        limitToY = 1
        top = -maxTop
      }
    }
    
    let sx = left -ml
    let sy = top - mt

    if(limitToY === 1) {
      sy = Math.ceil(sy)
    } else if(limitToY == -1) {
      sy = Math.floor(sy)
    }

    if(limitToX === 1) {
      sx = Math.ceil(sx)
    } else if(limitToX === -1) {
      sx = Math.floor(sx)
    }

    this._viewrScale.style.left = sx + 'px'
    this._viewrScale.style.top = sy+'px'



    if(changeCacheValue) {
      this._current.left = left
      this._current.top = top
    }
  }


  _initCenterScale () {
    
    const scaleDomInfo = getRelativePos(this._viewrScale)
    const scaleX = this._viewrWrapper.offsetWidth / this._viewrScale.offsetWidth
    const scaleY = this._viewrWrapper.offsetHeight / this._viewrScale.offsetHeight

    const minScale = Math.min(20/this._viewrScale.offsetWidth, 20/this._viewrScale.offsetHeight)
    
    const initScale = Math.min(scaleX, scaleY, 1)
    const cl = (this._viewrWrapper.offsetWidth - this._viewrScale.offsetWidth * initScale)/2
    const ct = (this._viewrWrapper.offsetHeight - this._viewrScale.offsetHeight * initScale)/2
    this._current.left = 0;
    this._current.top = 0

    this._scale = initScale
    const ml = (scaleDomInfo.width - scaleDomInfo.width * initScale)/2
    const mt = (scaleDomInfo.height - scaleDomInfo.height * initScale)/2
    this._current.center= [cl, ct, ml, mt]

    
    this._current.initScale = initScale
    this._current.minScale = minScale
    this._current.maxScale = initScale * 50
    this._setScale(initScale, true)    

  }


  dispose () {
    this?._mouseWeelObs?.dispose()
    this._onMouseUp()
    clearTimeout(this._initTimer)
    clearTimeout(this._rotate.timer)
  }
}