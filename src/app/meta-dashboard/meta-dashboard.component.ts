import { LeagueUtilityService } from './../league-utility.service';
import { LeagueUtility } from './../leagueUtility';
import { MetadataComponent } from './../metadata/metadata.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Utils from '../Utils';

@Component({
  selector: 'app-meta-dashboard',
  templateUrl: './meta-dashboard.component.html',
  styleUrls: ['./meta-dashboard.component.css'],
})
export class MetaDashboardComponent implements OnInit {

  @ViewChild(MetadataComponent) metaDataComponent! :MetadataComponent;

  years : Array<number> = [];
  utilityData = <LeagueUtility>{};
  desktop : boolean;
  year : string = '';

  constructor(
    private route: ActivatedRoute,
    private leagueUtilityService : LeagueUtilityService) {
      this.desktop = Utils.verifyDesktop();
    }

  ngOnInit(): void {
    this.getYears();
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.year = value;
    this.metaDataComponent.updateMetadata(value);
  }

  getYears() : void {
    this.leagueUtilityService.getYearsActive()
    .subscribe(data => {
      console.log('ACTIVE YEARS RETRIEVED FROM SERVICE: ' + JSON.stringify(data));
      this.utilityData = data;
      this.years = this.utilityData.yearsActive;
    });
  }

  onResize() : void {
    console.log('CURRENT YEAR FOOBAR IS: ' + this.year);
    let existingFlag = this.desktop;
    this.desktop = Utils.verifyDesktop();
    console.log(`OLD: ${existingFlag} --- NEW: ${this.desktop}`);
    if(existingFlag != this.desktop) {
      this.metaDataComponent.updateMetadata(this.year, this.desktop);
    }
  }
}
