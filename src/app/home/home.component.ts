import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>();
  constructor(public clienteServicios: ClientesService, public pedidoServices: PedidosService, public route: Router) { }

  ngOnInit(): void {
    this.clientes = this.clienteServicios.clientesLocalStorage;
  }

  buscarCliente(nombreABuscar: string) {

    this.clientes = this.clienteServicios.clientesLocalStorage.filter(cliente => {
      return cliente.nombre.toLowerCase().includes(nombreABuscar.toLowerCase());
    });
  }
  irAProductos(cliente: Clientes) {
    this.pedidoServices.pedido.clienteID = cliente.clienteId;
    this.pedidoServices.pedido.nombreCliente = `${cliente.nombre} ${cliente.apellido}`;
    this.pedidoServices.guardarLocalStorage();
    this.route.navigateByUrl("/productos");
  }

}
