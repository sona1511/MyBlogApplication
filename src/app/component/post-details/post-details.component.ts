import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';
import { CommentPayload } from 'src/app/model/comment-payload';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  public posts: any = [];
  public comments: any = [];
  public comment: CommentPayload = new CommentPayload();
  public myName: string | null = null;

  public count = 0;


  constructor(private postService: PostService, private commentService: CommentService, private router: Router, private router1: ActivatedRoute) { }
  postId!: number;

  ngOnInit() {

    this.router1.params.subscribe(params => {

      this.postId = params['postId'];

    });

    console.log(this.postId);
    this.postService.getPostByPostId(this.postId).subscribe((data: any) => {
      this.posts = data;
      this.posts.imageName = this.posts.imageName.substring(12);
      console.log(this.posts);
      console.log(this.posts.comments);


    })

  }

  addComment() {

    console.log(this.postId);
    let userId = sessionStorage.getItem("userId");
    this.router1.params.subscribe(params => {

      this.postId = params['postId'];

    });
    this.commentService.addComment(this.comment, Number(userId), this.postId).subscribe(data => {
      Swal.fire('Comment Added !!!', 'You have successfully added the comment', 'success');
      console.log("comment");
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }, error => {
      Swal.fire('Error', 'Comment Failed', 'error');
    })
  }

  counter() {

    
    this.count++;
  }
}

