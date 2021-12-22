import { MessageModelComposite } from './../messageModelComposite';
import { MessageServiceService } from './../message-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {

  messageData : MessageModelComposite = <MessageModelComposite>{};

  constructor(public dialogRef: MatDialogRef<MessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
    private messageService : MessageServiceService
    ) {}

  ngOnInit(): void {
    console.log('INSIDE MessageModalComponent onInit ----> ' + this.data);

    this.messageService.getMessageModalDetail(this.data.toString())
    .subscribe(data => {
      console.log('DATA: ' + JSON.stringify(data));
       this.messageData = data;
    });
  }
}
