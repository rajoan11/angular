import { Component, OnInit } from '@angular/core';
import { Observable }  from 'rxjs/observable';

import { ContactServiceACI} from '../../../service/contact/contact.service.aci'
import { Contact } from '../../../donnee/contact/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts : Array<Contact>;

  constructor(private contactServiceACI: ContactServiceACI) { }

  ngOnInit() {
    this.contactServiceACI.getContacts().subscribe(
      res => {
        res? this.contacts = res: this.contacts = [];
      },
      error => {
        console.error(error);
      }
    );
  }

}
