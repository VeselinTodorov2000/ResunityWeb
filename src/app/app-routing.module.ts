import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuildingselectionComponent} from './buildingselection/buildingselection.component';
import {BuildinggeneralComponent} from './buildinggeneral/buildinggeneral.component';

const routes: Routes = [
  {path: '', component: BuildingselectionComponent},
  {path: `building`, component: BuildinggeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}
