import { WidgetSize } from './models/widget-design.model';
import { OSRDesign, ADDesign } from './models/osr-ad-design.model';

export interface AppState {
    widgetSize: WidgetSize;
    osrDesign: OSRDesign;
    adDesign: ADDesign;
}