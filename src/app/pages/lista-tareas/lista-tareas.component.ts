import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Tarea } from 'src/app/domain/tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent {
  tarea:Tarea[] = []

  listaTarea: any

  constructor(
    private router: Router, private tareasFirebaseService: TareasFirebaseService){

    this.listaTarea = this.tareasFirebaseService.getAll()
  }

  goEditar(tarea: any){
    console.log("editando", tarea)

    let params: NavigationExtras = {
      queryParams: {
        tarea: tarea
      }
    }

    this.router.navigate(['paginas/editar-tarea'], params)
  }
}
