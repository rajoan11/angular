import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { ContactRoutingModule } from '../../contrainte/contact/contact-routing.module';

import { ContactRootComponent } from './contact-root/contact-root.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [ContactRootComponent, ContactListComponent, ContactDetailComponent, ContactEditComponent]
})
export class ContactModule { }
