import {Length} from "class-validator";

export class Module {

    @Length(10, 50)
    identifier: string;

    @Length(3, 30)
    displayName: string;

    apiPath: string;
}
