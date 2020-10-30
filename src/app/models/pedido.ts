import { PedidoDetalle } from './pedido-detalle';
import { Productos } from './productos';

export class Pedido {
    pedidoID: number;
    clienteID: number;
    nombreCliente: string;
    total: number;
    pedidoDetalle: Array<PedidoDetalle>;

    constructor(datos?: Pedido) {
        if (datos != null) {
            this.pedidoID = datos.pedidoID;
            this.clienteID = datos.clienteID;
            this.nombreCliente = datos.nombreCliente;
            this.total = datos.total;
            this.pedidoDetalle = datos.pedidoDetalle;
            return;
        }
        this.pedidoID = this.pedidoID;
        this.clienteID = this.clienteID;
        this.nombreCliente = this.nombreCliente;
        this.total = this.total;
        this.pedidoDetalle = new Array<PedidoDetalle>();
    }

    agregarPedido(producto: Productos) {
        let pedidoDetalle: PedidoDetalle = new PedidoDetalle();
        pedidoDetalle.cantidad = 1;
        pedidoDetalle.nombreProducto = producto.nombre;
        pedidoDetalle.precio = producto.precio;
        pedidoDetalle.productoID = producto.productoId;
        pedidoDetalle.total = producto.precio * pedidoDetalle.precio;
        let existe: number = this.pedidoDetalle.filter(x => x.productoID == producto.productoId).length;
        if (existe > 0) {
            let posicion: number = this.pedidoDetalle.findIndex(x => x.productoID = producto.productoId);
            this.pedidoDetalle[posicion].cantidad++;
            this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad * this.pedidoDetalle[posicion].precio;
        } else {
            this.pedidoDetalle.push(pedidoDetalle);
        }
        this.actualizarTotal();
    }

    actualizarTotal() {
        this.total = 0;

        for (const producto of this.pedidoDetalle) {
            this.total = this.total + producto.total;
        }
    }

    public actualizarCantidad(posicion: number) {
        this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad *
            this.pedidoDetalle[posicion].precio;
        this.actualizarTotal();
        
    }
}
