import { Component } from '@angular/core';
import { Producto } from '../_modelo/Producto';
import { TipoProducto } from '../_modelo/TipoProducto';


@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent {
  product: Producto = new Producto("",0,0,TipoProducto.ALIMENTACION);
  products: Producto[] = [];
  productType:string = "";
  productTypes: string[] = Object.values(TipoProducto);
  constructor() { }

  addProduct(){
    this.product.productType=TipoProducto[this.productType as keyof typeof TipoProducto]
    this.products.push(this.product);
    this.product = new Producto("",0,0,TipoProducto.ALIMENTACION);
  }




}
