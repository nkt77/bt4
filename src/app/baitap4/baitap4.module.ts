import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';
import { Bt4headerComponent } from './bt4header/bt4header.component';
import { Bt4carouselComponent } from './bt4carousel/bt4carousel.component';
import { Bt4itemComponent } from './bt4item/bt4item.component';
import { Bt4phoneComponent } from './bt4phone/bt4phone.component';
import { Bt4laptopComponent } from './bt4laptop/bt4laptop.component';
import { Bt4footerComponent } from './bt4footer/bt4footer.component';

@NgModule({
  declarations: [Baitap4Component, Bt4headerComponent, Bt4carouselComponent, Bt4itemComponent, Bt4phoneComponent, Bt4laptopComponent, Bt4footerComponent],
  exports: [Baitap4Component, Bt4headerComponent, Bt4carouselComponent, Bt4itemComponent, Bt4phoneComponent, Bt4laptopComponent, Bt4footerComponent],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
