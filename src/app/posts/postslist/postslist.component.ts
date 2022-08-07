import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/@AppService/models/ipost';
import { PostsService } from 'src/app/@AppService/services/posts.service';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.scss'],
})
export class PostslistComponent implements OnInit {
  posts!: IPost[];
  constructor(private postsService: PostsService) {
    this.getPosts();
  }

  ngOnInit(): void {}

  getPosts() {
    this.postsService.getPosts().subscribe({
      next: (res) => {
        this.posts=res;
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }
}
