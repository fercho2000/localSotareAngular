import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidoDetalle } from '../models/pedido-detalle';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  detalleProductos: Array<PedidoDetalle> = new Array<PedidoDetalle>();
  constructor(public pedidoServices: PedidosService) { }

  ngOnInit(): void {
    this.detalleProductos = this.pedidoServices.pedido.pedidoDetalle;
    // let pedido: Pedido = new Pedido();
    // pedido.pedidoID = 1;
    // pedido.clienteID = 1;
    // pedido.nombreCliente = "juana";
    // pedido.total = 15002;
    // pedido.pedidoDetalle.push(
    //   { nombreProducto: "maiz", cantidad: 12, precio: 1000, productoID: 1, total: 1414 },
    //   { nombreProducto: "arroz", cantidad: 12, precio: 2000, productoID: 2, total: 10000 }
    // );
    // console.log("pedidos...", pedido);
  }
  calcularTotal(posicion: number) {
    this.pedidoServices.pedido.actualizarCantidad(posicion);
    this.pedidoServices.guardarLocalStorage();
  }


}
