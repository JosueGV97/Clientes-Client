import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientesService } from '../clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './table-clientes.component.html',
  styleUrl: './table-clientes.component.css'
})
export class TableClientesComponent {
  constructor(private cs: ClientesService) {
    cs.getClientesList();
  }

get listado(){
  return this.cs.clientesList;
}

eliminar(id: number){
  Swal.fire({
    title: "Seguro que deseas eliminar?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Si",
    denyButtonText: "No"
  }).then((result)=>{
    if(result.isConfirmed){
      this.cs.deleteCliente(id);
    }
  })
}
}
