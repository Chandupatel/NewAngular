import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DilogComponent } from '../dilog/dilog.component';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
   providers: [NgbCarouselConfig] 
})
export class DashbordComponent {
  
  constructor(public diloge: MatDialog, private toastr: ToastrService, private rout: Router, config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
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

  public imagePath;
  imgURL: any;
  public message: string;
  numofinage = [];

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.images.push(this.imgURL);
      console.log(' this.imgURL', this.imgURL);
    }
  }
  images = [].map(() => Math.random());
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = false;
  
}
