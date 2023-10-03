import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RegServiceService } from '../service/reg-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  registeredUsers: any[] = [];

  constructor(private regService: RegServiceService,
    private cd: ChangeDetectorRef) { }

  displayedColumns: string[] = ['userName', 'email', 'addresses', 'actions'];

  ngOnInit() {
    this.registeredUsers = this.regService.getdata();
  }

  deleteUser(user: any): void {
    this.registeredUsers = this.registeredUsers.filter((users: any) => user.email !== users.email);
    this.regService.newUserData = this.registeredUsers;
  }

}
