import { Component } from '@angular/core';
import { Pedido } from '../_modelo/Pedido';
@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent {
orders: Pedido[] = [];
  addOrder(orders: Pedido[]){
    this.orders = orders;
  }
}
