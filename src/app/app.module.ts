import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enviroment } from 'src/enviroment/enviroment';
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { TareaComponent } from './pages/tarea/tarea.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { EditarTareaComponent } from './pages/editar-tarea/editar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    ListaTareasComponent,
    EditarTareaComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(enviroment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: enviroment.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
