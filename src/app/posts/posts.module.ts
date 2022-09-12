import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostslistComponent } from './postslist/postslist.component';
import { AppRoutingModule } from './posts-routing.module';
import { PostsdetailsComponent } from './postsdetails/postsdetails.component';
import { RouterModule } from '@angular/router';
import { AuthordeailsComponent } from './authordeails/authordeails.component';



@NgModule({
  declarations: [PostslistComponent, PostsdetailsComponent, AuthordeailsComponent],
  imports: [CommonModule, AppRoutingModule, RouterModule],
})
export class PostsModule {}
