import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarService } from '../models/car/car.service';






@NgModule({
  declarations: [],
  imports: [HttpClientModule, RouterModule, CommonModule, IonicModule],
  exports: [HttpClientModule, RouterModule, CommonModule, IonicModule],
  providers: [CarService]
})
export class SharedModule { }