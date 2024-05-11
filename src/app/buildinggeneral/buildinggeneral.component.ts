import { Component, OnInit } from '@angular/core';
import { Homeowner } from '../models/homeowner';
import { Building } from '../models/building';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityType } from '../models/activity-type';
import { Activity } from '../models/activity';
import { NotificationType } from '../models/notification-type';
import { Notification } from '../models/notification';

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

  public getContractExpiryDate(): string {
    let date = new Date(this.selection.contactValidUntil);
    return date.getMonth() + "/" + date.getFullYear();
  }

  public getNumberOfActivitiesByType(type: ActivityType): number {
    return this.selection.activities
      .map((activity: Activity) => activity.type)
      .filter((activityType: ActivityType) => activityType === type)
      .length;
  }

  public getNumberOfNotificationsByType(type: NotificationType): number {
    return this.selection.notifications
      .map((notification: Notification) => notification.type)
      .filter((notificationType: NotificationType) => notificationType === type)
      .length;
  }

  protected readonly ActivityType = ActivityType;
  protected readonly NotificationType = NotificationType;

  openActivitiesForBuilding(selection: Building) {
    this.router.navigate(['/activities'], {queryParams: {selection: JSON.stringify(selection)}});
  }

  openNotificationsForBuilding(selection: Building) {
    this.router.navigate(['/notifications'], {queryParams: {selection: JSON.stringify(selection)}});
  }

  openCashierForBuilding(selection: Building) {
    this.router.navigate(['/cashier'], {queryParams: {selection: JSON.stringify(selection)}});
  }
}
