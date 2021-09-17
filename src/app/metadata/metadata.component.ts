import { MemberComposite } from './../memberComposite';
import { MetadataService } from './../metadata.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { FantasyLeague } from '../fantasyLeague';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<MemberComposite>();
  metadata = <FantasyLeague>{};
  members : MemberComposite[] = [];
  metaHeaders: string[] = ['displayName', 'teamAbbreviation', 'ownerFirstName', 'ownerLastName', 'teamLocation', 'teamNickname', 'getDetails']
  selectedYear: string = '2012';

  @ViewChild(MatSort) sort: MatSort;

  constructor(private metadataService: MetadataService,
    private router: Router) {
    this.sort = new MatSort();
  }

   ngOnInit(): void {
    console.log('CURRENT SELECTED YEAR IS: ' + this.selectedYear);
    this.getMetadata(this.selectedYear);
  }

  ngAfterViewInit() {
    console.log('INSIDE ngAfterViewInit');
    this.dataSource.sort = this.sort;
  }

  updateMetadata(year: string): void {
    console.log('INSIDE UPDATE METADATA');
    this.selectedYear = year;
    this.members = [];
    this.getMetadata(year);
  }

  getMetadata(selectedYear: string): void {
    console.log('METADATA: ' + JSON.stringify(this.metadata));
    //this.metadataService.getMetadata(selectedYear)
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
      console.log("BUILDING MEMBER COMPOSITE: " + composite);
      this.members.push(composite);
    });
    this.dataSource.data = this.members;
    this.dataSource.sort;
  }

  // getMembers(): void {
  //   console.log(this.metadata);
  //   this.metadata.members.forEach(member => {
  //       this.members.push(member);
  //   });
  //   this.dataSource.data = this.members;
  //   this.dataSource.sort;
  // }

  ngOnChanges() {
    console.log('SELECTED YEAR: ' + this.selectedYear);
  }

  getRecord(memberId : string) : void {
    console.log('MEMBERID IS: ' + memberId);
    this.router.navigate(['/draft/' + this.selectedYear + "/" + memberId]);
  }
}
