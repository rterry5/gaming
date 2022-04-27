import { AppComponent } from './app.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameResolverService } from './routing/resolvers/game-resolver.service';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreNewsComponent } from './components/pages/more-news/more-news.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: []
  },
  {
    path: 'more-news',
    component: MoreNewsComponent
  },
  {
    path: 'game/:id',
    component: GameDetailsComponent,
    resolve: {
      id: GameResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
