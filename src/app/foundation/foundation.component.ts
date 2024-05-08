import {Component, Input} from '@angular/core';
import {Homeowner} from '../models/homeowner';
import { Router } from '@angular/router';

@Component({
    selector: 'app-foundation',
    templateUrl: './foundation.component.html',
    styleUrls: ['./foundation.component.css']
})
export class FoundationComponent {
    @Input() public currentUser!: Homeowner;
    @Input() public title!: string;

    constructor(public router: Router) {
    }

  redirectToHome() {
    this.router.navigate(['']);
  }
}
