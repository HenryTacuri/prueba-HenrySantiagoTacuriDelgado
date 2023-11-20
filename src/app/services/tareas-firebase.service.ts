import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Tarea } from '../domain/tarea';


@Injectable({
  providedIn: 'root'
})
export class TareasFirebaseService {

  private path = '/tareas'

  tareasRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) {
    this.tareasRef = db.collection(this.path)

    this.tareasRef.valueChanges().subscribe(data => {
      console.log(data)
    })
  }

  getAll(){
    return this.tareasRef.valueChanges()
  }

  save(tarea: Tarea){
    const uid = this.db.createId()
    tarea.uid = uid
    return this.tareasRef.doc(uid).set(Object.assign({}, tarea))
  }

  update(tarea: Tarea){
    return this.tareasRef.doc(tarea.uid).update(Object.assign({}, tarea))
  }

  getTarea(uid: string){
    console.log('uid', uid)
    return this.db.doc(this.path+'/'+uid).valueChanges()
  }

}
