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
  theme: 'default',
  mount?: HTMLDivElement
}