import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { WidgetSize } from '../models/widget-design-tab.models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor(public store: Store<AppState>) { 
    
  }

  widgetSize: Observable<WidgetSize>;
  rows: any;
  slots: any;
  cols: any;

  ngOnInit() {
    this.widgetSize = this.store.select(state => state.widgetSize);
    this.rows = this.widgetSize.rows;
    this.slots = this.widgetSize.slots;
    // this.rows = 4;
    // this.cols = 3;
    console.log(this.widgetSize, this.rows);
  }

  matrix = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    
  }

  adOsrToggle(event) {
    event.target.textContent = (event.target.textContent === "OSR" ? "AD" : "OSR");
  }



}
