import { ThemeService } from './../../theme.service';

import { Component, OnInit } from '@angular/core';
import { CastService } from './service/cast.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {

  get cast() {
    return this.castService.cast
  }

  
  get className() {
    return this.themeService.className;
  }

  constructor(private castService: CastService, private themeService: ThemeService) {

  }

  ngOnInit(): void {
  }

}
