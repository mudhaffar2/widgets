import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-osr',
  templateUrl: './osr.component.html',
  styleUrls: ['./osr.component.scss']
})
export class OSRComponent implements OnInit {

  constructor() { }

  OSRparts = [
    'image',
    'title',
    'text',
    'kicker',
    'category',
    'brand',
    'date'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.OSRparts, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
  }

}
