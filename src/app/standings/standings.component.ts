import { StandingsMobileComposite } from './../StandingsMobileComposite';
import { StandingsComposite } from './../standingsComposite';
import { StandingsService } from './../standings.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Standings } from '../standings';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import Utils from '../Utils';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit, AfterViewInit {

  isMobile : boolean;

  @ViewChild(MatSort) sort: MatSort;

  standingsHeaders: string[] = ['finalRank', 'team', 'owner', 'wins', 'losses', 'ties', 'winningPercentage', 'pointsScored', 'pointsAllowed', 'longestStreak', 'streakType',
                                'playoffSeed', 'totalAcquisitions'];

  standingsHeadersMobile: string[] = ['detail'];

  dataSource = new MatTableDataSource<StandingsComposite>();
  mobileDataSource = new MatTableDataSource<StandingsMobileComposite>();
  year : string = '2012';
  standings = <Standings>{};
  standingsCompositeList : StandingsComposite[] = [];
  standingsMobileComposite = <StandingsMobileComposite>{};
  standingsMobileCompositeList : StandingsMobileComposite[] = [];

  constructor(
    private standingsService : StandingsService,
    private router: Router) {
      this.isMobile = Utils.verifyDesktop();
      this.sort = new MatSort();
    }

  ngOnInit(): void {
    this.populateStandings(this.year);
  }

  ngAfterViewInit() {
    console.log('INSIDE ngAfterViewInit');
    this.dataSource.sort = this.sort;
  }

  populateStandings(year : string, mobileFlag : boolean = this.isMobile) : void {
    this.standingsCompositeList = [];
    this.standingsMobileCompositeList = [];
    this.isMobile = mobileFlag;
    this.standingsCompositeList = [];
    this.year = year;
    this.standingsService.getStandings(year)
    .subscribe(data => {
      console.log("DATA: " + JSON.stringify(data));
      this.standings = data;
      this.getStandingsComposite();
    });
  }

  getStandingsComposite(): void {
    this.standings.fantasyMembers.forEach(member => {
      let composite : StandingsComposite = {
        team: member.location + ' ' + member.nickName,
        owner: member.firstName + ' ' + member.lastName,
        wins: member.stats.overallStats.wins,
        losses: member.stats.overallStats.losses,
        ties: member.stats.overallStats.ties,
        winningPercentage: member.stats.overallStats.percentage.toFixed(3),
        pointsScored: member.stats.overallStats.pointsFor,
        pointsAllowed: member.stats.overallStats.pointsAgainst,
        longestStreak: member.stats.overallStats.streakLength,
        streakType: member.stats.overallStats.streakType,
        playoffSeed: member.stats.playoffSeed,
        gamesBack: member.stats.overallStats.gamesBack,
        totalAcquisitions: member.stats.totalAcquisitions,
        finalRank: member.stats.rankCalculatedFinal
      };

      let mobileComposite : StandingsMobileComposite = {
        detail : composite
      };

      console.log('BUILDING STANDINGS COMPOSITE: ' + JSON.stringify(composite));
      this.standingsCompositeList.push(composite);
      this.standingsMobileCompositeList.push(mobileComposite);
      console.log('BUILDING MOBILE COMPOSITE: ' + JSON.stringify(mobileComposite));
    });
    this.dataSource.data = this.standingsCompositeList;
    this.dataSource.sort;
    this.mobileDataSource.data = this.standingsMobileCompositeList;
  }
}
