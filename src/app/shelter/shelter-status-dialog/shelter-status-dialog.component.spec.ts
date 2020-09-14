import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterStatusDialogComponent } from './shelter-status-dialog.component';

describe('ShelterStatusDialogComponent', () => {
  let component: ShelterStatusDialogComponent;
  let fixture: ComponentFixture<ShelterStatusDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterStatusDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
