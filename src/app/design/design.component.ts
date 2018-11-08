import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor() { 
    
  }


  ngOnInit() {
    
  }

  rows = [];
    

  firstSlots = [
    'Slot1',
    'Slot2',
    'Slot3'
  ];
  secondSlots = [
    'Slot4',
    'Slot5',
    'Slot6'
  ];
  thirdSlots = [
    'Slot7',
    'Slot8',
    'Slot9'
  ];
  fourthSlots = [
    'Slot10',
    'Slot11',
    'Slot12'
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.container.data);
    console.log(event.item.data);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  createArrayRows () {
    let widgetRows = document.querySelectorAll('.widget > div');
    widgetRows.forEach((row) => {
      this.rows.push(row);
    });
  }

}
