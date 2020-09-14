import React from "react";
import { Body, Container, Header, Tab, Tabs, Title } from "native-base";
import TabOne from "./Tabs/TapOne";
import TabTwo from "./Tabs/TabTwo";
import TabThree from "./Tabs/TabThree";

export default function TabScreen() {
  return (
    <Container>
      <Header>
        <Body>
          <Title style={{ color: "black" }}>News App</Title>
        </Body>
      </Header>
      <Tabs>
        <Tab heading="General ISSUE">
          <TabOne />
        </Tab>

        <Tab heading="Health ISSUE">
          <TabTwo />
        </Tab>
        <Tab heading="E.T ISSUE">
          <TabThree />
        </Tab>
      </Tabs>
    </Container>
  );
}
