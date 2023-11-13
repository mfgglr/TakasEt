import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CommentService } from "src/app/services/comment.service";
import { nextPageOfChildren, nextPageOfChildrenSuccess, nextPageOfComments, nextPageOfCommentsSuccess, resetCommentToReplyAction, shareComment, shareCommentSuccess } from "./action";
import { filter, first, mergeMap, of } from "rxjs";
import { Store } from "@ngrx/store";
import { CommentModalStateCollection } from "./state";
import { selectCommentToReplyState, selectStatusAndPage, selectStatusAndPageOfChildren } from "./selector";
import { AppLoginState } from "../login_state/state";
import { selectUserId } from "../login_state/selectors";
import { AddComment } from "src/app/models/requests/add-comment";


@Injectable()
export class CommentModalCollectionEffect{
    constructor(
        private actions : Actions,
        private commentService : CommentService,
        private commentModalState : Store<CommentModalStateCollection>,
        private loginStore : Store<AppLoginState>
    ) {}

    shareComment$ = createEffect(() => {
        return this.actions.pipe(
            ofType(shareComment),
            mergeMap(action => this.loginStore.select(selectUserId).pipe(
                first(),
                mergeMap(userId => this.commentModalState.select(selectCommentToReplyState({postId : action.postId})).pipe(
                    first(),
                    mergeMap((state) => {
                        let request : AddComment = {content : action.content,userId : userId!} 
                        if(state.ownerType == "post") request.postId = state.ownerId;
                        else request.parentId = state.ownerId;
                        return this.commentService.addComment(request).pipe(
                            mergeMap(
                                response => of(
                                    shareCommentSuccess({postId : action.postId,response : response}),
                                    resetCommentToReplyAction({postId : action.postId})
                                )
                            )
                        )
                    })
                ))
            )),
        )
    })

    nextPageOfComments$ = createEffect(() =>{
        return this.actions.pipe(
            ofType(nextPageOfComments),
            mergeMap(action => this.commentModalState.select(selectStatusAndPage({postId : action.postId})).pipe(
                first(),
                filter(x => !x.status),
                mergeMap(x => this.commentService.getCommnetsByPostId(action.postId,x.page)),
                mergeMap(response => of(nextPageOfCommentsSuccess({postId : action.postId, payload : response})))
            ))
        )
    })

    nextPageOfChildren = createEffect(() =>{
        return this.actions.pipe(
            ofType(nextPageOfChildren),
            mergeMap(
                action => this.commentModalState.select(
                    selectStatusAndPageOfChildren({postId : action.postId,commentId : action.commentId})
                ).pipe(
                    first(),
                    filter(x => !x.status),
                    mergeMap(x => this.commentService.getChildren(action.commentId,x.page)),
                    mergeMap(response => of(nextPageOfChildrenSuccess({
                        postId : action.postId,commentId : action.commentId,payload : response
                    })))
                )
            )
        )
    })
}