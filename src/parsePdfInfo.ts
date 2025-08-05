import { libraryFile } from "@bestime/utils_browser";
import { changeIndex, debounce, uuid } from "@bestime/utils_base";
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
  console.log("11111")
  const pdfjsLib = await loadPdfPlugin({
    index: resolvePath(baseUrl, 'pdfjs-5.4.78-dist/build/pdf.js?t='+uuid(10)),
    worker: resolvePath(baseUrl, 'pdfjs-5.4.78-dist/build/pdf.worker.js?t='+uuid(10)),
  })

  console.log("22222")
    
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
  

  const pdf: any = await pdfjsLib.getDocument({
    url: fileUrl,
    cMapUrl: resolvePath(baseUrl, 'pdfjs-5.4.78-dist/web/cmaps/'),
    cMapPacked: true
  }).promise

  let currentPageIndex = 0

  const debPage = debounce(function(dir:'next'|'prev'){
    if(dir === 'next') {
      currentPageIndex = changeIndex(pdf.numPages-1, currentPageIndex, 1)
      setCurrentPage(currentPageIndex+1)
    } else {
      currentPageIndex = changeIndex(pdf.numPages-1, currentPageIndex, -1)
      setCurrentPage(currentPageIndex+1)
    }
  }, 200)

  const debNextFun = function () {
    debPage('next')
  }

  const debPrevFun = function () {
    debPage('prev')
  }

  oNextBtn.onclick = debNextFun
  oPreBtn.onclick = debPrevFun  

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