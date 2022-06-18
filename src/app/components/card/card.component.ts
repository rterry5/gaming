import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  gameSearched: any = [];

  @Input()
  favorites: any = [];

  @Input()
  gameId: number;

  @Input()
  gameDescription: any;

  gameDetails: any;

  key: string = "favorites";

  myItem: any;

  favoriteClicked: boolean[] = [];

  gameFavorited: any;


  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites() {
    if (localStorage.getItem(this.key) == null) {
      this.favorites = [];
    } else {
      this.favorites = JSON.parse(localStorage.getItem(this.key)!);
      this.fillHeartIfGameIsLiked();
    }
  }

  saveFavorites() {
    localStorage.setItem(this.key, JSON.stringify(this.favorites));
    this.favorites = JSON.parse(localStorage.getItem(this.key)!);
    console.log('Saved', this.favorites);
  }

  addGameToFavorites(id: number) {
    let game = this.gameSearched.find((game: any) => game.id === id);
    this.gameFavorited = game;
    this.gameId = id;
    this.favorites.push(this.gameFavorited);
    localStorage.setItem(this.key, JSON.stringify(this.favorites));
    console.log('added to favs');
    this.toggleHeart(this.gameId);
    this.getGameById(this.gameId);
    this.saveFavorites();
  }

  removeGameFromFavorites(id: number) {
    this.getFavorites();
    let gameIndex = this.favorites.findIndex((game: any) => game.id === id);
    if (gameIndex > -1) {
      this.favorites.splice(gameIndex, 1);
      this.saveFavorites();
      this.favoriteClicked[id] = false;
      console.log('removed', id, this.favoriteClicked[id])
    }
  }

  toggleHeart(id: any) {
    this.favoriteClicked[this.gameId] = !this.favoriteClicked[this.gameId];
  }

  getGameById(id: number) {
    this.gamesService.getGamesById(this.gameId).subscribe(data => {
      this.gameDetails = data;
    })
  }

  fillHeartIfGameIsLiked() {
    for (let i = 0; i < this.favorites.length; i++) {
      let id = this.favorites[i].id;
      this.favoriteClicked[id] = true;
    }
  }
}
