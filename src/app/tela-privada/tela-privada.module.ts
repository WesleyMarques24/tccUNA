import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaPrivadaPage } from './tela-privada.page';

const routes: Routes = [
  {
    path: '',
    component: TelaPrivadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaPrivadaPage]
})
export class TelaPrivadaPageModule {}
