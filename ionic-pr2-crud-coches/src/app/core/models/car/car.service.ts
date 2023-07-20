import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car[] = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', year: 2020, matricula: 'ABC123', kilometros: 25000 },
    { id: 2, marca: 'Honda', modelo: 'Civic', year: 2019, matricula: 'XYZ789', kilometros: 30000 },
    { id: 3, marca: 'Ford', modelo: 'Focus', year: 2021, matricula: 'LMN456', kilometros: 18000 },
    { id: 4, marca: 'Chevrolet', modelo: 'Cruze', year: 2018, matricula: 'PQR123', kilometros: 40000 },
    { id: 5, marca: 'Volkswagen', modelo: 'Golf', year: 2017, matricula: 'XYZ456', kilometros: 22000 },
    { id: 6, marca: 'Nissan', modelo: 'Sentra', year: 2019, matricula: 'DEF789', kilometros: 15000 },
    { id: 7, marca: 'Hyundai', modelo: 'Elantra', year: 2022, matricula: 'JKL123', kilometros: 5000 },
    { id: 8, marca: 'Kia', modelo: 'Rio', year: 2020, matricula: 'MNO456', kilometros: 80000 },
    { id: 9, marca: 'BMW', modelo: 'X5', year: 2021, matricula: 'ABC789', kilometros: 3000 },
    { id: 10, marca: 'Mercedes-Benz', modelo: 'C-Class', year: 2019, matricula: 'XYZ123', kilometros: 12000 },
    
  ];

  constructor() { }


  getAllCars(){
    return this.cars;
  }
  
}
