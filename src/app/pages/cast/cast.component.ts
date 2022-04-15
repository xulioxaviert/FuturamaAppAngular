
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

  constructor(private castService: CastService) {
    
   }

  ngOnInit(): void {
  }

}
