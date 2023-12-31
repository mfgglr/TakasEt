import { BaseResponse } from "./base-response";
import { PostImageResponse } from "./post-image-response";
import { ProfileImageResponse } from "./profile-image-response";

export interface PostResponse extends BaseResponse{
  userName : string;
  userId : number;
  categoryName : string;
  title : string;
  content : string;
  countOfImages : number;
  countOfLikes : number;
  countOfViews : number;
  countOfComments : number;
  postImages : PostImageResponse[];
  profileImage : ProfileImageResponse
}
