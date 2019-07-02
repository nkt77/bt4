import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4itemComponent } from './bt4item.component';

describe('Bt4itemComponent', () => {
  let component: Bt4itemComponent;
  let fixture: ComponentFixture<Bt4itemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4itemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4itemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
