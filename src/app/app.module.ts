import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { QuestionService} from "./questionservice.service"
import { AppRoutingModule, routingComponents } from "./app-routing.module";

import { RegDialogComponent } from "./reg-dialog/reg-dialog.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatExpansionModule } from "@angular/material/expansion";
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MultiplayerPopupComponent } from './multiplayer-popup/multiplayer-popup.component';
import { SideNavMenuModule } from './side-nav-menu/module';
import { MatSidenavModule} from "@angular/material";
import { FooterComponent } from "./footer/footer.component";




@NgModule({
  declarations: [AppComponent, routingComponents, RegDialogComponent, MultiplayerPopupComponent,FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    SideNavMenuModule,
    MatSidenavModule
  ],
  entryComponents: [RegDialogComponent,MultiplayerPopupComponent],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
