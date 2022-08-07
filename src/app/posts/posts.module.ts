import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostslistComponent } from './postslist/postslist.component';
import { AppRoutingModule } from './posts-routing.module';
import { PostsdetailsComponent } from './postsdetails/postsdetails.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PostslistComponent, PostsdetailsComponent],
  imports: [CommonModule, AppRoutingModule, RouterModule],
})
export class PostsModule {}
