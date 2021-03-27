import React from "react";
import Page from "@components/common/page";
import WelcomeScreen from "@screens/welcome/screen";

export default function Welcome() {
  return (
    <Page siteTitle="Welcome">
      <WelcomeScreen />
    </Page>
  );
}
