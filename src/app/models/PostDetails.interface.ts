import { PostInterface } from "./Post.interface";

export interface PostDetailsInterface extends PostInterface{
  username: string;
  email:string;
}
