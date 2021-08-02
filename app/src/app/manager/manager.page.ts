import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {
  public dashboardPages = [
    { title: 'Users', url: './users', icon: 'heart' },
  ];

  public otherLocations = [
    { title: 'Session', url: '../session', icon: 'bookmark' },
    { title: 'Logout', url: '../login', icon: 'bookmark' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
