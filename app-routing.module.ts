// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from '../app/register/register.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-product',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-product/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
