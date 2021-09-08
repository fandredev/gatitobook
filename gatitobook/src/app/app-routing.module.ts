import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

function homeModule() {
  return () => import('./home/home.module').then(module => module.HomeModule)
}
function animalsModule() {
  return () => import('./animals/animals.module').then(module => module.AnimalsModule)
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: homeModule() },
  { path: 'animals', loadChildren: animalsModule() }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
