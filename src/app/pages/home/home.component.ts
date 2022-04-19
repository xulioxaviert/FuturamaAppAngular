import { ThemeService } from './../../theme.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get className() {
  return this.setClassName.className
}

  constructor(private setClassName: ThemeService) { }

  ngOnInit(): void {
  }

}
