import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FoundationComponent} from './foundation/foundation.component';
import {APP_BASE_HREF} from '@angular/common';
import { BuildingselectionComponent } from './buildingselection/buildingselection.component';
import { BuildinggeneralComponent } from './buildinggeneral/buildinggeneral.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CashierComponent } from './cashier/cashier.component';
import { NewNotificationModalComponent } from './notifications/new-notification-modal/new-notification-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        FoundationComponent,
        BuildingselectionComponent,
        BuildinggeneralComponent,
        NotificationsComponent,
        ActivitiesComponent,
        CashierComponent,
        NewNotificationModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
