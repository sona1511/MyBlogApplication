import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PostPayload } from '../model/post-payload';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient, private localStoraqeService: LocalStorageService) {
  }

  addPost(postPayload: PostPayload, userId: number): Observable<any> {
    return this.httpClient.post("http://localhost:8022/api/v1/createPost/"+userId, postPayload).pipe(map
    ((data) => {
      console.log(data)
      sessionStorage.setItem("postId", JSON.stringify(data));

  } ));

 
}
  
  getAllPosts(){
    return this.httpClient.get("http://localhost:8022/api/v1/getAllPost");

  }

  getPostById(userId: number){
    return this.httpClient.get("http://localhost:8022/api/v1/getPost/" +userId);
  }

  getPostByPostId(postId: number){
    return this.httpClient.get("http://localhost:8022/api/v1/getPostById/" +postId);
  }

  deletePost(postId: number)
  {
    return this.httpClient.delete("http://localhost:8022/api/v1/deletePostById/" +postId);

  }

  uploadImage(formData: any)
  {
    return this.httpClient.post("http://localhost:8022/api/v1/post/image/upload/", formData);
  }

}
