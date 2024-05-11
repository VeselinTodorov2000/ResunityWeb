import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuildingselectionComponent} from './buildingselection/buildingselection.component';
import {BuildinggeneralComponent} from './buildinggeneral/buildinggeneral.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CashierComponent } from './cashier/cashier.component';

const routes: Routes = [
  {path: '', component: BuildingselectionComponent},
  {path: `building`, component: BuildinggeneralComponent},
  {path: `activities`, component: ActivitiesComponent},
  {path: `notifications`, component: NotificationsComponent},
  {path: `cashier`, component: CashierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}
