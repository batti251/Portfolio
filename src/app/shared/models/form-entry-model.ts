
import { FormEntry } from "../interfaces/form-entry";


export class FormEntryModel implements FormEntry{
    name: string;
    email: string;
    message: string;
    policy: boolean

    constructor(data: Partial<FormEntry> ){
        this.name = data.name ?? '',
        this.email = data.email ?? '',
        this.message = data.message ?? '';
        this.policy = data.policy ?? false;
    }

}