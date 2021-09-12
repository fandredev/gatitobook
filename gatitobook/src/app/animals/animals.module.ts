import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CardModule } from './../components/card/card.module';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals/animals.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { GridPhotosAnimalsComponent } from './grid-photos-animals/grid-photos-animals.component';



@NgModule({
  declarations: [ListAnimalsComponent, AnimalsComponent, GridPhotosAnimalsComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    HttpClientModule,
    CardModule
  ]
})
export class AnimalsModule { }
