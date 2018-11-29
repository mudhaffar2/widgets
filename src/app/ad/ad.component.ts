import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class ADComponent implements OnInit {

  constructor() { }

  ADparts = [
    'image',
    'title',
    'text',
    'brand',
    'adhint'
  ];

  ADslot = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.container == event.previousContainer) {
      moveItemInArray(  event.container.data, 
                        event.previousIndex, 
                        event.currentIndex);
    } else {
      transferArrayItem(  event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex)
    }
  }

  ngOnInit() {
  }

}
