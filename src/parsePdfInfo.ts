import { libraryFile } from "@bestime/utils_browser";
import { changeIndex } from "@bestime/utils_base";

interface IPluginSrc {
  /** .mjs结尾的主文件 */
  index: string,
  /** .mjs结尾的worker文件 */
  worker: string
}
function resolvePath (base: string,staticPath: string) {
  return base + staticPath
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



async function loadPdfPlugin (address: IPluginSrc) {
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

async function loadPluginAllSource (baseUrl: string) {
  const [pdfjsLib]: any = await Promise.all([
    loadPdfPlugin({
      index: resolvePath(baseUrl, 'pdf.min.mjs'),
      worker: resolvePath(baseUrl, 'pdf.worker.mjs'),
    }),
    loadPdfCss(resolvePath(baseUrl, 'index.min.css'))
  ])

  return pdfjsLib
  
}


export default async function parsePdfInfo (baseUrl: string, fileUrl: string): Promise<{
  canvas: HTMLCanvasElement,
  tool: HTMLDivElement
}> {
  const pdfjsLib = await loadPluginAllSource(baseUrl)

  
  const canvas = document.createElement('canvas')
  canvas.className = 'scale-item'
  const oToolWrapper = document.createElement('div')
  const oPreBtn = document.createElement('span')
  const oNextBtn = document.createElement('span')
  const oCurrentPage = document.createElement('b')

  oPreBtn.innerText = '上一页'
  oNextBtn.innerText = '下一页'
  oCurrentPage.innerText = '0/0'
  oToolWrapper.appendChild(oPreBtn)
  oToolWrapper.appendChild(oCurrentPage)
  oToolWrapper.appendChild(oNextBtn)


  
  
  oToolWrapper.className = 'file-viewer-pdf-tool-box'
  var scale = 1;
  

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
    canvas.height = viewport.height;
    canvas.width = viewport.width;  
    canvas.style.width = viewport.width + 'px'
    canvas.style.height = viewport.height + 'px'
    
    
    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    var renderTask = pageController.render(renderContext);
    await renderTask.promise 
  }


  setCurrentPage(1)
  return {
    tool: oToolWrapper,
    canvas: canvas
  }
}