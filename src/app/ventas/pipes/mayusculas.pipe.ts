import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas',
})
export class MayusculasPipes implements PipeTransform{
    
    transform(palabra: string, enMayusculas: boolean = true):string {
        if(enMayusculas){
            return palabra.toUpperCase();
        }else{
            return palabra.toLowerCase();
        }

    }


}