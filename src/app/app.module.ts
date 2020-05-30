import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherdataService } from './services/weatherdata.service';
import { SelectionComponent } from './components/selection/selection.component';
import { FormsModule } from '@angular/forms';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Display1Component } from './components/display1/display1.component';
import { Display2Component } from './components/display2/display2.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SelectionComponent,
    Display1Component,
    Display2Component
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
