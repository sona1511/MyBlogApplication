import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';
import { PostPayload } from 'src/app/model/post-payload';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  postPayload: PostPayload = new PostPayload();
  imgSrc: any;
  image: any;
  selectedFile! : File;


  constructor(private postService: PostService, private router: Router, private authService: AuthService) {

  }
  addPost() {
    const formData = new FormData();

    formData.append('file', this.selectedFile);
    this.postService.uploadImage(formData).subscribe((data) => 
    {
      console.log(data)
    })
    console.log(this.postPayload.title);
    let userId = sessionStorage.getItem("userId");
    this.postService.addPost(this.postPayload, Number(userId)).subscribe(data => {
      Swal.fire('Post Done !!!', 'You have successfully created the post', 'success');
      setTimeout(function () {
        window.location.reload();
      }, 2000);
      //window.location.reload();

    }, error => {
      Swal.fire('Error', 'Post Failed', 'error');
    })
  }


  showPreview(event: any) {
    console.log( event.target.files[0].name);
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target ?.result;
      // this.selectedImg = e.target?.result;

    }
    this.selectedFile = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);

  }

  onChange(event: any) {

    if (event.target.files) {
      this.selectedFile = event.target.files[0];

    }

  }




}
