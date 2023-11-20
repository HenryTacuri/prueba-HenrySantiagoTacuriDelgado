import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './pages/tarea/tarea.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { EditarTareaComponent } from './pages/editar-tarea/editar-tarea.component';

const routes: Routes = [

  {path:"paginas/tarea", component: TareaComponent},
  {path:"paginas/listado-tarea", component: ListaTareasComponent},
  {path:"paginas/editar-tarea/:id", component: EditarTareaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
