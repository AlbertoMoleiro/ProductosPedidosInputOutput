
import { TipoProducto } from "./TipoProducto";
export class Producto {
  private static idStatic: number = 0;
  id: number;
  name: string;
  stock: number;
  price: number;
  productType: TipoProducto;
  constructor(
    name: string,
    stock: number,
    price: number,
    productType: TipoProducto
  ) {
    this.id = ++Producto.idStatic;
    this.name = name;
    this.stock = stock;
    this.price = price;
    this.productType = productType;
  }
}
