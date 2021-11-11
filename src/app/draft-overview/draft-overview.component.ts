import { FantasyPickMobile } from './../draftDetail';
import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DraftDetailService } from '../draft-detail.service';
import { DraftDetail, FantasyPick } from '../draftDetail';
import { PlayerModalComponent } from '../player-modal/player-modal.component';
import { Location } from '@angular/common';
import { MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { LeagueUtilityService } from '../league-utility.service';
import { LeagueUtility } from '../leagueUtility';
import Utils from '../Utils';

@Component({
  selector: 'app-draft-overview',
  templateUrl: './draft-overview.component.html',
  styleUrls: ['./draft-overview.component.css']
})
export class DraftOverviewComponent implements OnInit, AfterViewInit {

  year: string = '';
  years : Array<number> = [];
  utilityData = <LeagueUtility>{};

  draftHeaders: string[] = ['roundId', 'roundPickNumber', 'pickPlayerFullName', 'keeper', 'overallPickNumber'];
  draftHeadersMobile: string[] = ['detail'];
  draftDetail = <DraftDetail>{};
  dataSource = new MatTableDataSource<FantasyPick>();
  dataSourceMobile = new MatTableDataSource<FantasyPickMobile>();
  picks : FantasyPick[] = [];
  picksMobile : FantasyPickMobile[] = [];
  isMobile : boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  fantasyTeamId : string = '';

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private draftDetailService: DraftDetailService,
    private leagueUtilityService : LeagueUtilityService,
    private router: Router,
    public dialog: MatDialog,
    private location: Location) {
      this.paginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
      this.sort = new MatSort();
      this.isMobile = Utils.verifyDesktop();
    }

  ngOnInit(): void {
    this.getYears();
    this.getDraftOverview();
    this.dataSourceMobile.filterPredicate = (data: FantasyPickMobile, filter: string) => {
      return data.detail.pickPlayerFullName.toLowerCase().includes(filter);
    };
  }

  getYears() : void {
    this.leagueUtilityService.getYearsActive()
    .subscribe(data => {
      console.log('ACTIVE YEARS RETRIEVED FROM SERVICE: ' + JSON.stringify(data));
      this.utilityData = data;
      this.years = this.utilityData.yearsActive;
      this.onOptionsSelected('2012');
    });
  }

  getDraftOverview() : void {
    console.log('INSIDE GET DRAFT OVERVIEW');
    this.picks = [];
    this.picksMobile = [];
    const methodYear = String(this.year);
    this.draftDetailService.getDraftOverview(methodYear)
    .subscribe(data => {
      console.log('DRAFT DATA RETURNED FROM SERVICE: ' + JSON.stringify(data));
      this.draftDetail = data;
      this.processFantasyPicks();
    });
  }

  processFantasyPicks() : void {
    console.log('INSIDE PROCESS FANTASY PICKS');
    this.draftDetail.picks.forEach(pick => {
      pick.className = 'FantasyPick';
      this.picks.push(pick);

      let mobilePickDetail : FantasyPickMobile = {
        detail: pick,
        className: 'FantasyPickMobile'
      };
      this.picksMobile.push(mobilePickDetail);

    });
    console.log('PICKS: ' + JSON.stringify(this.picks));
    this.dataSourceMobile.data = this.picksMobile;
    this.dataSource.data = this.picks;
  }

  selectPlayer(row: any) {
    if(row.className == 'FantasyPickMobile') {
      row = row.detail;
    }

    row.year = this.year;
    this.dialog.open(PlayerModalComponent, {
      data: row
    });
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.dataSource.filter = '';
    this.dataSourceMobile.filter = '';
    this.year = value;
    this.getDraftOverview();
  }

  goBack(): void {
    this.location.back();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSourceMobile.paginator = this.paginator;
    this.dataSourceMobile.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSourceMobile.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    if (this.dataSourceMobile.paginator) {
      this.dataSourceMobile.paginator.firstPage();
    }
  }

  onResize() : void {
    this.isMobile = Utils.verifyDesktop();
  }
}

