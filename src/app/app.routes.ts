import { Routes } from '@angular/router';
import { TableClientesComponent } from './table-clientes/table-clientes.component';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { FormEditClientesComponent } from './form-edit-clientes/form-edit-clientes.component';

export const routes: Routes = [
    {path: "", redirectTo: "/clientes", pathMatch: "full"},
    {path: "clientes", component: TableClientesComponent},
    {path: "clientes/alta", component: FormClientesComponent},
    {path: "clientes/edit/:id", component: FormEditClientesComponent},
];
