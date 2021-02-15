import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudServiceService } from './crud-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CrudServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
