import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseComponent } from "./views/base/base.component";
import { BroadcastComponent } from "./views/broadcast/broadcast.component";
import { CoursesComponent } from "./views/courses/courses.component";
import { DoctorProfileComponent } from "./views/doctor-profile/doctor-profile.component";
import { StoreComponent } from "./views/store/store.component";

const routes: Routes = [
  {
    path: "",
    component: BaseComponent,
    children: [
      { path: "", redirectTo: "doctorProfile", pathMatch: "full" },
      { path: "doctorProfile", component: DoctorProfileComponent },
      { path: "store", component: StoreComponent },
      { path: "broadcast", component: BroadcastComponent },
      { path: "courses", component: CoursesComponent },
    ],
  },
  { path: "**", redirectTo: "doctorProfile", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
