import React from "react";
import { Body, Container, Header, Tab, Tabs, Title } from "native-base";
import TabOne from "./Tabs/TapOne";
import TabTwo from "./Tabs/TabTwo";
import TabThree from "./Tabs/TabThree";
export default function TabScreen() {
  return (
    <Container>
      <Header />
      <Body>
        <Title style={{ color: "black" }}>News App</Title>
        <Tabs>
          <Tab heading="Tab1">
            <TabOne />
          </Tab>
          <Tab heading="Tab2">
            <TabTwo />
          </Tab>
          <Tab heading="Tab3">
            <TabThree />
          </Tab>
        </Tabs>
      </Body>
    </Container>
  );
}
