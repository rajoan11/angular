import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ContactRestServiceACI} from './contact-rest.service.aci';

@Injectable()
export class ContactRestService implements ContactRestServiceACI{

  constructor(private http:HttpClient) { }
  
    getContacts (): Observable<any>{
      return this.http.get('assets/mock/contact-mock.json');
    }
  
    getContact (id: number): Observable<any>{      
      return this.http.get('assets/mock/contact-mock.json');
    }
  
    editContact (id: number){
  
    }

}
