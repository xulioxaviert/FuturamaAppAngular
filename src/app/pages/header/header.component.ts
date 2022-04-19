import { ThemeService } from './../../theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //public className: string = 'dark';
  
   get className() {
    return this.themeService.className;
  }

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }
 
  public setClassName(className: string): void {
    this.themeService.className = className;
    console.log("theme", this.themeService.className)
  } 
  
}
