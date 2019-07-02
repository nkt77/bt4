import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4footerComponent } from './bt4footer.component';

describe('Bt4footerComponent', () => {
  let component: Bt4footerComponent;
  let fixture: ComponentFixture<Bt4footerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt4footerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt4footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
