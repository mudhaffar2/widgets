export interface Headline {
    status: boolean;
    label: string;
    text: string;
}

export interface Powered {
    status: boolean;
    label: string;
    position: string;
    color: string;
    text: string;
    url: string;
}

export interface Oba {
    status: boolean;
    label: string;
    position: string;
    color: string;
}

export interface Advertise {
    status: boolean;
    label: string;
    parent: string;
    text: string;
    url: string;
}

export interface OSRDesign {
    partsList: string[];
    slotList: string[];
}

export interface ADDesign {
    partsList: string[];
    slotList: string[];
}
