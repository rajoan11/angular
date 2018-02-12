import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContactModule } from '../../presentation/contact/contact.module';
import { ServiceModule } from '../../service/service.module';
import { RestServiceModule } from '../../rest/rest-service.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../../presentation/_app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    ServiceModule,
    RestServiceModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
