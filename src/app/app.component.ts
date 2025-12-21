import { Component, AfterViewInit, ApplicationRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter, take } from 'rxjs';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private appRef = inject(ApplicationRef);
  private scroller = inject(ViewportScroller);

  ngAfterViewInit() {
    this.appRef.isStable
      .pipe(filter(Boolean), take(1))
      .subscribe(() => this.scrollToHash());
  }

  private scrollToHash() {
    const id = location.hash.slice(1);
    if (!id) return;

    this.scroller.setOffset([0, 88]);
    requestAnimationFrame(() => this.scroller.scrollToAnchor(id));
  }
}
