import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public characters!: any[] 

  constructor(private http: HttpClient) {

    this.http.get('https://api.sampleapis.com/futurama/characters')
      .subscribe((res: any) => {
        console.log(res);
        this.characters = res;
      })
  }

}
