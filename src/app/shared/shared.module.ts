import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { StarComponent } from './star/star.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';


@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
