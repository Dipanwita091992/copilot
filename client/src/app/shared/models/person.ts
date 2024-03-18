// person.model.ts
export class Person {
    username: string='' ;
    firstname: string='' ;
    lastname: string='' ;
    email: string='' ;
    skype: string=  '' ;
    linkedin: string=  '' ;
    phone: string=  '' ;
    extension: string=  '' ;
    birthday: Date=  new Date() ;
    title: string=  '' ;
    picture: string=  ''  ;
    started: Date=  new Date() ;
    ended: Date=  new Date() ;
    office_id: string=  ''; // Assuming Office is another model with its id as string
    organization_id: string= ''; // Assuming Organization is another model with its id as string

    constructor(data?: Partial<Person>) {
        Object.assign(this, data);
    }
}