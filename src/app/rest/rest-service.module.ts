import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { ContactRestServiceProvider } from './contact/contact-rest.service.provider';

@NgModule({
  imports: [ HttpClientModule],
  providers : [ ...ContactRestServiceProvider]
})
export class RestServiceModule { }
