import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatSelectModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SelectComponent } from './select/select.component';
import { ResultComponent } from './result/result.component';
import { AppRoutingModule } from './/app-routing.module';
import { SansaResultComponent } from './result/sansa-result/sansa-result.component';
import { AryaResultComponent } from './result/arya-result/arya-result.component';
import { BranResultComponent } from './result/bran-result/bran-result.component';
import { SamResultComponent } from './result/sam-result/sam-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SelectComponent,
    ResultComponent,
    SansaResultComponent,
    AryaResultComponent,
    BranResultComponent,
    SamResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
