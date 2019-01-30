import { WidgetSize, WidgetDesign } from './models/widget-design.model';
import { OSRDesign, ADDesign } from './models/all-parts.model';

export interface AppState {
    widgetSize: WidgetSize;
    widgetDesign: WidgetDesign;
    osrDesign: OSRDesign;
    adDesign: ADDesign;
}