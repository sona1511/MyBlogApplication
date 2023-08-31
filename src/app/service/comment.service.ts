import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from '../model/comment-payload';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  addComment(comment: CommentPayload, userId: number, postId: number): Observable<any> {
    return this.httpClient.post("http://localhost:8022/api/v1/createComment/"+userId +"/" +postId, comment).pipe(map
    ((data) => {
      console.log(data)

  } ));

}

getAllComments()
{
  return this.httpClient.get("http://localhost:8022/api/v1/getAllComments");

}
}
