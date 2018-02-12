import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';

import { ContactServiceACI} from './contact.service.aci';
import { ContactRestServiceACI} from '../../rest/contact/contact-rest.service.aci';


@Injectable()
export class ContactService implements ContactServiceACI{

  constructor(private contactRest:ContactRestServiceACI) { }

  getContacts (): Observable<any>{
    return this.contactRest.getContacts()
      .map(this.extractData)
      .catch(this.handleError);
  }

  getContact (id: number){
    return this.contactRest.getContact(id)
    .map(this.extractData)
    .catch(this.handleError);
  }

  editContact (){

  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
}

private extractData(res: Response) {
    let body =res
    return body;
}


}
