import { ThemeService } from './../../theme.service';
import { EpisodesService } from './service/episodes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  get episodes() {
    return this.episodesService.episodes
  }

  get className() {
    return this.themeService.className;
  }

  
  constructor(private episodesService: EpisodesService, private themeService: ThemeService) { }

  ngOnInit(): void {

    

  }

}
