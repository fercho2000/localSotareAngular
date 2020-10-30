import { Injectable } from '@angular/core';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }


  agregarClienteStorage(producto: Productos) {

    let productosAntiguos: Productos[] = this.productosLocalStorage;
    producto.productoId = productosAntiguos.length + 1;
    productosAntiguos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productosAntiguos));
  }

  get productosLocalStorage(): Productos[] {

    let productosDelStorage: Productos[] = JSON.parse(localStorage.getItem("productos"));
    if (productosDelStorage == null) {
      return new Array<Productos>();
    }
    return productosDelStorage;
  }
}
