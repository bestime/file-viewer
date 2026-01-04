
import { type ITypeDom } from './common'






export default async function parseIMageInfo (fileUrl: string): Promise<ITypeDom> {

  const oTool = document.createElement('div')
  const oImg = document.createElement('img') as HTMLImageElement
  oImg.className = 'original'
  return new Promise(function (resolve) {
    oImg.onload = function () {
      oImg.style.width = oImg.width + 'px'
      oImg.style.height = oImg.height + 'px'
      resolve({
        source: oImg,
        tool: oTool,
        width: oImg.width,
        height: oImg.height
      })
    };
    oImg.onerror = function () {
      resolve({
        width: oImg.width,
        height: oImg.height,
        source: oImg,
        tool: oTool,
      })
    }
    
    oImg.src = fileUrl
  })
}