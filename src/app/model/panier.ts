import { Ligne } from "./ligne";

export class Panier {
    client : string;
    tabLigne: Array<Ligne>;
    total: number = 0;

    constructor(a: string){
        this.client=a;
        this.tabLigne= new Array<Ligne>();
    }

    add(l : Ligne){
        this.tabLigne.push(l);
    }
}
