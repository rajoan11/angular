import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { ContactServiceACI } from '../../../service/contact/contact.service.aci';
import { Contact } from '../../../donnee/contact/contact';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact = new Contact();

  constructor(private route: ActivatedRoute,
    private location: Location,
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
