export class CreatePerson {
    birthday: string = '';
    email: string = '';
    ended: string = '';
    extension: string = '';
    firstname: string = '';
    id: string = '';
    lastname: string = '';
    linkedin: string = '';
    officeId: string = '';
    organizationId: string = '';
    password: string = '';
    phone: string = '';
    picture: string = '';
    skype: string = '';
    started: string = '';
    title: string = '';
    username: string = '';
    office?: any;
    organization?: any;
    constructor(data?: Partial<CreatePerson>) {
        Object.assign(this, data);
    }
}