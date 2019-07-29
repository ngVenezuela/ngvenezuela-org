import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { User } from 'firebase/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;
  user: User;

  constructor(
    private angularFireAuth: AngularFireAuth
    ) {}

  ngOnInit() {

    this.userSubscription = this.angularFireAuth.user
      .subscribe((userInfo: User) => {
        this.user = userInfo;
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }


}
