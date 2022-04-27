import { AppComponent } from './app.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameResolverService } from './routing/resolvers/game-resolver.service';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '' ,
    redirectTo: 'AppComponent',
    pathMatch: 'full'
  },
  {
    path: 'game/:id',
    component: GameDetailsComponent,
    resolve: {
      id: GameResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
