import { Component } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {

  public posts: any = [];
  public post: any = [];
  postId!: number;

  constructor(private postService: PostService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {

    let userId = sessionStorage.getItem('userId');
    console.log(userId);
    this.postService.getPostById(Number(userId)).subscribe((data: any) => {
      this.post = data;
      console.log(this.post);
      for (let posts of this.post) {
        posts.imageName = posts.imageName.substring(12);
        console.log(posts.imageName);
      }

    });

  }

  deletePost(postId: any) {

    console.log(postId);
    Swal.fire({

      title: 'Are you sure you want to delete this post?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',

    }).then((result) => {
      if (result.value) {

        this.postService.deletePost(postId).subscribe((data: any) => {

        })
        Swal.fire('Removed!', 'You have successfully deleted the post', 'success');
        this.route.navigateByUrl('/viewPost');
        setTimeout(function () {
          window.location.reload();
        }, 2000);

      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }

    });
  }
}
