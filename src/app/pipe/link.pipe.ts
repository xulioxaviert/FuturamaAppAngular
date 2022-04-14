import { Characters } from './../interface/character.interface';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'link'
})

export class LinkPipe implements PipeTransform {

    transform(character: Characters): string {
        return `details/${character.id}`;
    }

}