import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmprendedorListComponent } from './emprendedor/emprendedor-list/emprendedor-list.component';
import { EmprendedorDetailComponent } from './emprendedor/emprendedor-detail/emprendedor-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'emprendedores', pathMatch: 'full' },
  { path: 'emprendedores', component: EmprendedorListComponent },
  { path: 'emprendedores/:id', component: EmprendedorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
