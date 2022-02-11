import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule  // every browser application must import 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
