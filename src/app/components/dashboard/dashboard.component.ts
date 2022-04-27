import { CardComponent } from './../card/card.component';
import { GamesService } from './../../services/games.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
