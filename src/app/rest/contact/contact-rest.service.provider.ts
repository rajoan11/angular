
import { ContactRestServiceACI} from './contact-rest.service.aci';
import { ContactRestService} from './contact-rest.service';

export let ContactRestServiceProvider = [
    {provide: ContactRestServiceACI, useClass: ContactRestService}
];