import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormularioPedidoComponent } from './formulario-pedido/formulario-pedido.component';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
@NgModule({
  declarations: [
    AppComponent,
    FormularioProductoComponent,
    ListaProductosComponent,
    FormularioPedidoComponent,
    ListaPedidoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
