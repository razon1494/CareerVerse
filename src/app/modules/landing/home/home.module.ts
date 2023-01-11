import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { HeaderComponent } from './header/header.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ChooseComponent } from './choose/choose.component';
import { CareerComponent } from './career/career.component';

@NgModule({
    declarations: [
        LandingHomeComponent,
        NavbarComponent,
        FooterComponent,
        SelectUserComponent,
        HeaderComponent,
        CreateAccountComponent,
        ChooseComponent,
        CareerComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ]
})
export class LandingHomeModule
{
}
