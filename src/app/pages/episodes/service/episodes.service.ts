import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  
export class EpisodesService {

  public episodes!: any[];

  constructor(private http: HttpClient) { 
  
    this.http.get('https://api.sampleapis.com/futurama/episodes')
      .subscribe((res: any) => {
        console.log(res);
               
        this.episodes = res;
      
      })
  
  }
}
