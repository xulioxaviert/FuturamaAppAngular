import { Characters } from './../../../interface/character.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public characters: any[] = JSON.parse(localStorage.getItem('characters')!) || [];

  constructor(private http: HttpClient) {

    this.http.get('https://api.sampleapis.com/futurama/characters')
      .subscribe((res: any) => {
        //console.log(res);
        this.characters = res;
        localStorage.setItem('characters', JSON.stringify(this.characters))
      })
  }

  getDetailsById(_id: string): Characters {
    console.log(this.characters + 'aqui');
       
    return this.characters.find(({ id }) => id == _id)
        
  }

}
