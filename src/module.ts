import {Length} from "class-validator";
import {TileDefinition} from "./tileDefinition";

export class Module {

    @Length(10, 50)
    identifier: string;

    @Length(3, 30)
    displayName: string;

    iconIdentifier: string;

    author: string;

    description: string;

    apiPath: string;

    frontendPath: string;

    tileDefinitions: TileDefinition[];

    version: string;
}
