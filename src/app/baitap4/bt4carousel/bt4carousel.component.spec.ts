import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4carouselComponent } from './bt4carousel.component';

describe('Bt4carouselComponent', () => {
  let component: Bt4carouselComponent;
  let fixture: ComponentFixture<Bt4carouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4carouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4carouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
