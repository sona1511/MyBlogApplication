import { User } from './User';

export class PostPayload{
  postId!: number;
  title!: String ;
  content!: String;
  category!: String;
  addedDate!: Date;
  imageName!: String;
  user!: User;
}
