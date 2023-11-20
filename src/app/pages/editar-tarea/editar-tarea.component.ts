import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/domain/tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.scss']
})
export class EditarTareaComponent {
  tarea: Tarea = new Tarea();

  constructor(private router: Router,
      private route: ActivatedRoute,
      private tareasFirebaseService: TareasFirebaseService){

      this.route.params.subscribe(params => {
        console.log("params")
        if(params['id']){
          this.loadTarea(params['id'])
        }
      })

  }

  loadTarea(uid: string) {
    this.tareasFirebaseService.getTarea(uid).subscribe(data => {
      console.log(data)
      this.tarea = <any> data
    })
  }

  updateTarea(){
    this.tareasFirebaseService.update(this.tarea)
    this.tarea = new Tarea();
  }

  goListado(){
    this.router.navigate(['paginas/listado-tarea'])
  }
}
