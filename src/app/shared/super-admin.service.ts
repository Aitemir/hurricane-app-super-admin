import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  constructor() { }
  
  statuses = ['open', 'open near capacity', 'open full', 'closed']
  
  getStatuses(): String[] {
    return this.statuses;
  }
}