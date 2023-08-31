import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from 'src/app/model/post-payload';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';
import { CommentPayload } from 'src/app/model/comment-payload';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: any = [];
  public post: PostPayload = new PostPayload();
  imageNm: any;
  error!: String;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe((data: any) => {
      this.posts = data;
      for (let post of this.posts) {
        post.imageName = post.imageName.substring(12);
        console.log(post.imageName);
      }      
    })
  }
}
