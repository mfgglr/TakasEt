import { Page } from "../states/app-states";

export class UrlHelper{
  
  static createPaginationQueryString(p : Page) : string{
    if(p.lastId)
      return `skip=${p.skip}&take=${p.take}&lastId=${p.lastId}`
    return  `skip=${p.skip}&take=${p.take}`;
  }
  
}
