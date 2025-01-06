
import parsePdfInfo from './parsePdfInfo'
import "./index.scss"
import { getRelativePos, observeMouseWheel } from '@bestime/utils_browser'
import { isNull } from '@bestime/utils_base'


const scaleRatio = 0.1


let pluginBaseUrl = ''



export function install (baseUrl: string) {
  pluginBaseUrl = baseUrl
}

export default class FileViewer {
  _viewrWrapper: HTMLDivElement
  _viewrBody: HTMLDivElement
  _viewrScale: HTMLDivElement
  _mouse = {
    x: 0,
    y: 0,
    forceX: undefined as number | undefined,
    forceY: undefined as number | undefined,
    downX: 0,
    downY: 0,
    isDown: false
  }
  _current = {
    
    /** 这个是上一次对齐左上角的left值，不参与居中计算 */
    left: 0,
    /** 这个是上一次对齐左上角的top值，不参与居中计算 */
    top: 0,
    center: [0, 0, 0, 0],
    initScale: 1,
    rotate: 0,
    
  }
  
  _scale =1
  _mouseWeelObs: ReturnType<typeof observeMouseWheel> | undefined
  constructor () {
    this._viewrScale = document.createElement('div')
    this._onDocMove = this._onDocMove.bind(this)
    this._onMouseUp = this._onMouseUp.bind(this)
    const oWrapper = document.createElement('div')
    
    const oBody = document.createElement('div')
    const oTool = document.createElement('div')
    const oToolBody = document.createElement('div')
    oWrapper.className = 'file-viewer-wrapper'
    oTool.className = 'file-viewer-tool'
    oToolBody.className = 'file-viewer-tool-body'
    oBody.className = 'file-viewer-content'

    const oPre = document.createElement('span')
    const oNext = document.createElement('span')
    const o100 = document.createElement('span')
    const oBig = document.createElement('span')
    const oSmall = document.createElement('span')
    const oRotate = document.createElement('span')

    oPre.innerText = '上一个'
    oNext.innerText = '下一个'
    oBig.innerText = '放大'
    oSmall.innerText = '缩小'
    o100.innerHTML = '适配尺寸'
    oRotate.innerHTML = '旋转'

    oTool.appendChild(oToolBody)
    oToolBody.appendChild(oPre)
    oToolBody.appendChild(oNext)
    oToolBody.appendChild(oBig)
    oToolBody.appendChild(o100)
    oToolBody.appendChild(oSmall)
    oToolBody.appendChild(oRotate)
    oWrapper.appendChild(oTool)
    oWrapper.appendChild(oBody)

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
      this._setScale(this._current.initScale, true)
    }

    this._mouseWeelObs = observeMouseWheel(oWrapper, (dir) => {
      this._mouse.forceX = undefined
      this._mouse.forceY = undefined
      if(dir === -1) {
        this._stepSmall()
      } else if(dir === 1){
        this._stepBig()
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
      this._current.rotate += 90
      if(this._current.rotate === 360) {
        this._current.rotate = 0
      }
      const oScaleItem = this._viewrWrapper.getElementsByClassName('scale-item')[0] as HTMLDivElement
      
      oScaleItem.style.transform = `scale(${this._scale}) rotate(${this._current.rotate}deg)`

      // this._setScale(this._scale, false)
      console.log("待开发,用一个容器重新装,里面旋转,外部改变尺寸应该好做一些")
    }
    
  }



  get _coordinateX () {    
    return isNull(this._mouse.forceX) ? this._mouse.x : this._mouse.forceX
  }

  get _coordinateY () {    
    return isNull(this._mouse.forceY) ? this._mouse.y : this._mouse.forceY
  }

  _stepBig () {
    const toScale = Math.min(this._scale + scaleRatio, 100)
    this._setScale(toScale, false)
  }

  _stepSmall () {
    const toScale = Math.max(this._scale - scaleRatio, 0.1)
    this._setScale(toScale, false)
  }


  async show (container: HTMLDivElement, url: string) {
    const pdf = await parsePdfInfo(pluginBaseUrl, url)

    this._viewrBody.appendChild(pdf.canvas)
    this._viewrWrapper.appendChild(pdf.tool)

    pdf.canvas.style.transform = 'scale(0)'

    

    container.appendChild(this._viewrWrapper)
    setTimeout(() => {
      this._viewrScale = this._viewrWrapper.getElementsByClassName('scale-item')[0] as HTMLDivElement
      const pos = getRelativePos(this._viewrWrapper)
      this._mouse.x = 0
      this._mouse.y = 0
      this._mouse.forceX = undefined
      this._mouse.forceY = undefined
      this._initCenterScale()  
    }, 70)
    
    
  }


  _setMouseToImgCenter (setX: boolean, setY: boolean) {
    // this._mouse.x = 0
    // this._mouse.y = 0
    // return;
    const oScaleItem = this._viewrWrapper.getElementsByClassName('scale-item')[0] as HTMLDivElement
    const wrapper = getRelativePos(this._viewrWrapper)
    const body = getRelativePos(oScaleItem)
    const scaleSize = this._getRoateSize()

    if(setX) {
      if(body.x + scaleSize.width * this._scale > wrapper.x + wrapper.width) {
        this._mouse.forceX = wrapper.x + wrapper.width / 2
      } else if(body.x<wrapper.x) {
        this._mouse.forceX = (scaleSize.width*this._scale - (wrapper.x - body.x))/2+wrapper.x
      } else {
        this._mouse.forceX = body.x + scaleSize.width*this._scale/2
      }
    }
    
    if(setY) {
      if(body.y + scaleSize.height * this._scale > wrapper.y + wrapper.height) {
        this._mouse.forceY = wrapper.y + wrapper.height / 2
      } else if(body.y < wrapper.y) {
        this._mouse.forceY = (scaleSize.height*this._scale / 2 - (wrapper.y - body.y))+wrapper.y
      } else {
        this._mouse.forceY = body.y + scaleSize.height*this._scale/2
      }
    }
    
  }



  _setScale (v: number, toCenter: boolean) {      
    
    const scaleDomInfo = getRelativePos(this._viewrScale)

    // 获取鼠标在图片的坐标（百分比）
    const preLeft =  this._coordinateX - scaleDomInfo.x
    const preTop =  this._coordinateY - scaleDomInfo.y
    const scaleSize = this._getRoateSize()
    console.log("scaleSize", scaleSize)
    const toLeft = preLeft/this._scale * v
    const toTop = preTop/this._scale * v

    let realLeft = 0, realTop = 0
    let focusX = !toCenter && this._canFocusX(v) && this._canFocusX(this._scale);
    let focusY = !toCenter && this._canFocusY(v) && this._canFocusY(this._scale)

    if(focusX) {
      realLeft = -(toLeft-preLeft) + this._current.left
    } else {
      realLeft = (this._viewrWrapper.offsetWidth - scaleSize.width*v) /2
    }
    if(focusY) {
      realTop = -(toTop - preTop) + this._current.top
    }else {
      realTop = (this._viewrWrapper.offsetHeight - scaleSize.height*v) /2
    }
    
    this._viewrScale.style.transform = `scale(${v}) rotate(${this._current.rotate}deg)`
    
    this._scale = v
    this._setleftTop(realLeft, realTop, v, true, focusX, focusY)
  }

  _canFocusX (scale: number) {
    const pos = getRelativePos(this._viewrWrapper)
    
    const scaleDomInfo = getRelativePos(this._viewrScale)
    const scaleSize = this._getRoateSize()
    const isXCenter = this._viewrScale.offsetWidth*scale<=this._viewrWrapper.offsetWidth
    // 在图片上
    const _xIsInImg = this._coordinateX > scaleDomInfo.x && this._coordinateX <=  scaleSize.width * this._scale + scaleDomInfo.x
    // 图片比容器大
    const _xIsImgBigger = (scaleDomInfo.x + scaleSize.width * this._scale) > pos.x + pos.width

    const isXOn = _xIsInImg && _xIsImgBigger

    return !isXCenter && isXOn
  }
  _canFocusY (scale: number) {
    const pos = getRelativePos(this._viewrWrapper)
    const scaleSize = this._getRoateSize()
    const scaleDomInfo = getRelativePos(this._viewrScale)
    const isYCenterr = this._viewrScale.offsetHeight*scale<=this._viewrWrapper.offsetHeight

    const _yIsInImg =this._coordinateY > scaleDomInfo.y && this._coordinateY <=  scaleSize.height * this._scale + scaleDomInfo.y
    const _yIsImgBigger = (scaleDomInfo.y + scaleSize.height * this._scale) > pos.y + pos.height

    const isYOn = _yIsInImg && _yIsImgBigger

    return !isYCenterr && isYOn
  }

  _onDocMove (ev: any, changeCacheValue?: boolean) {
    
    if(this._mouse.isDown && this._canFocusX(this._scale) && this._canFocusY(this._scale)) {
      // console.log("抬起")
      const moveX = ev.clientX - this._mouse.downX
      const moveY = ev.clientY - this._mouse.downY
      this._setleftTop(this._current.left + moveX, this._current.top + moveY, this._scale, changeCacheValue === true, true, true)
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
    

    if(focusX) {
      const maxLeft = (this._viewrScale.offsetWidth * this._scale-this._viewrWrapper.offsetWidth)
      if(left>0 ) {
        left = 0
      } else if(left <= -maxLeft) {
        left = -maxLeft+1
      }
    }

    if(focusY) {
      const maxTop = (this._viewrScale.offsetHeight * this._scale-this._viewrWrapper.offsetHeight)
      if(top>0) {
        top = 0
      } else if(top<-maxTop) {
        top = -maxTop+1
      }
    }
    

    this._viewrScale.style.left = left -ml + 'px'
    this._viewrScale.style.top = top -mt+'px'



    if(changeCacheValue) {
      console.log("充值", left, top)
      this._current.left = left
      this._current.top = top
    }
  }

  _getRoateSize () {
    const pos = getRelativePos(this._viewrScale)
    let width = pos.width
    let height = pos.height
    if(this._current.rotate === 90 || this._current.rotate === 180) {
      width = pos.height
      height = pos.width
    }
    return {
      width,
      height
    }
  }
  

  _initCenterScale () {
    
    const scaleDomInfo = getRelativePos(this._viewrScale)
    const scaleX = this._viewrWrapper.offsetWidth / this._viewrScale.offsetWidth
    const scaleY = this._viewrWrapper.offsetHeight / this._viewrScale.offsetHeight

    
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
    this._setScale(initScale, true)    

  }

  dispose () {
    this?._mouseWeelObs?.dispose()
    this._onMouseUp()
  }
}