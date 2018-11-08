import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {

  constructor() { }

  slots = [
    'Slot1',
    'Slot2',
    'Slot3',
    'Slot4',
    'Slot5',
    'Slot6'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.slots, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
  }

}
