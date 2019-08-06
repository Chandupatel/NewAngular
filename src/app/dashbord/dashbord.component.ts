import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DilogComponent } from '../dilog/dilog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, public diloge: MatDialog, private toastr: ToastrService,
    private rout :Router) {
   
    }

  submit() {
    console.log("sdjfk");
    this.toastr.success('Function Call', 'Toast');
  }

  Open() {
    const dilconfig = new MatDialogConfig();
    /* dilconfig.disableClose =true;
    dilconfig.autoFocus = true; */
    dilconfig.width = '60%';

    this.diloge.open(DilogComponent, dilconfig);
  }
  ngOnInit(): void {
    if (!localStorage.getItem('number')) {
      this.rout.navigate(['/Login']);
  }
    
  }

}
