import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// Material
import { MaterialModule } from "../app/core/material/material.module";
import { HomeSidebarComponent } from "./views/home-sidebar/home-sidebar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BaseComponent } from "./views/base/base.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DoctorProfileComponent } from "./views/doctor-profile/doctor-profile.component";
import { StoreComponent } from './views/store/store.component';
import { BroadcastComponent } from './views/broadcast/broadcast.component';
import { CoursesComponent } from './views/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSidebarComponent,
    BaseComponent,
    DoctorProfileComponent,
    StoreComponent,
    BroadcastComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
