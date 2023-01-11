import { Route } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { SelectUserComponent } from 'app/modules/landing/home/select-user/select-user.component';
import { CreateAccountComponent } from 'app/modules/landing/home/create-account/create-account.component';
import { ChooseComponent } from 'app/modules/landing/home/choose/choose.component';
import { CareerComponent } from 'app/modules/landing/home/career/career.component';

export const landingHomeRoutes: Route[] = [
    {
        path: '',
        component: LandingHomeComponent,
    },
    {
        path: 'selectuser',
        component: SelectUserComponent,
    },
    {
        path: 'createaccount',
        component: CreateAccountComponent,
    },
    {
        path: 'choose',
        component: ChooseComponent,
    },
    {
        path: 'career',
        component: CareerComponent,
    },
];
