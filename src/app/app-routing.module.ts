import { LeagueHistoryComponent } from './league-history/league-history.component';
import { MatchupDetailComponent } from './matchup-detail/matchup-detail.component';
import { DraftOverviewComponent } from './draft-overview/draft-overview.component';
import { DraftDetailComponent } from './draft-detail/draft-detail.component';
import { MetaDashboardComponent } from './meta-dashboard/meta-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'meta-dash/:id', component: MetaDashboardComponent},
  { path: '', redirectTo: '/meta-dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'draft-overview', component: DraftOverviewComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'matchups', component: MatchupDetailComponent },
  { path: 'meta-dashboard', component: MetaDashboardComponent },
  { path: 'draft/:year/:id', component: DraftDetailComponent },
  { path: 'history', component: LeagueHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
