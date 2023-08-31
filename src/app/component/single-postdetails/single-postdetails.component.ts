import { Component, OnInit } from '@angular/core';
import { CommentPayload } from 'src/app/model/comment-payload';
import { PostService } from 'src/app/service/post.service';
import { CommentService } from 'src/app/service/comment.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-single-postdetails',
  templateUrl: './single-postdetails.component.html',
  styleUrls: ['./single-postdetails.component.css']
})
export class SinglePostdetailsComponent implements OnInit {


  public posts: any = [];
  public comments: any = [];
  public comment: CommentPayload = new CommentPayload();
  public myName: string | null = null;


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

  deletePost() {

    console.log(this.postId);
    this.postService.deletePost(this.postId).subscribe((data: any) => {
      this.posts = data;
      Swal.fire('Deleted !!!', 'You have successfully deleted the post', 'success');
      this.router.navigateByUrl('/viewPost');

    }, error => {
      Swal.fire('Error', 'Delete Failed', 'error');
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
      }, 3000);
    }, error => {
      Swal.fire('Error', 'Comment Failed', 'error');
    })
  }
}

