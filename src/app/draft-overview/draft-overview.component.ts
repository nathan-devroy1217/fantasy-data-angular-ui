import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DraftDetailService } from '../draft-detail.service';
import { DraftDetail, FantasyPick } from '../draftDetail';
import { PlayerModalComponent } from '../player-modal/player-modal.component';
import { Location } from '@angular/common';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-draft-overview',
  templateUrl: './draft-overview.component.html',
  styleUrls: ['./draft-overview.component.css']
})
export class DraftOverviewComponent implements OnInit, AfterViewInit {

  year: string = '2012';
  years = ['2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'];
  draftHeaders: string[] = ['roundId', 'roundPickNumber', 'pickPlayerFullName', 'keeper', 'overallPickNumber'];
  draftDetail = <DraftDetail>{};
  dataSource = new MatTableDataSource<FantasyPick>();
  picks : FantasyPick[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  fantasyTeamId : string = '';

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private draftDetailService: DraftDetailService,
    private router: Router,
    public dialog: MatDialog,
    private location: Location) {
      this.paginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
      this.sort = new MatSort();
    }

  ngOnInit(): void {
    this.getDraftOverview();
  }

  getDraftOverview() : void {
    console.log('INSIDE GET DRAFT OVERVIEW');
    this.picks = [];
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
      this.picks.push(pick);
    });
    console.log('PICKS: ' + JSON.stringify(this.picks));
    this.dataSource.data = this.picks;
  }

  selectPlayer(row: any) {
    row.year = this.year;
    this.dialog.open(PlayerModalComponent, {
      data: row
    });
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.year = value;
    this.getDraftOverview();
  }

  goBack(): void {
    this.location.back();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

