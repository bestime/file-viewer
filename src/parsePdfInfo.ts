import { libraryFile } from "@bestime/utils_browser";
import { changeIndex } from "@bestime/utils_base";
import { resolvePath, type ITypeDom } from './common'

interface IPluginSrc {
  /** .mjs结尾的主文件 */
  index: string,
  /** .mjs结尾的worker文件 */
  worker: string
}






async function loadPdfPlugin (address: IPluginSrc): Promise<any> {
  return new Promise(function (resolve) {
    libraryFile({
      type: 'js',
      module: 'pdfjsLib',
      attribute: {
        author: 'bestime',
        type: 'module'
      },
      url: address.index,
      interceptor: function (ret) {
        ret.GlobalWorkerOptions.workerSrc = address.worker;
      }
    }, resolve)
  })
}




export default async function parsePdfInfo (baseUrl: string, fileUrl: string): Promise<ITypeDom> {
  const pdfjsLib = await loadPdfPlugin({
    index: resolvePath(baseUrl, 'pdf.min.mjs'),
    worker: resolvePath(baseUrl, 'pdf.worker.mjs'),
  })
  
  const canvas = document.createElement('canvas')
  canvas.className = 'original'
  const oToolWrapper = document.createElement('div')
  const oPreBtn = document.createElement('span')
  const oNextBtn = document.createElement('span')
  const oCurrentPage = document.createElement('b')

  oPreBtn.innerText = '上一页'
  oNextBtn.innerText = '下一页'
  oPreBtn.className = 'prev'
  oNextBtn.className = 'next'
  oCurrentPage.innerText = '0/0'
  oToolWrapper.appendChild(oPreBtn)
  oToolWrapper.appendChild(oCurrentPage)
  oToolWrapper.appendChild(oNextBtn)
  let realWidth = 0
  let realHeight = 0


  
  
  oToolWrapper.className = 'file-viewer-pdf-tool-box'
  var scale = 3;
  

  const pdf: any = await pdfjsLib.getDocument(fileUrl).promise

  let currentPageIndex = 0

  oNextBtn.onclick = function () {
    currentPageIndex = changeIndex(pdf.numPages-1, currentPageIndex, 1)
    setCurrentPage(currentPageIndex+1)
  }
  oPreBtn.onclick = function () {
    currentPageIndex = changeIndex(pdf.numPages-1, currentPageIndex, -1)
    setCurrentPage(currentPageIndex+1)
  }
  

  async function setCurrentPage (toPage: number) {
    
    oCurrentPage.innerText = `${toPage}/${pdf.numPages}`
    const pageController = await pdf.getPage(toPage)
    var viewport = pageController.getViewport({scale: scale});
    var context = canvas.getContext('2d');
    realWidth = viewport.width
    realHeight = viewport.height
    canvas.height = viewport.height;
    canvas.width = viewport.width;  
    canvas.style.height = viewport.height + 'px'
    canvas.style.width = viewport.width + 'px'
    
    
    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    var renderTask = pageController.render(renderContext);
    await renderTask.promise 
  }


  await setCurrentPage(1)
  return {
    width: realWidth,
    height: realHeight,
    tool: oToolWrapper,
    source: canvas
  }
}