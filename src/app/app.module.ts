import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page.component/main-page.component';
import { AddOrUpdateComponent } from './components/add-or-update/add-or-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveConfirmComponent } from './components/remove-confirm/remove-confirm.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, AddOrUpdateComponent, RemoveConfirmComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
