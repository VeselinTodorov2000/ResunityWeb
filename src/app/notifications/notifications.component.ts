import { Component, OnInit } from '@angular/core';
import { Homeowner } from '../models/homeowner';
import { Building } from '../models/building';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationType } from '../models/notification-type';
import { Notification } from '../models/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

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

  getNotificationsByType(notificationType: NotificationType): Notification[] {
    return this.selection.notifications.filter(notification => notification.type === notificationType);
  }

  protected readonly NotificationType = NotificationType;

  expireNotification(notification: Notification) {
    notification.type = NotificationType.EXPIRED;
  }

  reopenNotification(notification: Notification) {
    notification.type = NotificationType.ACTIVE;
  }

  getNotificationCreationDay(notification: Notification) {
    let date = new Date(notification.creationDate);
    return date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
  }
}
