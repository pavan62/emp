import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserdPageRoutingModule } from './userd-routing.module';

import { UserdPage } from './userd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserdPageRoutingModule
  ],
  declarations: [UserdPage]
})
export class UserdPageModule {}
