import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }


  options = {
    "method": "GET",
    "hostname": "rawg-video-games-database.p.rapidapi.com",
    "port": null,
    "path": "/games",
    "headers": {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": "81de34a78d4a4408864ded61575c4214",
      "useQueryString": true
    }
  };

  searchGames(searchTerm: string) {
    return this.http.get<any>(`https://api.rawg.io/api/games?search=${searchTerm}&key=81de34a78d4a4408864ded61575c4214`);
  }

  getGamesById(id: number) {
    return this.http.get<any>(`https://api.rawg.io/api/games/${id}?key=81de34a78d4a4408864ded61575c4214`);
  }

  getNewsArticle() {
    return this.http.get<any>('https://www.gamespot.com/api/articles/?api_key=5b8e9952ee3272b4d3b21049f994993e69367932&format=json&sort=publish_date:desc&limit=5');
  }

  getAllNewsArticles() {
    return this.http.get<any>('https://www.gamespot.com/api/articles/?api_key=5b8e9952ee3272b4d3b21049f994993e69367932&format=json&sort=publish_date:desc');
  }

  getNewReleases() {
    return this.http.get<any>(`https://www.gamespot.com/api/releases/?api_key=5b8e9952ee3272b4d3b21049f994993e69367932&format=json&sort=release_date:desc&limit=15
    `)
  }
}
