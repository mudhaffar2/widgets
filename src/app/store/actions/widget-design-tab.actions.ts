import { Action } from '@ngrx/store';

export enum ActionTypes {
    NO_OF_ROWS = "No. of rows",
    NO_OF_SLOTS = "No. of slots",
    MATRIX_CHANGE = 'Matrix change'
}

export class NoOfRowsAction implements Action {
    readonly type = ActionTypes.NO_OF_ROWS;
    constructor (public payload: number) {}
}
export class NoOfslotsAction implements Action {
    readonly type = ActionTypes.NO_OF_SLOTS;
    constructor (public payload: number) {}
}
export class MatrixChangeAction implements Action {
    readonly type = ActionTypes.MATRIX_CHANGE;
    constructor (public payload: string[][]) {}
}

export type Actions = NoOfRowsAction | NoOfslotsAction | MatrixChangeAction;