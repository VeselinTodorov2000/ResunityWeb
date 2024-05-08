import { Component, Input, OnInit } from '@angular/core';
import { Homeowner } from '../models/homeowner';
import { Building } from '../models/building';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buildinggeneral',
  templateUrl: './buildinggeneral.component.html',
  styleUrls: ['./buildinggeneral.component.css']
})
export class BuildinggeneralComponent implements OnInit {
  public currentUser: Homeowner = {
    homeownerName: 'Dimitar Dimitrov',
    howeownerCompany: 'Arteks',
    profileIcon: 'assets/profile-icon.jpg',
    buidings: [
      {
        id: 1,
        buildingNumber: '21',
        buildingSubnumber: 'A',
        district: 'Студентски град',
        city: 'София',
        safe: {
          debit: 2000.00
        }
      },
      {
        id: 2,
        buildingNumber: '50',
        buildingSubnumber: 'В',
        district: 'Малинова Долина',
        city: 'София',
        safe: {
          debit: 1120.00
        }
      },
      {
        id: 3,
        buildingNumber: '38',
        district: 'Тракия',
        city: 'Пловдив',
        safe: {
          debit: 500.00
        }
      },
      {
        id: 4,
        buildingNumber: '250',
        district: 'Сторгозия',
        city: 'Плевен',
        safe: {
          debit: 1200.00
        }
      },
    ]
  };

  public selection!: Building;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const itemString = params['selection'];
      this.selection = JSON.parse(itemString);
    });
  }

}
