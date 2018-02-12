import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import  { ContactRootComponent } from '../../presentation/contact/contact-root/contact-root.component';
import  { ContactListComponent } from '../../presentation/contact/contact-list/contact-list.component';
import  { ContactDetailComponent } from '../../presentation/contact/contact-detail/contact-detail.component';
import  { ContactEditComponent } from '../../presentation/contact/contact-edit/contact-edit.component';

const routes = [
  {
    path: 'contact',
    component: ContactRootComponent,
    children: [
      {path: '', redirectTo:'list', pathMatch: 'full'},
      {path: 'list', component: ContactListComponent},
      {path: 'detail/:id', component: ContactDetailComponent},
      {path: 'edit/:id', component: ContactEditComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
