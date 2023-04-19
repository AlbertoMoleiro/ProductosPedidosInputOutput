import { Component, Input } from '@angular/core';
import { Producto } from '../_modelo/Producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  @Input() products: Producto[] = [];

}
