import {CompanyInterface} from "./Company.interface";

export interface UserInterface {
  id: number;
  name: string;
  company: CompanyInterface;

}
