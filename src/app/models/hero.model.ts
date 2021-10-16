/*export class Hero {
     id: string = '';
     name: string = '';
    powerstats: PowerStats[] =[];
    image: any = {// si no se la propiedad le pongo tipo any
         url: ''
     };
     wallet: string = "";
 }
 class PowerStats {
     fly: boolean = false;
 }
*/


export class Hero {
    id!: number;
    name!: string;
    description!: string;
    modified!: Date;
    resourceURI!: string;
    urls!: [
        {
            type: string;
            url: string;
        }
    ];
    thumbnail!: {
        path: string;
        extension: string;
    };
    comics!: {
        available: number;
        returned: number;
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
            }
        ]
    };
    stories!: {
        available: number;
        returned: number;
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
                type: string;
            }
        ]
    };
    events!: {
        available: number;
        returned: number;
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
            }
        ]
    };
    series!: {
        available: number;
        returned: number;
        collectionURI: string;
        items: [
            {
                resourceURI: string;
                name: string;
            }
        ]
    }
}
