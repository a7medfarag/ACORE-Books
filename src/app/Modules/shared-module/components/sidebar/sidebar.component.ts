import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})


export class SidebarComponent{
@Input() auth:boolean = true;
@Output() logOut = new EventEmitter();
value:number;
  logOutFn(){
    this.logOut.emit();
  }
}
