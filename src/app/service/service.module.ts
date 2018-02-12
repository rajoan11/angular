import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { ContactServiceProvider } from './contact/contact.service.provider';

@NgModule({
  imports: [HttpClientModule],
  providers : [ ...ContactServiceProvider]
})
export class ServiceModule { }
