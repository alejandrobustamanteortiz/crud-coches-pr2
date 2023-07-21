import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car/car';
import { CarService } from 'src/app/core/models/car/car.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars: Car[]= [];

 

  constructor(private carService: CarService) {}
  ngOnInit() {

    this.getAllCars();
 
  }

  getAllCars() {
    this.cars = this.carService.getCars();
  }

  onDeleteCarById(id: number): void {
    this.carService.eliminarCar(id);
    this.cars = this.carService.getCars();
  }

  
  
  }