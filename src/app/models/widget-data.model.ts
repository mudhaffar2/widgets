import { DataDesign, DataFiles, DataOptions } from "./widget-data-parts.model";

export interface WidgetData {
    design: DataDesign;
    domainid: number;
    files: DataFiles;
    permissions: [string];
    formats: number;
    hasVideo: boolean;
    height: number;
    width: number;
    id: number;
    kind: string;
    lang: string;
    options: DataOptions;
    status: number;
    title: string;
    type: string;
}

