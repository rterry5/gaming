import { Observable } from 'rxjs';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Game } from 'src/app/domain/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: any = [];

  gameId: number;

  gameDetails: Game[];

  gameDetailsArray = new Array();

  favoriteClicked: boolean[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getFavoritesList();
  }

  getFavoritesList() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')!);
    for (let i = 0; i < this.favorites.length; i++) {
      this.gameId = this.favorites[i].id;
      this.getGameById(this.gameId);
    }
  }

  getGameById(id: number) {
    this.gamesService.getGamesById(this.gameId).subscribe(data => {
      this.gameDetails = data;
      this.createDetails();
    })
  }

  createDetails() {
    this.gameDetailsArray.push(this.gameDetails)
  }
}
