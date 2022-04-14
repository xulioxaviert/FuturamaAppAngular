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
  

  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {

    

  }

}
