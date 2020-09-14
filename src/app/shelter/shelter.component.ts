import { Component, OnInit, ViewChild } from '@angular/core';
import { Shelter } from '../shared/shelter.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SuperAdminHttpService } from '../shared/super-admin-http.service';
import { SuperAdminService } from '../shared/super-admin.service';
import { ShelterStatusDialogComponent } from './shelter-status-dialog/shelter-status-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ShelterAddressDialogComponent } from './shelter-address-dialog/shelter-address-dialog.component';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent implements OnInit {

  uncheck = false; 
  isLoadingResults = true; 
  error: string;
  shelters: Shelter[] = [];
  displayedColumns: string[] = ['shelterId', 'shelterName', 'maxCapacity',
   'registered', 'checkedIn', 'isolated', 'hidden', 'address', 'shelterStatus', 'action'];
  dataSource = new MatTableDataSource<Shelter>(this.shelters);
  color = 'warn';
  pageSize = 10;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private _superAdminHttpService: SuperAdminHttpService,
    public dialog: MatDialog) 
    { }

  ngOnInit(): void {
      const evacueeGroupObservable = this._superAdminHttpService.getAllShelters();
      evacueeGroupObservable.subscribe((data: Shelter[])=> {
        this.isLoadingResults = false;
        this.shelters = data; 
        this.loadData();
      }, error => {
        this.error = error;
      });
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadData() {
    this.dataSource = new MatTableDataSource<Shelter>(this.shelters);
    this.dataSource.sort = this.sort; 
    this.dataSource.paginator = this.paginator;  
  }

  refresh() {
    this.isLoadingResults = true;
    const evacueeGroupObservable = this._superAdminHttpService.getAllShelters();
    this.error = null;
      evacueeGroupObservable.subscribe((data: Shelter[])=> {
        this.isLoadingResults = false;
        this.shelters = data; 
        this.loadData();
      }, error => {
        this.error = error;
      });
  }

  toggled(shelter: Shelter){
    console.log(shelter);  
    const evacueeGroupObservable = this._superAdminHttpService.toggleShelterHidden(shelter)
    evacueeGroupObservable.subscribe((res)=> {
      this.refresh();
    }, 
    (error) => {
      this.refresh();
      this.error = error;
    });
  }

  openAddressDialog(shelterName: string, address: string){
    const dialogRef = this.dialog.open(ShelterAddressDialogComponent, {
      width: '450px',
      height: '225px',
      data: {shelterName: shelterName, address: address}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openShelterStatusDialog(shelterId: number, shelterStatus: string){
    const dialogRef = this.dialog.open(ShelterStatusDialogComponent, {
      width: '300px',
      data: {shelterId: shelterId, shelterStatus: shelterStatus}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.updateShelterStatus(result);
        this.refresh();
      }
    }); 
  }

  updateShelterStatus(shelter: Shelter){
    console.log(shelter);  
    const evacueeGroupObservable = this._superAdminHttpService.updateShelterStatus(shelter)
    evacueeGroupObservable.subscribe((res)=> {
      console.log(res);
      this.refresh();
    }, 
    (error) => {
      this.refresh();
      this.error = error;
    });
  }
}