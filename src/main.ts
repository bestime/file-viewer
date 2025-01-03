
import parsePdfInfo from './parsePdfInfo'
import "./index.scss"
import { observeMouseWheel } from '@bestime/utils_browser'





let pluginBaseUrl = ''



export function install (baseUrl: string) {
  pluginBaseUrl = baseUrl
}

export default class FileViewer {
  _viewrWrapper: HTMLDivElement
  _viewrBody: HTMLDivElement
  
  _scale =1
  _mouseWeelObs: ReturnType<typeof observeMouseWheel> | undefined
  constructor () {
 
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
    const oBig = document.createElement('span')
    const oSmall = document.createElement('span')

    oPre.innerText = '上一个'
    oNext.innerText = '下一个'
    oBig.innerText = '放大'
    oSmall.innerText = '缩小'

    oTool.appendChild(oToolBody)
    oToolBody.appendChild(oPre)
    oToolBody.appendChild(oNext)
    oToolBody.appendChild(oBig)
    oToolBody.appendChild(oSmall)
    oWrapper.appendChild(oTool)
    oWrapper.appendChild(oBody)

    oBig.onclick = this._stepBig
    oSmall.onclick = this._stepSmall

    this._mouseWeelObs = observeMouseWheel(oWrapper, (dir) => {
      console.log("dir", dir)
      if(dir === -1) {
        this._stepSmall()
      } else if(dir === 1){
        this._stepBig()
      }
    }, true)
    this._viewrBody = oBody
    this._viewrWrapper = oWrapper
    
  }

  _stepBig () {
    const toScale = Math.min(this._scale + 0.1, 4)
    this._setScale(toScale)
  }

  _stepSmall () {
    const toScale = Math.max(this._scale - 0.1, 0.1)
    this._setScale(toScale)
  }



  async show (container: HTMLDivElement, url: string) {
    const pdf = await parsePdfInfo(pluginBaseUrl, url)

    this._viewrBody.appendChild(pdf.canvas)
    this._viewrWrapper.appendChild(pdf.tool)

    

    container.appendChild(this._viewrWrapper)
    setTimeout(() => {
      this._updateScale()  
    }, 200)
    
    
  }

  _setScale (v: number) {
    const oScaleItem = this._viewrWrapper.getElementsByClassName('scale-item')[0] as HTMLDivElement
    this._scale = v
    oScaleItem.style.transform = `scale(${v})`

  }

  _updateScale () {
    const oScaleItem = this._viewrWrapper.getElementsByClassName('scale-item')[0] as HTMLDivElement
    
    const scaleX = this._viewrWrapper.offsetWidth / oScaleItem.offsetWidth
    const scaleY = this._viewrWrapper.offsetHeight / oScaleItem.offsetHeight

    console.log("oBody.offsetWidth", this._viewrWrapper.offsetWidth, oScaleItem.offsetWidth, oScaleItem)
    const initScale = Math.min(scaleX, scaleY, 1)
    this._setScale(initScale)
    

  }

  dispose () {
    this?._mouseWeelObs?.dispose()
  }
}