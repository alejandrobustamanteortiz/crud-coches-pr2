import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarService } from '../models/car/car.service';

import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [FormularioComponent],
  imports: [HttpClientModule, RouterModule, CommonModule, IonicModule, FormsModule],
  exports: [HttpClientModule, RouterModule, CommonModule, IonicModule, FormularioComponent, FormsModule],
  providers: [CarService]
})
export class SharedModule { }