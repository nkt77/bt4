import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4laptopComponent } from './bt4laptop.component';

describe('Bt4laptopComponent', () => {
  let component: Bt4laptopComponent;
  let fixture: ComponentFixture<Bt4laptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4laptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4laptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
