import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "/imports/ui/App";
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from "@ionic/react";

Meteor.startup(() => {
  render(<App />, document.getElementById("react-target"));
});
