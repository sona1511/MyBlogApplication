import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/service/comment.service';
import { PostPayload } from 'src/app/model/post-payload';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent  implements OnInit{

  public comments: any = [];
  public post: PostPayload = new PostPayload();

  constructor( private commentService: CommentService) { }

  ngOnInit() 
  {
    this.commentService.getAllComments().subscribe((data : any)=>{
      this.comments = data;
      console.log(this.comments);
    })  
  
  }

}