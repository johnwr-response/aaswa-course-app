import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from "@angular/material/snack-bar";
// noinspection ES6PreferShortImport
import { NotificationComponent } from './components/notification/notification.component';
// noinspection ES6PreferShortImport
import {NotificationService} from "./notification.service";



@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ]
})
export class NotificationModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: NotificationModule,
      providers: [
        NotificationService
      ]
    }
  }
}
