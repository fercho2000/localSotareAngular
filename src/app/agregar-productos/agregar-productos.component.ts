import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Productos } from '../models/productos';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent implements OnInit {

  formularioAgregar: FormGroup;

  constructor(private formBuilder: FormBuilder, private productoServicio: ProductosService) { }

  ngOnInit(): void {

    this.formularioAgregar = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        precio: ['', Validators.required],
      }
    );
  }


  agregar() {

    this.productoServicio.agregarClienteStorage(this.formularioAgregar.value as Productos);
    this.formularioAgregar.reset();
  }

}
