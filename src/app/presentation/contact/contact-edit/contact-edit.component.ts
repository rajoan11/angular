import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from "@angular/router";

import { ContactServiceACI } from '../../../service/contact/contact.service.aci';
import { Contact } from '../../../donnee/contact/contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact = new Contact();

  constructor(private location: Location,
    private route: ActivatedRoute,
    private contactServiceACI: ContactServiceACI) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.contactServiceACI.getContact(parseInt(param['id'])).subscribe(
        res => {
          this.contact = res.filter((contact) => contact.id == param['id'])[0];
        },
        error => {
          console.error(error);
        }
      );
    });

  }

  back(): void {
    this.location.back();
  }

}
