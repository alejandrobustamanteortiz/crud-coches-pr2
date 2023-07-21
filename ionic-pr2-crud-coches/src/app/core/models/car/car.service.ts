import { Injectable } from '@angular/core';
import { Car } from './car';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car[] = [];
  private carParaEditar: BehaviorSubject<Car | null> = new BehaviorSubject<Car | null>(null); 

  constructor() { 

    this.cargarCarsIniciales();
    this.cargarCarsGuardados();
  }

  cargarCarsGuardados(){
    const datosGuardados = localStorage.getItem('cars');
    if(datosGuardados){
      this.cars = JSON.parse(datosGuardados);
    }

  }

  cargarCarsIniciales(){

    this.cars = [
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
  }

  guardarCars() {
    localStorage.setItem('cars', JSON.stringify(this.cars));
  }

  //obtener todos los coches
  getCars(): Car[] { 
    return this.cars;
  }

  //añadir coche
  agregarCar(nuevoCar: Car) { //La funciónn agregarDato acepta un parámetro nuevoDato de tipo Data
    const nuevoId = this.generarNuevoId(); //Llamamos a la función generarNuevoId() para obtener un nuevo identificador único para el dato que se va a agregar.
    nuevoCar.id = nuevoId; //Se asigna el nuevo identificador único (nuevoId) al atributo id del objeto nuevoDato
    this.cars.push(nuevoCar); //El objeto nuevoDato se agrega al array this.datos. 
    this.guardarCars(); //Llamamos al método guardarDatos() para almacenar los datos actualizados en el almacenamiento local del navegador utilizando localStorage.
  }

  //genera nuevo id
  private generarNuevoId(): number {
    const ids = this.cars.map(car => car.id); //el método map() en el array this.datos crea un nuevo array ids que contiene todos los identificadores (id) de los datos existentes. El método map() itera sobre cada elemento del array this.datos y devuelve un nuevo array con los identificadores.
    const maxId = Math.max(...ids); //el método Math.max() junto con el operador de propagación (...) obtiene el valor máximo de los identificadores en el array ids, y el operador de propagación descompone el array ids en una secuencia de argumentos para que Math.max() pueda determinar el valor máximo correctamente.
    return maxId + 1; //devuelve el valor máximo encontrado en el paso anterior incrementado en 1, lo que asegura que el nuevo identificador generado sea único para un nuevo dato que se vaya a agregar
  }

  // elimina coche
  eliminarCar(id: number) { //Esta función acepta un parámetro id de tipo number.
    const index = this.cars.findIndex(car => car.id === id); //Utilizamos el método findIndex() del array this.datos para buscar el índice del dato que tiene un identificador coincidente con el id proporcionado. findIndex() recibe una función de callback que se ejecuta por cada elemento del array y devuelve el índice del primer elemento que cumple con la condición especificada. En este caso, se busca un dato cuyo id sea igual al id proporcionado.
    if (index !== -1) { //Se verifica si se encontró un índice válido. Un valor de -1 indica que no se encontró un dato con el id proporcionado en la lista.
      this.cars.splice(index, 1); // Si se encontró un índice válido, se utiliza el método splice(), que sirve para modificar el array original eliminando o reemplazando elementos.
      this.guardarCars(); //Llamamos al método guardarDatos() para almacenar los datos actualizados en el almacenamiento local del navegador utilizando localStorage.
    }
  }

  //actualiza coche
  actualizarCar(datoActualizado: Car) { //Acepta un parámetro datoActualizado de tipo Data
    const index = this.cars.findIndex(car => car.id === datoActualizado.id); //Utilizamos el método findIndex() del array this.datos para buscar el índice del dato que tiene un identificador coincidente con el id del datoActualizado proporcionado. 
    if (index !== -1) { //Se verifica si se encontró un índice válido (index !== -1) para el dato que se desea actualizar. 
      this.cars[index] = datoActualizado; //Si se encontró un índice válido, se actualiza el dato en la posición index del array this.datos con el datoActualizado. Esto reemplaza el dato existente en esa posición por el dato actualizado.
      this.guardarCars();//Llamamos al método guardarDatos() para almacenar los datos actualizados en el almacenamiento local del navegador utilizando localStorage.
    }
  }

  getCarParaEditar(): Observable<Car | null> {
    return this.carParaEditar.asObservable(); //devuelve un Observable que emite valores de tipo Data | null. Los componentes o servicios que se suscriban a este Observable podrán recibir y reaccionar a los valores emitidos, que pueden ser objetos Data o null. Esto permite obtener el dato que se está editando en un componente y recibir actualizaciones cuando cambia.
  }

  setCarParaEditar(dato: Car | null) {
    this.carParaEditar.next(dato); //se utiliza para establecer el dato que se está editando. Toma un parámetro dato de tipo Data | null, lo que significa que se puede proporcionar un objeto Data o el valor null. Utiliza el método next() en this.datoParaEditar para emitir el nuevo valor al Observable, lo que notificará a todos los suscriptores que se ha producido un cambio en el dato que se está editando.
  }

  limpiarCarParaEditar() {
    this.carParaEditar.next(null); //se utiliza para eliminar un dato del array this.datos basándose en su identificador único (id). Utiliza el método findIndex() para buscar el índice del dato con el id proporcionado en el array. Si se encuentra un índice válido, se utiliza el método splice() para eliminar ese elemento del array. Luego, se llama al método guardarDatos() para almacenar los datos actualizados en el almacenamiento local.
  }

}


