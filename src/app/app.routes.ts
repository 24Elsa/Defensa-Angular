import { Routes } from '@angular/router';

import {BodyComponent} from
'./seg/body/body.component';
import { FooterComponent } from
'./seg/footer/footer.component';
import {MenuComponent} from
'./seg/menu/menu.component';
import { SliderComponent } from
'./seg/slider/slider.component';
export const routes: Routes = [
{
path:'body',
component:BodyComponent
},
{
path:'footer',
component:FooterComponent
},
{
    path:'menu',
    component:MenuComponent
},
{
    path:'slider',
    component:SliderComponent
}
];