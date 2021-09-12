import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';

function homeModule() {
  return () => import('./home/home.module').then(module => module.HomeModule)
}

function animalsModule() {
  return () => import('./animals/animals.module').then(module => module.AnimalsModule)
}


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: homeModule(), canActivate: [LoginGuard] },
  { path: 'animals', loadChildren: animalsModule(), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
