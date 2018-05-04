import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { QuestionService } from "../questionservice.service";
import { Router } from "@angular/router";
import { RegDialogComponent } from "../reg-dialog/reg-dialog.component";
import { empty } from "rxjs/Observer";
import { MultiplayerPopupComponent } from "../multiplayer-popup/multiplayer-popup.component";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private questionService: QuestionService
  ) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(RegDialogComponent, {
      width: "600px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  openMultiDialog(): void {
    let dialogRef = this.dialog.open(MultiplayerPopupComponent, {
      width: "600px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  //This is to check if correcr data is coming or not
  //Not required in last code

  //This is your add method make a service and call it.
  //Hero is the domain class you're modelling , cast your data into that class so it can be sent as an object

  // add(name: string, id: number, image: string, location: string) {
  //   name = name.trim();

  //   this.questionService
  //     .addHero({ id, name, image, location } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //       this.ngOnInit();
  //     });
  // }

  ngOnInit() {}

  // Dummy data
  categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5"
  ];

  topics = ["Topic 1", "Topic 2", "Topic 3", "Topic 4"];
}
