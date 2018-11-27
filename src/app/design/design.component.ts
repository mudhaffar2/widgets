import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragMove } from '@angular/cdk/drag-drop';


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

  rows = [['1','2','3'],['4','5','6'],['7','8','9'],['10','11','12']];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    // console.log(event.item.element.nativeElement.getBoundingClientRect(), event.previousContainer.data, event.container.data);
  }

  drag(event: CdkDragMove<string[]>) {
    let widget = document.querySelector('.widget');
    let designSlots = document.querySelectorAll('.designSlots');
    designSlots.forEach((designSlot)=>{
      designSlot.setAttribute('style','');
    });
    widget.removeAttribute('cdkdroplist');
    widget.classList.remove('cdk-drop-list');
  }



}
