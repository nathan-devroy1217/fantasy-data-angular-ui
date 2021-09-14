import { DraftDetail, FantasyPick } from './../draftDetail';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css']
})
export class PlayerModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PlayerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FantasyPick) { }

  ngOnInit(): void {
  }
}
