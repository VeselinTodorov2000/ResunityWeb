import { Component, OnInit } from '@angular/core';
import { Homeowner } from '../models/homeowner';
import { Building } from '../models/building';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buildingselection',
  templateUrl: './buildingselection.component.html',
  styleUrls: ['./buildingselection.component.css']
})
export class BuildingselectionComponent implements OnInit {

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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  selectBuilding(building: Building) {
    this.router.navigate(['/building'], {queryParams: {selection: JSON.stringify(building)}});
  }
}
