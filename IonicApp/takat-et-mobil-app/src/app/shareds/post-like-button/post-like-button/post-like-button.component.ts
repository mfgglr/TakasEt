import { Component, Input, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/models/responses/post-response';
import { Store } from '@ngrx/store';
import { commitAction, initStateAction, switchAction } from '../state/actions';
import { Observable } from 'rxjs';
import { selectCountOfLikes, selectLikeStatus } from '../state/selectors';
import { EntityPostLikeState } from '../state/reducer';

@Component({
  selector: 'app-post-like-button',
  templateUrl: './post-like-button.component.html',
  styleUrls: ['./post-like-button.component.scss'],
})
export class PostLikeButtonComponent  implements OnInit {
  
  @Input() post? : PostResponse;
  @Input() iconFontSize? : number;
  @Input() countOfLikesFontSize? : number;
  
  likeStatus$? : Observable<boolean>
  countOfLikes$? : Observable<number>

  constructor(
    private postLikeStore : Store<EntityPostLikeState>
  ) { }

  ngOnInit() {
    if(this.post){
      
      this.postLikeStore.dispatch(initStateAction({
        postId : this.post.id,
        countOfLikes : this.post.countOfLikes,
        likeStatus : this.post.likeStatus,
      }))
      
      this.likeStatus$ = this.postLikeStore.select(selectLikeStatus({
        postId : this.post.id
      }))

      this.countOfLikes$ = this.postLikeStore.select(selectCountOfLikes({
        postId : this.post.id
      }))

    }
  }

  commit(){
    if(this.post){
      this.postLikeStore.dispatch(commitAction({postId : this.post.id}))
    }
  }

  switch(){
    if(this.post){
      this.postLikeStore.dispatch(switchAction({postId : this.post.id}))
    }
  }

}
