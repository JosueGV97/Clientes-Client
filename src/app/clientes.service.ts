import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  public server: string = "http://localhost:8081"
  public clientesList: any[];
  public cliente:any;

  constructor(private httpClient: HttpClient, private route: Router) {
    this.clientesList = [];  
  }

  getClientesList(): void{
    this.httpClient.get(this.server + "/clientes").subscribe((resp: any) => {
      console.log(resp);
      this.clientesList = resp;
    })
  }

  saveCliente(nombre: string, fechaNacimiento: string, celular: string, correoElectronico: string){
    this.httpClient.post(this.server + "/clientes", {
      "nombre": nombre,
      "fechaNacimiento": fechaNacimiento,
      "celular": celular,
      "correoElectronico": correoElectronico
    },).subscribe((resp: any) => {
      console.log(resp.msg)

      Swal.fire({
        title: "Cliente guardado correctamente!",
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          this.route.navigate(["clientes"]);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    })
  }

  deleteCliente(id: number): void{
    this.httpClient.delete(this.server + "/clientes/delete/" + id).subscribe((respuesta:any) =>{
      console.log(respuesta);
      this.getClientesList();
      Swal.fire({
        title: "Eliminado!",
        text: "Cliente eliminado correctamente",
        icon: "success"
      });
    })
  }

  getCliente(id:number): void{
    this.httpClient.get(this.server + "/clientes/" + id).subscribe(
      (respuesta:any)=>{
        console.log(respuesta);
        this.cliente=respuesta
      }
    );
  }

  updateCliente(id: number, nombre: string, fechaNacimiento: string, celular: string, correoElectronico: string){
    this.httpClient.put(this.server + "/clientes/update/" + id, {
      "pkCliente": id,
      "nombre": nombre,
      "fechaNacimiento": fechaNacimiento,
      "celular": celular,
      "correoElectronico": correoElectronico
    },).subscribe((respuesta: any) => {

      Swal.fire({
        title: "Cliente actualizado correctamente!",
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          this.route.navigate(["clientes"]);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    })
  }
}
