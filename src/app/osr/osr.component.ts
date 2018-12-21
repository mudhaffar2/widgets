import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as Variables from '../../assets/all-variables';

@Component({
  selector: 'app-osr',
  templateUrl: './osr.component.html',
  styleUrls: ['./osr.component.scss']
})
export class OSRComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OSRparts = [
    'image',
    'title',
    'text',
    'kicker',
    'category',
    'brand',
    'date'
  ];

  OSRslot = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.container == event.previousContainer) {
      moveItemInArray(  event.container.data, 
                        event.previousIndex, 
                        event.currentIndex);
    } else {
      transferArrayItem(  event.previousContainer.data, 
                          event.container.data, 
                          event.previousIndex, 
                          event.currentIndex);
    }
  }

  slotPartClick (part) {
    Variables.AllParts.forEach(item => {
      this['OSR'+item] = false;
    });
    this['OSR'+part] = true;
  }

}
