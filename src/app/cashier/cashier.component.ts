import { Component, OnInit } from '@angular/core';
import { Homeowner } from '../models/homeowner';
import { Building } from '../models/building';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  public currentUser: Homeowner = {
    homeownerName: 'Dimitar Dimitrov',
    howeownerCompany: 'Arteks',
    profileIcon: 'assets/profile-icon.jpg',
    buidings: []
  };

  public selection!: Building;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const itemString = params['selection'];
      this.selection = JSON.parse(itemString);
    });
  }
}
