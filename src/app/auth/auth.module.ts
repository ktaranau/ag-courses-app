import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  providers: [{ provide: Window, useValue: window }],
  imports: [
    CommonModule,
    HttpClientModule,
    
  ]
})
export class AuthModule { }
