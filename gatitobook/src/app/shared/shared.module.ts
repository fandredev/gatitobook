import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from './../components/message/message.module';


@NgModule({
  imports: [
    CommonModule,
    MessageModule,
    ReactiveFormsModule
  ],
  exports: [
    MessageModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
