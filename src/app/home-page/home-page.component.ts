import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  selectedTab: string = "NewReg";
  imagePath: string = '';

  ngOnInit(): void {
    this.imagePath = '/assets/userIcon.png';
  }

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
