import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item/user-item.component';
import { ProfileImageModule } from '../profile-image/profile-image.module';
import { IonicModule } from '@ionic/angular';
import { UserItemListComponent } from './user-item-list/user-item-list.component';
import { UserItemLoadingComponent } from './user-item-loading/user-item-loading.component';
import { NoUserItemsComponent } from './no-user-items/no-user-items.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserItemComponent,
    UserItemListComponent,
    UserItemLoadingComponent,
    NoUserItemsComponent,
  ],
  imports: [
    CommonModule,
    ProfileImageModule,
    IonicModule,
    ButtonsModule,
    PipesModule,
    RouterModule
  ],
  exports : [
    UserItemListComponent
  ]
})
export class FollowingModule { }
