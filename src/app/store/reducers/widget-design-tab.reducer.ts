import * as widgetDesignTab from '../actions/widget-design-tab.actions';
import { WidgetSize } from 'src/app/models/widget-design-tab.models';

export const initialState: WidgetSize = {
    rows: 4,
    slots: 12
}

export function widgetDesignTabReducer (state = initialState, action: widgetDesignTab.Actions) {
    switch (action.type) {
        case widgetDesignTab.ActionTypes.NO_OF_ROWS: {
            return action.payload;
        }
        case widgetDesignTab.ActionTypes.NO_OF_SLOTS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}