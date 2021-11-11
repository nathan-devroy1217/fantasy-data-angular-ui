import { MemberComposite, MemberMobileComposite } from './../memberComposite';
import { MetadataService } from './../metadata.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { FantasyLeague } from '../fantasyLeague';
import Utils from '../Utils';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<MemberComposite>();
  mobileDataSource = new MatTableDataSource<MemberMobileComposite>();
  metadata = <FantasyLeague>{};
  members : MemberComposite[] = [];
  mobileMembers : MemberMobileComposite[] = [];
  metaHeaders: string[] = ['displayName', 'teamAbbreviation', 'ownerFirstName', 'ownerLastName', 'teamLocation', 'teamNickname', 'getDetails']
  mobileMetaHeaders: string[] = ['detail'];
  selectedYear: string = '2012';

  @ViewChild(MatSort) sort: MatSort;

  isMobile : boolean;

  constructor(private metadataService: MetadataService,
    private router: Router) {
    this.sort = new MatSort();
    this.isMobile = Utils.verifyDesktop();
  }

   ngOnInit(): void {
    console.log('CURRENT SELECTED YEAR IS: ' + this.selectedYear);
    this.getMetadata(this.selectedYear);
  }

  ngAfterViewInit() {
    console.log('INSIDE ngAfterViewInit');
    this.dataSource.sort = this.sort;
  }

  updateMetadata(year: string, mobileFlag : boolean = this.isMobile): void {
    console.log('INSIDE UPDATE METADATA --- YEAR: ' + year);
    if(year == '') year = this.selectedYear;
    console.log('UPDATED YEAR IS: ' + year);
    this.isMobile = mobileFlag;
    this.selectedYear = year;
    this.members = [];
    this.mobileMembers = [];
    this.getMetadata(year);
  }

  getMetadata(selectedYear: string): void {
    console.log('METADATA: ' + JSON.stringify(this.metadata));
    this.metadataService.getMetadataV2(selectedYear)
    .subscribe(data => {
      console.log("DATA: " + JSON.stringify(data));
      this.metadata = data;
      this.getMembers();
    });
  }

  getMembers(): void {
    console.log(this.metadata);
    this.metadata.fantasyMembers.forEach(leagueMember => {
      let composite : MemberComposite = {
        displayName: leagueMember.displayName,
        memberId: leagueMember.id,
        teamAbbreviation: leagueMember.abbrev,
        teamLocation: leagueMember.location,
        teamNickname: leagueMember.nickName,
        logo: leagueMember.logo,
        firstName: leagueMember.firstName,
        lastName: leagueMember.lastName
      };

      let mobileComposite : MemberMobileComposite = {
        detail: composite
      };

      console.log("BUILDING MEMBER COMPOSITE: " + JSON.stringify(composite));
      this.members.push(composite);
      this.mobileMembers.push(mobileComposite);
    });
    this.dataSource.data = this.members;
    this.mobileDataSource.data = this.mobileMembers;
    console.log('MOBILE DATA SOURCE: ' + JSON.stringify(this.mobileDataSource.data));
    this.dataSource.sort;
  }

  ngOnChanges() {
    console.log('SELECTED YEAR: ' + this.selectedYear);
  }

  getRecord(memberId : string) : void {
    console.log('MEMBERID IS: ' + memberId);
    this.router.navigate(['/draft/' + this.selectedYear + "/" + memberId]);
  }
}
