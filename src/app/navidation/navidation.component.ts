import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-navidation',
  templateUrl: './navidation.component.html',
  styleUrls: ['./navidation.component.css']
})
export class NavidationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );
  token;
  constructor(private breakpointObserver: BreakpointObserver) {
     this.token = localStorage.getItem('number');
  }

}
