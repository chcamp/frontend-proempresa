import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClienteService } from './clientes/cliente.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { Venta } from './venta/venta';




 const routes: Routes =[
  {path: '', redirectTo:'/clientes', pathMatch: 'full'},
  {path:'clientes', component: ClientesComponent},
  {path:'clientes/form', component: FormComponent},

  {path:'clientes/form/:id', component: FormComponent},

  {path:'clientes/form/:id', component: FormComponent},

  {path:'ventas/:id', component: Venta}

 ]

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    Venta
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
