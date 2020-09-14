import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterAddressDialogComponent } from './shelter-address-dialog.component';

describe('ShelterAddressDialogComponent', () => {
  let component: ShelterAddressDialogComponent;
  let fixture: ComponentFixture<ShelterAddressDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterAddressDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
