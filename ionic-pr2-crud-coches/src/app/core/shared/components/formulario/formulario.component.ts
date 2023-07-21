import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Car } from 'src/app/core/models/car/car';
import { CarService } from 'src/app/core/models/car/car.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {

  nuevoCar: Car = {
    id: 0,
    marca: '',
    modelo: "",
    year: 1990,
    kilometros: 0,
    matricula: ""
  };

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCarParaEditar().subscribe((car: Car | null) => {
      if (car) {
        this.nuevoCar = car;
      }
    });
  }


  limpiarFormulario(dataForm: NgForm) {
    this.nuevoCar = {
      id: 0,
      marca: '',
      modelo: "",
      year: 1990,
      kilometros: 0,
      matricula: ""
    };
    dataForm.resetForm();
    this.carService.limpiarCarParaEditar();
  }

  addAndEdit(dataForm: NgForm){
    
    this.carService.agregarCar(this.nuevoCar);
    
    if(dataForm.valid) {
      if(this.nuevoCar.id == 0) {
        this.carService.agregarCar(this.nuevoCar);
      } else {
        this.carService.actualizarCar(this.nuevoCar);
      }
      this.limpiarFormulario(dataForm);
    }
    
  }

  

}
