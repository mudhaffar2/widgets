import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSRComponent } from './osr.component';

describe('OSRComponent', () => {
  let component: OSRComponent;
  let fixture: ComponentFixture<OSRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
