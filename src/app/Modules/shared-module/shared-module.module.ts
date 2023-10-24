import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './components/sidebar/sidebar.component';

import {TuiAppBarModule} from '@taiga-ui/addon-mobile';
import {TuiProgressModule} from '@taiga-ui/kit';
import {RouterModule} from '@angular/router';
import {TuiDialogModule, TuiLoaderModule, TuiRootModule, TuiSvgModule} from '@taiga-ui/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
  ],

  exports: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    TuiAppBarModule,
    TuiProgressModule,
    RouterModule,
    TuiSvgModule,
    TuiLoaderModule,
    CommonModule,
    TuiRootModule,
    TuiDialogModule
  ],
})
export class SharedModuleModule { }
