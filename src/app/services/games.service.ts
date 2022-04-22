import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


  getGames() {
    return this.http.get<any>(`https://api.rawg.io/api/genres?key=81de34a78d4a4408864ded61575c4214`);
  }

  searchGames(searchTerm: string) {
    return this.http.get<any>(`https://api.rawg.io/api/games?search=${searchTerm}&key=81de34a78d4a4408864ded61575c4214`);
  }

}
