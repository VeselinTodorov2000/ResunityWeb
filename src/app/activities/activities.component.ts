import { Component, OnInit } from '@angular/core';
import {Homeowner} from '../models/homeowner';
import {Building} from '../models/building';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationType} from '../models/notification-type';
import {ActivityType} from '../models/activity-type';
import {Activity} from '../models/activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  public currentUser: Homeowner = {
    homeownerName: 'Dimitar Dimitrov',
    howeownerCompany: 'Arteks',
    profileIcon: 'assets/profile-icon.jpg',
    buildings: []
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

  protected readonly NotificationType = NotificationType;
  protected readonly ActivityType = ActivityType;

  getActivitiesByType(type: ActivityType): Activity[] {
    return [];
  }
}
