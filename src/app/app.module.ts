import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetadataComponent } from './metadata/metadata.component';
import { MetaDashboardComponent } from './meta-dashboard/meta-dashboard.component';
import {DataTablesModule} from 'angular-datatables';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MaterialModule } from './modules/material/material.module';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DraftDetailComponent } from './draft-detail/draft-detail.component';
import { PlayerModalComponent } from './player-modal/player-modal.component';
import { DraftOverviewComponent } from './draft-overview/draft-overview.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatchupDetailComponent } from './matchup-detail/matchup-detail.component';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StrongPipePipe } from './strong-pipe.pipe';
import { StandingsComponent } from './standings/standings.component';
import { LeagueHistoryComponent } from './league-history/league-history.component';
import { MessageModalComponent } from './message-modal/message-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MetadataComponent,
    MetaDashboardComponent,
    NavbarComponent,
    DraftDetailComponent,
    PlayerModalComponent,
    DraftOverviewComponent,
    MatchupDetailComponent,
    StrongPipePipe,
    StandingsComponent,
    LeagueHistoryComponent,
    MessageModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatListModule,
    MaterialModule,
    MatGridListModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule,
    MatButtonModule,
    DataTablesModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
