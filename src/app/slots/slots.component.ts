import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { WidgetSize } from '../models/widget-design.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  slots: any;
  
  widgetSize: Observable<WidgetSize>;
  matrix: string[][];
  
  ngOnInit() {
    this.store.pipe(select((state: any) => state.widgetSize)).subscribe(widgetSize => this.widgetSize = widgetSize);
    this.matrix = this.widgetSize.matrix;
    this.slots = this.flat(this.matrix);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.slots, event.previousIndex, event.currentIndex);
  }

  flat(arr) {
    var array = [].concat(...arr);
    return array;
  }

}
