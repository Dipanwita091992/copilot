export class Organization{
    name?: string = '';
    manager_id: string = '';
    id?: string = '';
    constructor(data?: Partial<Organization>) {
        Object.assign(this, data);
    }
}