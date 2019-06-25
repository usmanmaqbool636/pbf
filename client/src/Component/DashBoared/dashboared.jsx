import React from "react";
import { Tab } from "semantic-ui-react";
import MyProduct from "./myProduct";
const panes = [
  { menuItem: "Overview", render: () => <Tab.Pane>Overview Content</Tab.Pane> },
  { menuItem: "My Product", render: () => <MyProduct /> },
  { menuItem: "Selling", render: () => <Tab.Pane>Selling Content</Tab.Pane> }
];

const grid = { paneWidth: 13, tabWidth: 3 };
const DashBoared = () => (
  <Tab
    menu={{
      color: "grey",
      inverted: true,
      fluid: true,
      vertical: true,
      tabular: true
    }}
    panes={panes}
    renderActiveOnly
    grid={grid}
    className="pane"
  />
);

export default DashBoared;