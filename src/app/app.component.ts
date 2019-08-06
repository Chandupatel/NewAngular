import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DilogComponent } from './dilog/dilog.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public diloge: MatDialog, private toastr: ToastrService){}
  submit(){
    console.log("sdjfk");
    this.toastr.success('Function Call', 'Toast');
  }

  Open(){
    const dilconfig = new MatDialogConfig();
    /* dilconfig.disableClose =true;
    dilconfig.autoFocus = true; */
    dilconfig.width = '60%';
    
    this.diloge.open(DilogComponent, dilconfig);
  }
  
}
