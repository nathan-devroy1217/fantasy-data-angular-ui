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

  years = ['2012','2013','2014','2015','2016','2017','2018','2019','2020'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.metaDataComponent.updateMetadata(value);
  }
}
