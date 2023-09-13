import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { MenuItems } from './menu-items';


@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    MatToolbarModule
   ],
  providers: [MenuItems ]
})
export class SharedModule { }
