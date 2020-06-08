import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentService } from './student.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, DragDropModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [StudentService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
