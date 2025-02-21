import { observeMouseWheel } from '@bestime/utils_browser';

interface ITypeDom {
    source: HTMLCanvasElement | HTMLImageElement;
    tool: HTMLDivElement;
    width: number;
    height: number;
}
interface IViewerConfig {
    theme: 'default';
    outline?: boolean;
    mount?: HTMLDivElement;
}

interface IFileItem {
    url: string;
    type: 'image' | 'pdf';
}
declare function install(baseUrl: string): void;
declare class FileViewer {
    _viewrWrapper: HTMLDivElement;
    _viewrBody: HTMLDivElement;
    _scalevalue: HTMLElement;
    _setpvalue: HTMLElement;
    _viewrScale: HTMLDivElement;
    _initTimer: any;
    _config: IViewerConfig;
    _dataList: IFileItem[];
    _viewTimes: number;
    _mouse: {
        x: number;
        y: number;
        forceX: number | undefined;
        forceY: number | undefined;
        downX: number;
        downY: number;
        isDown: boolean;
    };
    _rotate: {
        timer: any;
        value: number;
        locking: boolean;
    };
    _current: {
        index: number;
        file: ITypeDom | undefined;
        /** 这个是上一次对齐左上角的left值，不参与居中计算 */
        left: number;
        /** 这个是上一次对齐左上角的top值，不参与居中计算 */
        top: number;
        center: number[];
        initScale: number;
        minScale: number;
        maxScale: number;
    };
    _scale: number;
    _mouseWeelObs: ReturnType<typeof observeMouseWheel> | undefined;
    constructor(options?: Partial<IViewerConfig>);
    _reset(): void;
    get _coordinateX(): number;
    get _coordinateY(): number;
    _stepBig(): void;
    _stepSmall(): void;
    setData(data: IFileItem | IFileItem[]): void;
    /**
     * 预览一个资源
     * @param index 资源索引
     */
    preview(index: number): void;
    _show(item: IFileItem): Promise<void>;
    _setMouseToImgCenter(setX: boolean, setY: boolean): void;
    _setScale(v: number, toCenter: boolean): void;
    _canFocusX(scale: number): boolean;
    _canFocusY(scale: number): boolean;
    _onDocMove(ev: any, changeCacheValue?: boolean): void;
    _onMouseUp(ev?: any): void;
    _setleftTop(left: number, top: number, scale: number, changeCacheValue: boolean, focusX: boolean, focusY: boolean): void;
    _initCenterScale(): void;
    dispose(): void;
}

export { FileViewer as default, install };
