import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  public cast!: any[]

  constructor(private http: HttpClient) {

    this.http.get('https://api.sampleapis.com/futurama/cast')
      .subscribe((res: any) => {
        console.log(res);
        this.cast = res;
      })
  }
}
