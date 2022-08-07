import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/@AppService/models/ipost';
import { PostsService } from 'src/app/@AppService/services/posts.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-postsdetails',
  templateUrl: './postsdetails.component.html',
  styleUrls: ['./postsdetails.component.scss'],
})
export class PostsdetailsComponent implements OnInit {
  id: number = 0;
  post!: IPost;
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private postsService: PostsService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getPost(this.id);
  }

  ngOnInit(): void {}

  getPost(id: number) {
    this.postsService.getPost(id).subscribe((post) => {
      console.log({ post });

      this.post = post;
    });
  }

  back() {
    this.location.back();
  }
}
