import { Component } from '@angular/core';
import { GamesService } from './services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gaming';

  games: [];

  keyword: string;

  id: number;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {

  }

  searchedGames(keyword: string) {
    this.keyword = keyword;
    this.gamesService.searchGames(this.keyword).subscribe(data => {
      this.games = data.results;
    })
  }

  getGamesById(id: number) {
    this.games.forEach(game => {
      console.log(game)
    })
  }
}
