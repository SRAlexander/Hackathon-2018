import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: []
})
export class SharedModule { }
