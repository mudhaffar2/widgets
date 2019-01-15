import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { WidgetSize } from '../models/widget-design.model';
import * as widgetDesignTab from '../store/actions/widget-design-tab.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  
  widgetSize: Observable<WidgetSize>;
  matrix: string[][];
  widgetSlotRowChange: boolean = true;
  matrixRows: number;
  matrixNoOfSlots: number;
  matrixCols: number;
  matrixExtraSlots: number;
  slotNumber: number;

  constructor(private store: Store<AppState>) { 
  }
  
  ngOnInit() {
    this.getMatrixRowsSlots();
  }

  getMatrixRowsSlots() {
    this.store.pipe(select((state: any) => state.widgetSize)).subscribe(widgetSize => this.widgetSize = widgetSize);
    this.matrix = this.widgetSize.matrix;
    this.matrixRows = this.widgetSize.rows;
    this.matrixNoOfSlots = this.widgetSize.slots;
    this.getMatrixCols(this.matrixRows, this.matrixNoOfSlots);
  }

  getMatrixCols(rows, slots) {
    var cols = Math.floor(slots / rows);
    var extraSlots = slots%rows;
    this.matrixCols = cols;
    this.matrixExtraSlots = extraSlots;
  }

  getSlotNumber(rowIdx,colIdx) {
    let slotNumber = 0;
    if (rowIdx > 0) {
      for (let r = 0; r < rowIdx; r++) {
        for (let c = 0; c < this.matrix[r].length; c++) {
          slotNumber += 1;
        }
      }
    }
    return slotNumber+colIdx+1;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.store.dispatch(new widgetDesignTab.MatrixChangeAction(this.matrix));
  }

  adOsrToggle(event,rowIdx,colIdx) {
    var slotText = event.target.textContent;
    slotText = (slotText === "OSR" ? "AD" : "OSR");
    this.matrix = this.changeMatrixAdOsr(slotText,rowIdx,colIdx,this.matrix);
    this.store.dispatch(new widgetDesignTab.MatrixChangeAction(this.matrix));
  }

  changeMatrixAdOsr(adOsr,rowIdx,colIdx,matrix) {
    matrix[rowIdx][colIdx] = adOsr;
    return matrix;
  }

  NoRowsSlots(event) {
    switch (event.target.name) {
      case "widget_no_of_rows": {
        this.widgetSlotRowChange = true;
        this.store.dispatch(new widgetDesignTab.NoOfRowsAction(parseInt(event.target.value)));
        this.getMatrixRowsSlots();
        this.matrixReform();
        this.getMatrixRowsSlots();
        return;
      }
      case "widget_no_of_slots": {
        this.widgetSlotRowChange = true;
        this.store.dispatch(new widgetDesignTab.NoOfslotsAction(parseInt(event.target.value)));
        this.getMatrixRowsSlots();
        this.matrixReform();
        this.getMatrixRowsSlots();
        return;
      }
      default:
        return;
    }
  }

  matrixReform() {
    if (this.widgetSlotRowChange) {
      let newMatrix = [];
      for(let r = 0; r < this.matrixRows; r++) {
        newMatrix.push([]);
        newMatrix[r].push(new Array(this.matrixCols))
        for(let c = 0; c < this.matrixCols; c++) {
          newMatrix[r][c] = 'OSR';
        }
      }
      if (this.matrixExtraSlots) {
        for(let c = 0; c < this.matrixExtraSlots; c++) {
          newMatrix[newMatrix.length-1].push('OSR');
        }
      }
      this.widgetSlotRowChange = false;
      this.store.dispatch(new widgetDesignTab.MatrixChangeAction(newMatrix));
    }
    return;
  }

}
