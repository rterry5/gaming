import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss']
})
export class NewReleasesComponent implements OnInit {

  games: any;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getNewReleases();
  }

  getNewReleases() {
    this.gamesService.getNewReleases().subscribe(data => {
      this.games = data.results;
    })
  }

}
