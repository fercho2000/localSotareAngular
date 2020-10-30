import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidoDetalle } from '../models/pedido-detalle';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedido = new Pedido();
  constructor() {
    this.pedido = this.ultimoPedido;
  }
  guardarLocalStorage() {
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido));
  }

  get ultimoPedido(): Pedido {
    let pedidoLocalstorage: Pedido = new Pedido(JSON.parse(localStorage.getItem("ultimoPedido")));
    if (pedidoLocalstorage == null) {
      return new Pedido();
    }
    return pedidoLocalstorage;
  }
}
