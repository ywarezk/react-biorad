import {Subject} from 'rxjs';

class MessageService {
    constructor() {
        this.message = new Subject();
    }
}

export default new MessageService();