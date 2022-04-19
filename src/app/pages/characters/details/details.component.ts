import { ThemeService } from './../../../theme.service';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from './../service/characters.service';
import { Characters } from './../../../interface/character.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  character!: Characters

  get className() {
    return this.themeService.className;
  }

  constructor(private detailsService: CharactersService, private activeRoute: ActivatedRoute, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      const { id } = params;
      this.character = this.detailsService.getDetailsById(id);
      console.log(this.character.images);

    })
  }

}
