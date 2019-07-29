import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { I18nService } from './modules/shared/services/i18n.service';
import { Observable, Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  CURRENT_LENGUAGE: string;
  currentLanguageInfoSubscription: Subscription;
  userSubscription: Subscription;
  user: User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private i18nService: I18nService,
    private angularFireAuth: AngularFireAuth
    ) {}

  ngOnInit() {
    this.i18nService.init();

    this.currentLanguageInfoSubscription = this.i18nService.currentLanguageInfo$()
      .subscribe((currentLanguage) => {
        this.CURRENT_LENGUAGE = currentLanguage;
      });

    this.userSubscription = this.angularFireAuth.user
      .subscribe((userInfo: User) => {
        this.user = userInfo;
      });
  }

  ngOnDestroy() {
    this.currentLanguageInfoSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  switchLanguage(language: string) {
    this.i18nService.switchLanguage(language);
  }

}
