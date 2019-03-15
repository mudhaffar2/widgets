import * as widgetDesignTab from '../actions/widget-design-tab.actions';
import { WidgetSize } from 'src/app/models/widget-design.model';

export const initialState: WidgetSize = {
    matrix: [['OSR','AD','OSR'],['OSR','AD','OSR']],
    rows: 2,
    slots: 6
}

export function widgetDesignTabReducer (state: WidgetSize = initialState, action: widgetDesignTab.Actions): WidgetSize {
    switch (action.type) {
        case widgetDesignTab.ActionTypes.NO_OF_ROWS:
            return {...state, rows: action.payload};
        case widgetDesignTab.ActionTypes.NO_OF_SLOTS: 
            return {...state, slots: action.payload};
        case widgetDesignTab.ActionTypes.MATRIX_CHANGE: 
            return {...state, matrix: action.payload};
        default: 
            return state;
    }
}