import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4headerComponent } from './bt4header.component';

describe('Bt4headerComponent', () => {
  let component: Bt4headerComponent;
  let fixture: ComponentFixture<Bt4headerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4headerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
