import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent }      from './productos/productos.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ViewComponent }   from './view/view.component';
import { ProductoDetailComponent }  from './producto-detail/producto-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view', component: ViewComponent },
  { path: 'detail/:id', component: ProductoDetailComponent },
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}