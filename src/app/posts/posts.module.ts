import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostslistComponent } from './postslist/postslist.component';
import { AppRoutingModule } from './posts-routing.module';
import { PostsdetailsComponent } from './postsdetails/postsdetails.component';



@NgModule({
  declarations: [
    PostslistComponent,
    PostsdetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PostsModule { }
