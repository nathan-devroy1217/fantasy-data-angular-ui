import { LeagueUtilityService } from './../league-utility.service';
import { LeagueUtility } from './../leagueUtility';
import { MetadataComponent } from './../metadata/metadata.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meta-dashboard',
  templateUrl: './meta-dashboard.component.html',
  styleUrls: ['./meta-dashboard.component.css'],
})
export class MetaDashboardComponent implements OnInit {

  @ViewChild(MetadataComponent) metaDataComponent! :MetadataComponent;

  years : Array<number> = [];
  utilityData = <LeagueUtility>{};

  constructor(
    private route: ActivatedRoute,
    private leagueUtilityService : LeagueUtilityService) { }

  ngOnInit(): void {
    this.getYears();
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
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
}
