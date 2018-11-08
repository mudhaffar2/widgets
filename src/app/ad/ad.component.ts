import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ADparts, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
  }

}
