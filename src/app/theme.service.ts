import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public className: string = 'dark';

  constructor() { }

  public setClassName(className: string): void {
    this.className = className;
    console.log("theme", this.className)
  }


}
