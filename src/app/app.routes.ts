import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroducaoComponent } from './introducao/introducao.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
  { path: 'introducao', component: IntroducaoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '', component: IntroducaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

