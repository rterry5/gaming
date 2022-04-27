import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-your-games',
  templateUrl: './your-games.component.html',
  styleUrls: ['./your-games.component.scss']
})
export class YourGamesComponent implements OnInit {
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
