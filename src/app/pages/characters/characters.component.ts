import { CharactersService } from './service/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  get characters() {
    return this.searchCharacter.characters;
  }

  constructor(private searchCharacter: CharactersService) { }

  ngOnInit(): void {

  }

}
