import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CardModule } from './../components/card/card.module';
import { SharedModule } from './../shared/shared.module';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals/animals.component';
import { CommentsComponent } from './detail-animal/comments/comments.component';
import { DetailAnimalComponent } from './detail-animal/detail-animal.component';
import { GridPhotosAnimalsComponent } from './grid-photos-animals/grid-photos-animals.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';



@NgModule({
  declarations: [ListAnimalsComponent, AnimalsComponent, GridPhotosAnimalsComponent, DetailAnimalComponent, CommentsComponent, NewAnimalComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    HttpClientModule,
    CardModule,
    SharedModule
  ]
})
export class AnimalsModule { }
