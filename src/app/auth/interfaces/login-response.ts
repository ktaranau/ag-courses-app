import { UserDTO } from "./user-dto";

export interface LoginResponse {

    successful: boolean;
    errors: string[];
    result: string;
    user: UserDTO

}