// design -> render -> default and pet parts

export interface StandardImage {
    label: string;
    width: number;
    height: number;
    crop: boolean;
    parent: string;
}

export interface DefaultImage extends StandardImage {
    default: string;
}

export interface PetImage extends StandardImage {
    maxWidth: number;
    autoClose: boolean;
    mode: string;
    engage: string;
    playButton: string;
}

export interface DefaultBrand {
    label: string;
    length: number;
    ellipsis: boolean;
    split: boolean;
    prefix: string;
    suffix: string;
    default: string;
    parent: string;
}
export interface PetBrand extends DefaultBrand {
    landingpage: boolean;
}

export interface StandardTextField extends DefaultBrand {
    line: number;
}

export interface TextField extends StandardTextField {
    more: string;
}

export interface Date {
    label: string;
    format: string;
    diff: boolean;
    parent: string;
    interval: object;
}

export interface Adhint {
    color: string;
    type: string;
    multiple: boolean;
    ad: string;
    pcd: string;
    parent: string;
}

export interface RenderDefault {
    image: DefaultImage;
    kicker: StandardTextField;
    category: StandardTextField;
    title: StandardTextField;
    text: TextField;
    brand: DefaultBrand;
    date: Date;
}

export interface RenderPet {
    image: PetImage;
    brand: PetBrand;
    title: StandardTextField;
    text: TextField;
    adhint: Adhint;
}

// design -> render -> target part

export interface TargetHeadline {
    label: string;
    text: string;
}

export interface TargetOba {
    label: string;
    position: string;
    color: string;
}

export interface TargetPowered extends TargetOba {
    text: string;
    url: string;
}

export interface TargetAdvertise extends TargetHeadline {
    parent: string;
    url: string;
}

export interface RenderTarget {
    headline: TargetHeadline;
    list: object;
    powered: TargetPowered;
    oba: TargetOba;
    advertise: TargetAdvertise;
}

// design -> render part

export interface DesignRender {
    target: RenderTarget;
    default: RenderDefault;
    pet: RenderPet;
}

// design -> slots part

export interface SlotTypeCondition {
    adblocker: string;
    geo_user: string;
    device_type: string;
    os: string;
    browser: string;
    category: string;
}

export interface SlotType {
    type: string;
    condition: SlotTypeCondition;
    transparency: number;
    filter: string;
}

export interface SlotObject {
    preferences: [SlotType];
}

// design part

export interface DataDesign {
    renderHTML: boolean;
    listStyle: string;
    render: DesignRender;
    slots: [SlotObject];
}

// files part

export interface DataFiles {
    "custom.css": string;
    "layout.css": string;
    "structure.css": string;
    "widgetScript.js": string; 
}

// options -> styleTemplates part

export interface StyleTemplatesObject {
    "layout.css": string;
    "structure.css": string;
}

// options -> flagPermissions part

export interface FlagePermissionsObject {
    deny: [number];
    allow: [number];
}

// options part

export interface DataOptions {
    comment: string;
    hardFloor: number;
    styleTemplates: StyleTemplatesObject;
    layout: string;
    element: string;
    getitems: string;
    integration: string;
    alias: string;
    context_filter: string;
    priority: string;
    rewriteAMP: string;
    redirectParam: string;
    hidden: boolean;
    baseTemplate: string;
    createdByTool: string;
    toolVersion: number;
    flagPermissions: FlagePermissionsObject;
    isActive: number;
    use_sid: number;
}
