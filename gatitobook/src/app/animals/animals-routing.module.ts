import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { ListAnimalsResolver } from './list-animals/list-animals.resolver';
import { NewAnimalComponent } from './new-animal/new-animal.component';

const routes: Routes = [
  { path: '', component: ListAnimalsComponent, resolve: { animals: ListAnimalsResolver } },
  { path: 'new', component: NewAnimalComponent },
  { path: ':animal_id', component: DetailAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
