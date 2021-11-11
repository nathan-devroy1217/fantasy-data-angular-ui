import { FantasyPick } from './../draftDetail';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Utils from '../Utils';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css']
})
export class PlayerModalComponent implements OnInit {

  isMobile : boolean;

  constructor(public dialogRef: MatDialogRef<PlayerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FantasyPick) {
      this.isMobile = Utils.verifyDesktop();
    }

  ngOnInit(): void {
  }
}
