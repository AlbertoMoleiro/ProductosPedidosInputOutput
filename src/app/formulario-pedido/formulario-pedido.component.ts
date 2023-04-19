import { Component,Output, EventEmitter } from '@angular/core';
import { Pedido } from '../_modelo/Pedido';

@Component({
  selector: 'app-formulario-pedido',
  templateUrl: './formulario-pedido.component.html',
  styleUrls: ['./formulario-pedido.component.css']
})
export class FormularioPedidoComponent {
  order: Pedido = new Pedido(0,"",0,0);
  orders: Pedido[] = [];

  @Output() ordersEvent = new EventEmitter<Pedido[]>();
  constructor() { }

  addOrder(){
    this.orders.push(this.order);
    this.ordersEvent.emit(this.orders);
    this.order = new Pedido(0,"",0,0);
  }


}
