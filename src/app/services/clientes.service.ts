import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  agregarClienteStorage(cliente: Clientes) {

    let clientesAntiguos: Clientes[] = this.clientesLocalStorage;
    cliente.clienteId = clientesAntiguos.length + 1;
    clientesAntiguos.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientesAntiguos));
  }

  get clientesLocalStorage(): Clientes[] {

    let clientesDelStorage: Clientes[] = JSON.parse(localStorage.getItem("clientes"));
    if (clientesDelStorage == null) {
      return new Array<Clientes>();
    }
    return clientesDelStorage;
  }
}
