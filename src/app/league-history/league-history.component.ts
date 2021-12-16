import { FantasyTeamHistoricalStats } from './../FantasyHistoryComposite';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { HistoryService } from './../history.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import Utils from '../Utils';
import { FantasyHistoryComposite } from '../FantasyHistoryComposite';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-league-history',
  templateUrl: './league-history.component.html',
  styleUrls: ['./league-history.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LeagueHistoryComponent implements OnInit, AfterViewInit {

  isMobile : boolean;
  historyData = <FantasyHistoryComposite>{}
  historyStats : FantasyTeamHistoricalStats[] = [];
  dataSource = new MatTableDataSource<FantasyTeamHistoricalStats>();
  expandedElement: any;
  expanded : boolean = false;

  columnsToDisplay = ['Fantasy Team'];
  expandedColumnsToDisplay : String[] = ['yearsActive'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private historyService : HistoryService,
    private router: Router
  ) {
    this.isMobile = Utils.verifyDesktop();
    this.sort = new MatSort();
  }

  ngAfterViewInit(): void {
    console.log('INSIDE ngAfterViewInit');
  }

  ngOnInit(): void {
    this.populateLeagueHistory();
  }

  populateLeagueHistory(mobileFlag : boolean = this.isMobile) : void {
    console.log('INSIDE populateLeagueHistory');
    this.isMobile = mobileFlag;
    this.historyStats = [];

    this.historyService.getHistory()
    .subscribe(data => {
      console.log('DATA: ' + JSON.stringify(data));
      this.historyData = data;
      this.populateHistoryForMembers();
    });
  }

  populateHistoryForMembers() : void {
    this.historyData.teamHistoricalStats.forEach(team => {
      let fantasyTeamHistoricalStats : FantasyTeamHistoricalStats = {
        teamName : team.teamName,
        ownerName : team.ownerName,
        yearsActive : team.yearsActive,
        longestWinningStreak : team.longestWinningStreak,
        longestLosingStreak : team.longestLosingStreak,
        totalTrueRecord : team.totalTrueRecord,
        aggregateWinningPercentage : team.aggregateWinningPercentage,
        totalTrueRecordPercentage : team.totalTrueRecordPercentage,
        totalPointsFor : team.totalPointsFor,
        totalPointsAgainst : team.totalPointsAgainst,
        averagePointsFor : team.averagePointsFor,
        averagePointsAgainst : team.averagePointsAgainst,
        averagePointsPerGame : team.averagePointsPerGame,
        averagePointsAllowedPerGame : team.averagePointsAllowedPerGame,
        highestScore : team.highestScore,
        lowestScore : team.lowestScore,
        championships : team.championships,
        highestRank : team.highestRank,
        lowestRank : team.lowestRank,
        highestVictoryMargin : team.highestVictoryMargin,
        highestDefeatMargin : team.highestDefeatMargin,
        bestSingleSeasonRecord : team.bestSingleSeasonRecord,
        worstSingleSeasonRecord : team.worstSingleSeasonRecord,
        winningSeasons : team.winningSeasons,
        losingSeasons: team.losingSeasons,
        totalRosterMoves : team.totalRosterMoves,
        averageRosterMoves : team.averageRosterMoves,
        averageFinishRanking : team.averageFinishRanking,
        averageRawPowerRanking : team.averageRawPowerRanking,
        aggregateOilPowerRanking : team.aggregateOilPowerRanking,
        overallRecord : team.overallRecord
      };
      this.historyStats.push(fantasyTeamHistoricalStats);
    });

    this.dataSource.data = this.historyStats;
    this.dataSource.sort;
  }

  setExpanded() : void {
    if(this.expanded == false) {
      this.expanded = true;
    } else {
      this.expanded = false;
    }

    console.log('EXPANDED: ' + this.expanded);
  }

  getExpanded() : Boolean {
    return this.expanded;
  }
}
