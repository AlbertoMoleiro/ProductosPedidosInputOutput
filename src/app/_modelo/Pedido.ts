export class Pedido{
  private static idStatic:number = 0;
  idPedido:number;
  idCliente:number;
  nombreCliente:string;
  totalProductos:number;
  importeTotal:number;

  constructor(idCliente:number, nombreCliente:string, totalProductos:number, importeTotal:number){
    this.idPedido = ++Pedido.idStatic;
    this.idCliente = idCliente;
    this.nombreCliente = nombreCliente;
    this.totalProductos = totalProductos;
    this.importeTotal = importeTotal;
  }
}
