import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    StarComponent,
  ]
})
export class SharedModule { }
