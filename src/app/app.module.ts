import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ModalModule} from "ngx-modal";
import {App} from "./modal.component";
import {FilterPipe} from './pipes';
import {SearchComponent} from './search.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    App,
    FilterPipe,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent, App]
})
export class AppModule { }
