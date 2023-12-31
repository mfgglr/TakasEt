import { AfterContentInit, Component, ElementRef, Input, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, filter, fromEvent, mergeMap } from 'rxjs';
import { PostResponse } from 'src/app/models/responses/post-response';
import { PostService } from 'src/app/services/post.service';
import { PostPostRequestingService } from 'src/app/services/post-post-requesting.service';

@Component({
  selector: 'app-swap-request',
  templateUrl: './swap-request.component.html',
  styleUrls: ['./swap-request.component.scss']
})
export class SwapRequestComponent implements OnChanges,OnDestroy,AfterContentInit{

  @Input() requestedId : number | null | undefined = null;
  @ViewChild("requestingButton",{static: true}) swapRequestButton? : ElementRef;
  @ViewChild("closeButton",{static: true}) closeButton? : ElementRef;

  data? : {x : PostResponse,y : string}[];
  dataSubscription? : Subscription;
  swapRequestButtonSubscription? : Subscription;
  private requesterIds : number[] = [];
  constructor(
    private postService : PostService,
    private requestingService : PostPostRequestingService
  ) {}

  selectItems(event : {status : number,index : number}){
    if(this.data){
      let id = this.data[event.index].x.id
      let index = this.requesterIds.findIndex(x => x == id)
      if(index != -1){
        if(!event.status)
          this.requesterIds.splice(index,1);
      }
      else{
        if(event.status)
          this.requesterIds.push(id)
      }
    }
  }

  ngOnChanges() : void{
    if(this.requestedId){
    }
  }

  ngAfterContentInit(): void {
    this.swapRequestButtonSubscription = fromEvent(this.swapRequestButton?.nativeElement,"click").pipe(
      filter(() => this.requestedId != null && this.requestedId != undefined && this.requesterIds.length > 0 ),
      mergeMap(() => this.requestingService.addRequestings(this.requestedId!,this.requesterIds))
    ).subscribe(()=>{
      for(let i = 0; i < this.requesterIds.length;i++){
        let index = this.data?.findIndex(data => data.x.id == this.requesterIds[i])
        if(index != -1 && index != undefined) this.data?.splice(index,1);
      }
      this.closeButton?.nativeElement.click();
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
    this.swapRequestButtonSubscription?.unsubscribe();
  }
}
