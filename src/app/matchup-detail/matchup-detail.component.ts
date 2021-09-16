import { MatchupService } from './../matchup.service';
import { Component, OnInit } from '@angular/core';
import { MetadataService } from './../metadata.service';
import { Metadata } from './../metadata';
import { Matchups } from '../matchup';

@Component({
  selector: 'app-matchup-detail',
  templateUrl: './matchup-detail.component.html',
  styleUrls: ['./matchup-detail.component.css']
})
export class MatchupDetailComponent implements OnInit {

  year: string = '2012';
  week: string = "1";
  years = ['2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'];
  weeks : Array<Number> = [];
  metadata = <Metadata>{};
  matchupDetail : Array<Matchups> = [];

  constructor(
    private metadataService: MetadataService,
    private matchupService : MatchupService) {}

  ngOnInit(): void {
    this.getWeekMatchups();
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
  }

  onWeekOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.week = value;
    console.log(`WEEK ATTRIBUTE SET TO ${this.week}`);
    console.log(`YEAR ATTRIBUTE IS ${this.year}`);
    this.getWeekMatchups();
  }
}


