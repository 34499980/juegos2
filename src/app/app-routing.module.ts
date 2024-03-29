import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TATETIComponent } from './juegos/tateti/tateti.component';
import { GENERALAComponent } from './juegos/Generala/generala.component';
import { SelectUsersComponent } from './usuarios/select-users/select-users.component';
import { GENERALAObligadaComponent } from './juegos/GeneralaObligada/generala.component';
import { DiezMilComponent } from './juegos/Diezmil/DiezMil.component';


const routes: Routes = [
    {
    path: 'user-TATETI',
    component: SelectUsersComponent,
    data: {juego:"TATETI"}
  },
  {
    path: 'user-GENERALA-Obligada',
    component: SelectUsersComponent,
    data: {juego:"GENERALAOBLIGADA"}
  },
  {
    path: 'user-GENERALA',
    component: SelectUsersComponent,
    data: {juego:"GENERALA"}
  },
  {
    path: 'user-DiezMIL',
    component: SelectUsersComponent,
    data: {juego:"DiezMIL"}
  },
  {
    path: 'GENERALA',
    component: GENERALAComponent
  },  
  
  {
    path: 'GENERALAOBLIGADA',
    component: GENERALAObligadaComponent
  },
  {
    path: 'TATETI',
    component: TATETIComponent
  }
  ,
  {
    path: 'DiezMIL',
    component: DiezMilComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
