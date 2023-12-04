import { createReducer,on } from "@ngrx/store";
import { loadUserSuccess, loginFailedFromLocalStorage, loginSuccess} from "./actions";
import { LoginResponse } from "src/app/models/responses/login-response";
import { UserResponse } from "src/app/models/responses/user-response";

export interface LoginState{
  loginResponse : LoginResponse | undefined;
  userResponse : UserResponse | undefined;
  isLogin : boolean;
}

const initialState : LoginState = {
  isLogin : false,
  loginResponse : undefined,
  userResponse : undefined,
};

export const loginReducer = createReducer(
  initialState,
  on(
    loginSuccess,
    (state,action) => {
      localStorage.setItem('login_response',JSON.stringify(action.payload));
      return {...state,loginResponse : action.payload,isLogin : true }
    }
  ),
  on(
    loginFailedFromLocalStorage,
    (state) => {
      console.log('loginFailedFromLocalStorage');
      return state;
    }
  ),
  on(
    loadUserSuccess,
    (state,action) => ({
      ...state,
      userResponse : action.payload,
    })
  ),
)
