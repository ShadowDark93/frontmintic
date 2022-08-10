import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { InventoriesComponent } from './components/inventories/inventories.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProvidersComponent } from './components/providers/providers.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '/home',
    component: HomeComponent
  },
  {
    path: '/clients',
    component: ClientsComponent
  },
  {
    path: '/providers',
    component: ProvidersComponent
  },
  {
    path: '/inventories',
    component: InventoriesComponent
  },
  {
    path: '/products',
    component: ProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
