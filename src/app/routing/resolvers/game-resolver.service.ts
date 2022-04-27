import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { GamesService } from 'src/app/services/games.service';

@Injectable({
  providedIn: 'root'
})
export class GameResolverService implements Resolve<any> {

  constructor(private gameService: GamesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any>{
    console.log(route)
    return this.gameService.getGamesById(route.params['id']);
  }
}
