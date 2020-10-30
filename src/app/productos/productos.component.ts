import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/productos';
import { PedidosService } from '../services/pedidos.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Array<Productos> = new Array<Productos>();
  constructor(protected productoServicio: ProductosService, public pedidoServices: PedidosService) { }

  ngOnInit(): void {
    this.productos = this.productoServicio.productosLocalStorage;
  }

  buscarProducto(nombrePorducto: string) {
    this.productos = this.productoServicio.productosLocalStorage.filter(producto => {
      return producto.nombre.toLowerCase().includes(nombrePorducto.toLowerCase());
    });
  }
  agregar(producto: Productos) {
    this.pedidoServices.pedido.agregarPedido(producto);
    this.pedidoServices.guardarLocalStorage();
  }

}
