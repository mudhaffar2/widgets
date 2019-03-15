import { WidgetSize, WidgetDesign } from './models/widget-design.model';
import { OSRDesign, ADDesign } from './models/widget-design-parts.model';
import { WidgetData } from './models/widget-data.model';

export interface AppState {
    widgetSize: WidgetSize;
    widgetDesign: WidgetDesign;
    osrDesign: OSRDesign;
    adDesign: ADDesign;
    widgetData: WidgetData;
}