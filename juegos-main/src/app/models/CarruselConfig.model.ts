import { Item } from "./items.model";

export interface CarruselConfig{
    id_Carrosel:number;
    items:Item[];
    numberItems:number;
    imgArray:string[];
    layout:string
    autoPlaying:boolean;

}
