import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Subject, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isBackButtonDisabled$: Subject<boolean> = new Subject<boolean>();
  public isForwardButtonDisabled$: Subject<boolean> = new Subject<boolean>();

  private _url = '';
  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(filter((events) => events instanceof NavigationEnd))
      .subscribe((event: any) => {
        this._url = event.url;
        this.isBackButtonDisabled$.next(this._url === '/home');
        this.isForwardButtonDisabled$.next(this._url === '/neuromarketing');
      });
  }

  public onBackClick(): void {
    switch (this._url) {
      case '/big-data': {
        this.router.navigate(['/home']);
        break;
      }
      case '/dynamic-content': {
        this.router.navigate(['/big-data']);
        break;
      }
      case '/neuromarketing': {
        this.router.navigate(['/dynamic-content']);
        break;
      }

      default: {
        this.router.navigate(['/home']);
      }
    }
  }

  public onForwardClick(): void {
    switch (this._url) {
      case '/home': {
        this.router.navigate(['/big-data']);
        break;
      }
      case '/big-data': {
        this.router.navigate(['/dynamic-content']);
        break;
      }
      case '/dynamic-content': {
        this.router.navigate(['/neuromarketing']);
        break;
      }

      default: {
        this.router.navigate(['/home']);
      }
    }
  }
}
