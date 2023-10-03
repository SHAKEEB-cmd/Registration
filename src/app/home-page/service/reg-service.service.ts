import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {
  newUserData: any[] = [];

  constructor() { }

  getdata(): any[] {
    return this.newUserData;
  }
  setdata(val: any[]) {
    this.newUserData.push(val);
  }
}
