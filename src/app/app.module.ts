import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { CardDetailsComponent } from './components/card/card-details/card-details.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        CardComponent,
        CardDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
