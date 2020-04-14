import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteNames } from '@models/constants';
import { HomeComponent } from '@components/home/home.component';
import { SummaryComponent } from '@components/summary/summary.component';
import { BookingsComponent } from '@components/bookings/bookings.component';
import { CommunicationComponent } from '@components/communication/communication.component';
import { LoyaltyComponent } from '@components/loyalty/loyalty.component';
import { EditProfileComponent } from '@components/edit-profile/edit-profile.component';
import { MessageComponent } from '@components/message/message.component';
import { SearchComponent } from '@components/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: RouteNames.HOME, pathMatch: 'full' },
  { path: RouteNames.HOME, component: HomeComponent},
  { path: RouteNames.SUMMARY, component: SummaryComponent},
  { path: RouteNames.BOOKINGS, component: BookingsComponent},
  { path: RouteNames.COMMUNICATION, component: CommunicationComponent},
  { path: RouteNames.LOYALTY, component: LoyaltyComponent},
  { path: RouteNames.EDIT_PROFILE, component: EditProfileComponent},
  { path: RouteNames.MESSAGE, component: MessageComponent},
  { path: RouteNames.SEARCH, component: SearchComponent}
  //{ path: '**', redirectTo: RouteNames.404, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
