import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  id: any;

  games: any;

  searchedGames: any;

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {

  }

  // getGames() {
  //   this.gameService.getGames().subscribe((data) => {
  //     this.games = data;
  //     console.log(data)
  //   });
  // }

  // searchGames() {
  //   this.gameService.searchGames().subscribe((data) => {
  //     this.searchedGames = data;
  //   })
  // }

}
