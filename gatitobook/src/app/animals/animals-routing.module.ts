import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnimalsComponent } from './list-animals/list-animals.component';

const routes: Routes = [
  { path: '', component: ListAnimalsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
