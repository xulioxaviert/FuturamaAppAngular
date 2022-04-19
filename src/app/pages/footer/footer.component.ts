import { ThemeService } from './../../theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  get className() {
    return this.themeService.className;
  }

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

}
