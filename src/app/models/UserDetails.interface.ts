import { UserInterface } from "./User.Interface";

export interface UserDetailsInterface extends UserInterface{
  username: string;
  email:string;
}
