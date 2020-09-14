import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { SuperAdminService } from 'src/app/shared/super-admin.service';
import { Shelter } from 'src/app/shared/shelter.model';
@Component({
  selector: 'app-shelter-status-dialog',
  templateUrl: './shelter-status-dialog.component.html',
  styleUrls: ['./shelter-status-dialog.component.scss']
})
export class ShelterStatusDialogComponent implements OnInit {

  constructor(private _superAdminService: SuperAdminService,
    public dialogRef: MatDialogRef<ShelterStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  statusControl = new FormControl('valid', [
    Validators.required,
  ]);  
  statuses = this._superAdminService.getStatuses();
  shelter: Shelter;

  ngOnInit(): void {
    this.shelter = <Shelter>{};
    this.shelter.shelterId = this.data.shelterId;
    this.shelter.shelterStatus = this.data.shelterStatus;
  }
  
  onNoClick(status: string): void {
    this.shelter.shelterStatus = status;
    this.dialogRef.close(this.shelter);
  }

}
