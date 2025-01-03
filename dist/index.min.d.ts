import { observeMouseWheel } from '@bestime/utils_browser';

declare function install(baseUrl: string): void;
declare class FileViewer {
    _viewrWrapper: HTMLDivElement;
    _viewrBody: HTMLDivElement;
    _scale: number;
    _mouseWeelObs: ReturnType<typeof observeMouseWheel> | undefined;
    constructor();
    _stepBig(): void;
    _stepSmall(): void;
    show(container: HTMLDivElement, url: string): Promise<void>;
    _setScale(v: number): void;
    _updateScale(): void;
    dispose(): void;
}

export { FileViewer as default, install };
