import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableClientesComponent } from './table-clientes/table-clientes.component';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { FooterComponent } from './footer/footer.component';
import { FormEditClientesComponent } from './form-edit-clientes/form-edit-clientes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    TableClientesComponent,
    FormClientesComponent,
    FormEditClientesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaTecnica';
}
