import { Component, OnInit } from '@angular/core';
import { Homeowner } from '../models/homeowner';
import { Building } from '../models/building';
import { Router } from '@angular/router';
import { ActivityType } from '../models/activity-type';
import { NotificationType } from '../models/notification-type';

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
            contactValidUntil: new Date(2025, 1),
            numberOfApartments: 32,
            safe: {
              debit: 2000.00,
              cashierName: "Иван Иванов",
              iban: ""
            },
            activities: [],
            notifications: [],
          },
          {
            id: 2,
            buildingNumber: '50',
            buildingSubnumber: 'В',
            district: 'Малинова Долина',
            city: 'София',
            contactValidUntil: new Date(2024, 9),
            numberOfApartments: 24,
            contact: {
              name: "Димитър Кръстев",
              phone: "0888 854 293",
            },
            safe: {
              debit: 1120.00,
              cashierName: "Христо Христов",
              iban: "BG10 0000 0000 0000",
            },
            activities: [
              {
                name: 'Покрив',
                type: ActivityType.ACTIVE
              },
              {
                name: 'Саниране',
                type: ActivityType.ACTIVE
              },
              {
                name: 'Тераси',
                type: ActivityType.FINISHED
              }
            ],
            notifications: [
              {
                name: 'Not1',
                type: NotificationType.ACTIVE,
                creationDate: new Date(2024, 9, 1)
              },
              {
                name: 'Not2',
                type: NotificationType.EXPIRED,
                creationDate: new Date(2024, 2, 15)
              },
              {
                name: 'Not3',
                type: NotificationType.ACTIVE,
                creationDate: new Date(2023, 12, 30)
              }
            ],
          },
          {
            id: 3,
            buildingNumber: '38',
            district: 'Тракия',
            city: 'Пловдив',
            contactValidUntil: new Date(2025, 7),
            numberOfApartments: 20,
            safe: {
              debit: 500.00,
              cashierName: "Ivan",
              iban: "BG10 0000 0000 0000",
            },
            activities: [],
            notifications: [],
          },
          {
            id: 4,
            buildingNumber: '250',
            district: 'Сторгозия',
            city: 'Плевен',
            contactValidUntil: new Date(2025, 7),
            numberOfApartments: 52,
            safe: {
              debit: 1200.00,
              cashierName: "Лъчезар Иванов",
              iban: "BG10 0000 0000 0000",
            },
            activities: [],
            notifications: [],
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
