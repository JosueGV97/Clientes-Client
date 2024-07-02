import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-clientes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-clientes.component.html',
  styleUrl: './form-clientes.component.css'
})
export class FormClientesComponent {

  @ViewChild("nombre")
  referenciaNombre!: ElementRef;

  @ViewChild("correoElectronico")
  referenciaApPaterno!: ElementRef;

  @ViewChild("celular")
  referenciaApMaterno!: ElementRef;

  @ViewChild("fechaNacimiento")
  referenciaTelefono!: ElementRef;

  miFormulario: FormGroup;

  constructor(private service: ClientesService, private fb: FormBuilder){ 
    this.miFormulario = this.fb.group({
      floating_first_name: ["", Validators.required],
      floating_email : ["", Validators.required],
      floating_phone : ["", Validators.required],
    });
  }

  saveCliente() {
    if (this.miFormulario.valid) {
      console.log('Formulario válido:', this.miFormulario.value);
      const nombre = this.referenciaNombre.nativeElement.value;
      const correo = this.referenciaApPaterno.nativeElement.value;
      const celular = this.referenciaApMaterno.nativeElement.value;
      const fecha = this.referenciaTelefono.nativeElement.value;
    
        this.service.saveCliente(nombre, fecha, celular, correo)

    } else {
      console.log('Formulario inválido');
      this.miFormulario.markAllAsTouched();
    }
  }
}
