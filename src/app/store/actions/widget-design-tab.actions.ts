import { Action } from '@ngrx/store';

export enum ActionTypes {
    NO_OF_ROWS = "No. of rows",
    NO_OF_SLOTS = "No. of slots"
}

export class NoOfRowsAction implements Action {
    readonly type = ActionTypes.NO_OF_ROWS;
    constructor (public payload: number) {}
}
export class NoOfslotsAction implements Action {
    readonly type = ActionTypes.NO_OF_SLOTS;
    constructor (public payload: number) {}
}

export type Actions = NoOfRowsAction | NoOfslotsAction;