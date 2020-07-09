import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'work';
  menu = faBars;
  mediaSub: Subscription;
  deviceSm: boolean;
  deviceSize: string;
  constructor(public mediaObserver: MediaObserver) { }
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceSm = result.mqAlias === 'sm' || result.mqAlias === 'xs' ? true : false;
      }
    );
  }
}
