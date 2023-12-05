import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractPostComponent } from './abstract-post/abstract-post.component';
import { AbstractPostListComponent } from './abstract-post-list/abstract-post-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AbstractPostComponent,
    AbstractPostListComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    AbstractPostListComponent
  ]
})
export class AbstractPostListModule { }
