import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, mergeMap } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { selectUserId } from 'src/app/states/login_state/selectors';
import { AppLoginState } from 'src/app/states/login_state/state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{

  data$? : Observable<any>

  user$ = this.store.select(selectUserId).pipe(
    filter(id => !(!id)),
    mergeMap(id => this.userService.getUser(id!))
  )

  constructor(
    private postService : PostService,
    private store : Store<AppLoginState>,
    private userService : UserService
    ) {

  }

  getNextPageOfPosts(){
    
  }

}
