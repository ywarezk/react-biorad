import {Subject} from 'rxjs';

class NameService {
    constructor() {
        this.message = new Subject();
    }
}

export default new NameService();