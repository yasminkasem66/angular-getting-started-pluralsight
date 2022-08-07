import { PostslistComponent } from './postslist/postslist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsdetailsComponent } from './postsdetails/postsdetails.component';

const routes: Routes = [{ path: 'index', component: PostslistComponent },
{
  path: ':id',
  component: PostsdetailsComponent
},
{path:"**", redirectTo: "index"},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
