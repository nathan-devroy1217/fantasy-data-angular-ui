import { StandingsComponent } from './../standings/standings.component';
import { MatchupService } from './../matchup.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MetadataService } from './../metadata.service';
import { Metadata } from './../metadata';
import { Matchups } from '../matchup';
import { LeagueUtilityService } from '../league-utility.service';
import { LeagueUtility } from '../leagueUtility';

@Component({
  selector: 'app-matchup-detail',
  templateUrl: './matchup-detail.component.html',
  styleUrls: ['./matchup-detail.component.css']
})
export class MatchupDetailComponent implements OnInit {

  @ViewChild(StandingsComponent) standingsComponent! :StandingsComponent;

  year: string = '2012';
  week: string = "1";
  years : Array<number> = [];
  utilityData = <LeagueUtility>{};
  weeks : Array<Number> = [];
  metadata = <Metadata>{};
  matchupDetail : Array<Matchups> = [];

  constructor(
    private metadataService: MetadataService,
    private leagueUtilityService : LeagueUtilityService,
    private matchupService : MatchupService) {}

  ngOnInit(): void {
    this.getYears();
    this.getWeekMatchups();
  }

  getYears() : void {
    this.leagueUtilityService.getYearsActive()
    .subscribe(data => {
      console.log('ACTIVE YEARS RETRIEVED FROM SERVICE: ' + JSON.stringify(data));
      this.utilityData = data;
      this.years = this.utilityData.yearsActive;
    });
  }

  getWeekMatchups() : void {
    console.log('INSIDE getWeekMatchups()');
    this.generateAvailableWeeks();
    this.generateMatchupDetail();
  }

  generateMatchupDetail() : void {
    const methodWeek = String(this.week);
    const methodYear = String(this.year);
    this.matchupService.getMatchupDetail(methodYear, methodWeek)
    .subscribe(data => {
      this.matchupDetail = data.matchups;
      this.addIdentifierToMatchup();
      console.log('DRAFT DATA RETURNED FROM SERVICE: ' + JSON.stringify(this.matchupDetail));
    });
  }

  generateAvailableWeeks() : void {
    const methodYear = String(this.year);
    console.log(`QUERYING METADATA TABLE FOR YEAR ${methodYear}`);
    this.getMetadata(methodYear);
  }

  getMetadata(selectedYear: string): void {
    this.metadataService.getMetadata(selectedYear)
    .subscribe(data => {
      console.log("DATA: " + JSON.stringify(data));
      this.metadata = data;
      this.weeks = this.metadata.weeksInSeason;
      console.log(`Found weeks for season ${selectedYear} --> ${this.weeks}`);
    });
  }

  addIdentifierToMatchup() : void {
    console.log('ADDING IDENTIFIER TO EACH LEAGUE MATCHUP')
    let num : number = 1;
    this.matchupDetail.forEach(detail => {
      detail.matchIdentifier = num++;
    });
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.year = value;
    console.log(`WEEK ATTRIBUTE SET TO ${this.week}`);
    console.log(`YEAR ATTRIBUTE IS ${this.year}`);
    this.getWeekMatchups();
    this.standingsComponent.populateStandings(this.year);
  }

  onWeekOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.week = value;
    console.log(`WEEK ATTRIBUTE SET TO ${this.week}`);
    console.log(`YEAR ATTRIBUTE IS ${this.year}`);
    this.getWeekMatchups();
  }
}


