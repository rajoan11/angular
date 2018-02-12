
import { ContactServiceACI} from './contact.service.aci';
import { ContactService} from './contact.service';

export let ContactServiceProvider = [
    {provide: ContactServiceACI, useClass: ContactService}
];