import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string;

  games: [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  searchGames() {
    this.gamesService.searchGames(this.searchTerm).subscribe(data => {
      this.games = data.results;
      console.log(this.searchTerm)
    })
  }

}
