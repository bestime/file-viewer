import { observeMouseWheel } from '@bestime/utils_browser';

declare function install(baseUrl: string): void;
declare class FileViewer {
    _viewrWrapper: HTMLDivElement;
    _viewrBody: HTMLDivElement;
    _viewrScale: HTMLDivElement;
    _mouse: {
        x: number;
        y: number;
        forceX: number | undefined;
        forceY: number | undefined;
        downX: number;
        downY: number;
        isDown: boolean;
    };
    _current: {
        /** 这个是上一次对齐左上角的left值，不参与居中计算 */
        left: number;
        /** 这个是上一次对齐左上角的top值，不参与居中计算 */
        top: number;
        center: number[];
        initScale: number;
        rotate: number;
    };
    _scale: number;
    _mouseWeelObs: ReturnType<typeof observeMouseWheel> | undefined;
    constructor();
    get _coordinateX(): number;
    get _coordinateY(): number;
    _stepBig(): void;
    _stepSmall(): void;
    show(container: HTMLDivElement, url: string): Promise<void>;
    _setMouseToImgCenter(setX: boolean, setY: boolean): void;
    _setScale(v: number, toCenter: boolean): void;
    _canFocusX(scale: number): boolean;
    _canFocusY(scale: number): boolean;
    _onDocMove(ev: any, changeCacheValue?: boolean): void;
    _onMouseUp(ev?: any): void;
    _setleftTop(left: number, top: number, scale: number, changeCacheValue: boolean, focusX: boolean, focusY: boolean): void;
    _getRoateSize(): {
        width: number;
        height: number;
    };
    _initCenterScale(): void;
    dispose(): void;
}

export { FileViewer as default, install };
