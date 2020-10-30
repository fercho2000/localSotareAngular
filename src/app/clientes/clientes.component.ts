import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';

class Clientes {
  nombre: string;
  apellido: string;
  edad: number;
}

interface Productos {
  nombre: String;
  precio: Number;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();
  productos: Array<Productos> = new Array<Productos>();

  constructor() { }

  ngOnInit(): void {
    // this.clientes.push(
    //   { nombre: 'carmen', apellido: 'lopez', edad: 22 },
    //   { nombre: 'Jose', apellido: 'usuga', edad: 23 },
    //   { nombre: 'luis', apellido: 'lopez', edad: 22 })

    // this.productos.push(
    //   { nombre: 'maiz', precio: 200 },
    //   { nombre: 'arrox', precio: 200 },
    //   { nombre: 'frijol', precio: 400 }
    // );
  }

  guardarCliente() {
    let clientesAgregar: Array<Clientes> = new Array<Clientes>();

    clientesAgregar.push(
      { nombre: 'carmen', apellido: 'lopez', edad: 22 },
      { nombre: 'Jose', apellido: 'usuga', edad: 23 },
      { nombre: 'luis', apellido: 'lopez', edad: 22 });

    localStorage.setItem("clientes", JSON.stringify(clientesAgregar));
  }

  

  guardarProductos() {
    let productos: Array<Productos> = new Array<Productos>();
    productos.push(
      { nombre: 'maiz', precio: 200 },
      { nombre: 'arrox', precio: 200 },
      { nombre: 'frijol', precio: 400 }
    );
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  leer() {

    this.clientes = JSON.parse(localStorage.getItem("clientes"));
    this.productos = JSON.parse(localStorage.getItem("productos"));
  }

  eliminarClientes() {
    localStorage.removeItem("clientes");
  }
  eliminarProductos() {
    localStorage.removeItem("productos");
  }

  eliminarTodos() {
    localStorage.clear();
  }

  get clintesLocales(): Clientes[] {
    let clientes = JSON.parse(localStorage.getItem("clientes"));
    if (clientes == null) {
      return new Array<Clientes>();
    }
    return clientes;
  }


  get productosLocales(): Productos[] {
    let productos = JSON.parse(localStorage.getItem("productos"));
    if (productos == null) {
      return new Array<Productos>();
    }
    return productos;
  }

}
