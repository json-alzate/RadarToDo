import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';

import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import * as fromComponents from './components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    HomePage,
    ...fromComponents.COMPONENTS
  ],
  entryComponents: [
    ...fromComponents.ENTRY_COMPONENTS
  ]
})
export class HomePageModule { }
