import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

function homeModule() {
  return () => import('./home/home.module').then(module => module.HomeModule)
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: homeModule() }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
