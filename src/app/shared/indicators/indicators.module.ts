import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// noinspection ES6PreferShortImport
import {SpinnerModule} from "./spinner/spinner.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpinnerModule
  ], exports: [
    SpinnerModule
  ]
})
export class IndicatorsModule { }
