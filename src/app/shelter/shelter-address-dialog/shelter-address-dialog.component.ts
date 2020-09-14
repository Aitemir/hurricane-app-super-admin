import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shelter-address-dialog',
  templateUrl: './shelter-address-dialog.component.html',
  styleUrls: ['./shelter-address-dialog.component.scss']
})
export class ShelterAddressDialogComponent implements OnInit {

  shelterName: string;
  address: string; 

  constructor(public dialogRef: MatDialogRef<ShelterAddressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.shelterName = this.data.shelterName;
    this.address = this.data.address;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
