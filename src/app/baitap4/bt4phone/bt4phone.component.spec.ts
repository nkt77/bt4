import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4phoneComponent } from './bt4phone.component';

describe('Bt4phoneComponent', () => {
  let component: Bt4phoneComponent;
  let fixture: ComponentFixture<Bt4phoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4phoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4phoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
