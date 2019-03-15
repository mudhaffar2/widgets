import { Headline, Oba, Powered, Advertise } from './widget-design-parts.model';

export interface WidgetSize {
    matrix: string[][];
    rows: number;
    slots: number;
}

export interface WidgetDesign {
    name: string;
    comment: string;
    language: string;
    hardfloor: number;
    layout: string;
    structure: string;
    metalayout: string;
    metaelements: string;
    metagetitems: string;
    metaintegration: string;
    alias: string;
    context: string;
    priority: string;
    urlrewrite: string;
    redirectparams: string;
    hidden: boolean;
    headline: Headline;
    oba: Oba;
    powered: Powered;
    advertise: Advertise;
}