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

  key: string = "favorites";

  myItem: any;

  favoriteClicked: boolean;

  gameFavorited: any;

  gameId: number;

  constructor() { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites() {
    if (localStorage.getItem(this.key) == null) {
      this.favorites = [];
    } else {
      this.favorites = JSON.parse(localStorage.getItem(this.key)!);
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
    this.favorites.push(this.gameFavorited);
    localStorage.setItem(this.key, JSON.stringify(this.favorites));
    this.toggleHeart(id);
    this.saveFavorites();
  }

  removeGameFromFavorites(id: number) {
    this.getFavorites();
    let gameIndex = this.favorites.findIndex((game: any) => game.id === id);
    if (gameIndex > -1) {
      this.favorites.splice(gameIndex, 1);
      this.toggleHeart(id);
      this.saveFavorites();
    }
  }

  toggleHeart(id: number) {
    // let game = this.favorites.find((game: any) => game.id === id)
    console.log(this.gameFavorited.id)

    this.favoriteClicked = !this.favoriteClicked;
  }
}
