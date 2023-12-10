import { createAction, props } from "@ngrx/store";
import { PostResponse } from "src/app/models/responses/post-response";

export const changeActiveTabAction = createAction( "[Profile Store] changeActiveTab", props<{activeTab : number}>() )
export const nextPageAction = createAction("[Profile Store] nextPageAction")
export const nextPageSuccessAction = createAction("[Profile Store] nextPageSuccessAction",props<{payload : PostResponse[]}>())