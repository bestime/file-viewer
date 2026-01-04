export function resolvePath (base: string,staticPath: string) {
  return base + staticPath
}

export interface ITypeDom {
  source: HTMLCanvasElement | HTMLImageElement,
  tool: HTMLDivElement,
  width: number,
  height: number
}

export interface IViewerConfig {
  theme: 'default' | 'cqpgx-jyzx',
  ratio: number
  outline?: boolean,
  mount?: HTMLDivElement,
  /** PDF模式先，滚动鼠标是否缩放，否则翻页 */
  mouseWheelPdfScale: boolean
}