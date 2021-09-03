import { DraftDetail, FantasyPick } from './../draftDetail';
import { DraftDetailService } from './../draft-detail.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlayerModalComponent } from '../player-modal/player-modal.component';

@Component({
  selector: 'app-draft-detail',
  templateUrl: './draft-detail.component.html',
  styleUrls: ['./draft-detail.component.css']
})
export class DraftDetailComponent implements OnInit {

  @Input() memberId?: string;
  @Input() year?: string;

  draftDetail = <DraftDetail>{};
  draftHeaders: string[] = ['roundId', 'roundPickNumber', 'pickPlayerFullName', 'keeper', 'overallPickNumber'];
  teamName = '';
  picks : FantasyPick[] = [];
  dataSource = new MatTableDataSource<FantasyPick>();

  constructor(
    private route: ActivatedRoute,
    private draftDetailService: DraftDetailService,
    private router: Router,
    public dialog: MatDialog,
    private location: Location) { }

  ngOnInit(): void {
    this.getMemberId();
    this.getDraftDetail();
  }

  getMemberId() : void {
    const id  = String(this.route.snapshot.paramMap.get('id'));
    const yearInput  = String(this.route.snapshot.paramMap.get('year'));

    this.memberId = id;
    this.year = yearInput;
    console.log('YEAR ON DRAFT DETAIL PAGE IS NOW: ' + this.year);
    console.log('MEMBER ID ON DRAFT DETAIL PAGE IS NOW: ' + this.memberId);
  }

  getDraftDetail() : void {
    console.log('INSIDE GET DRAFT DETAIL');
    const methodYear = String(this.year);
    const methodMemberId = String(this.memberId);
    this.draftDetailService.getDraftDetail(methodYear, methodMemberId)
    .subscribe(data => {
      console.log('DRAFT DETAIL DATA RETURNED FROM SERVICE: ' + JSON.stringify(data));
      this.draftDetail = data;
      this.teamName = this.draftDetail.teamName;
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

  goBack(): void {
    this.location.back();
  }

  selectPlayer(row: any) {
    row.year = this.year;
    row.fantasyTeamName = this.draftDetail.teamName;
    this.dialog.open(PlayerModalComponent, {
      data: row
    });
  }
}
