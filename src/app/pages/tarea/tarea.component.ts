import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/domain/tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {

  tarea: Tarea = new Tarea();

  constructor(private router: Router,
    private tareaFirebaseService: TareasFirebaseService){

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.tarea = params['tarea']

      }
  }

  saveTarea(){
    this.tareaFirebaseService.save(this.tarea)
    this.tarea = new Tarea();
  }


  goListado(){
    this.router.navigate(['paginas/listado-tarea'])
  }

}
