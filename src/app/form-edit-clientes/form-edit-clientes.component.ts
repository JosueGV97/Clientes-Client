import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-edit-clientes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-edit-clientes.component.html',
  styleUrl: './form-edit-clientes.component.css'
})
export class FormEditClientesComponent {

  @ViewChild("nombre")
  referenciaNombre!: ElementRef;

  @ViewChild("correoElectronico")
  referenciaCorreo!: ElementRef;

  @ViewChild("celular")
  referenciaCelular!: ElementRef;

  @ViewChild("fechaNacimiento")
  referenciaFNacimineto!: ElementRef;

  private params: any;
  private id: number = 0;

  miFormulario: FormGroup;

  constructor(private ruta:ActivatedRoute, private service: ClientesService, private fb: FormBuilder){
    this.params = this.ruta.params.subscribe(parametros => {
      this.id = parametros["id"];
      console.log(this.id);
      this.service.getCliente(this.id);
    })

    this.miFormulario = this.fb.group({
      floating_first_name: ["", Validators.required],
      floating_email : ["", Validators.required],
      floating_phone : ["", Validators.required],
    });
  }

  get cliente(){
    return this.service.cliente;
  }

  updateCliente() {
    if (this.miFormulario.valid) {
      console.log('Formulario válido:', this.miFormulario.value);
      const nombre = this.referenciaNombre.nativeElement.value;
      const correo = this.referenciaCorreo.nativeElement.value;
      const celular = this.referenciaCelular.nativeElement.value;
      const fecha = this.referenciaFNacimineto.nativeElement.value;
    
        this.service.updateCliente(this.id, nombre, fecha, celular, correo)

    } else {
      console.log('Formulario inválido');
      this.miFormulario.markAllAsTouched();
    }
  }
}
