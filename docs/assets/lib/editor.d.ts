export declare function start(): void;
declare function edit(name: any, code: any): void;
declare const Editor: {
    edit: typeof edit;
    saveTo: undefined;
};
export default Editor;
