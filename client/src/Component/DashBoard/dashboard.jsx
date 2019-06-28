import React from "react";
import { Link, Route } from 'react-router-dom';
import { Tab, Sidebar, Icon, Menu, Segment, Header, Image } from "semantic-ui-react";
import MyProduct from "./myProduct";
const panes = [
  { menuItem: "Overview", render: () => <Tab.Pane>Overview Content</Tab.Pane> },
  { menuItem: "My Product", render: () => <MyProduct /> },
  { menuItem: "Selling", render: () => <Tab.Pane>Selling Content</Tab.Pane> }
];

const grid = { paneWidth: 13, tabWidth: 3 };
const DashBoard = (props) => {
  return (
    <Tab
      menu={{
        color: "grey",
        inverted: true,
        fluid: true,
        vertical: false,
        tabular: true
      }}
      // activeIndex={props.match.params.active || 0} 
      panes={panes}
      renderActiveOnly
      grid={grid}
      className="pane"
    />
  );
}


// const DashBoard = (props) => {
//   console.log(props.match.url);
//   return (<React.Fragment>

//     <Route exat path={`${props.match.url}/myproduct`} component={MyProduct} />

//     <Sidebar as={Menu} animation='uncover' direction="left" icon='labeled' inverted vertical visible width='thin'>
//       <Link to="/">
//         <Menu.Item as='a' >
//           <Icon name='home' />
//           Home
//       </Menu.Item>
//       </Link>

//       <Link to={`/${props.match.url}/myproduct`}>
//         <Menu.Item as='a'>
//           <Icon name='gamepad' />
//           My Product
//       </Menu.Item>
//       </Link>


//       <Menu.Item as='a'>
//         <Icon name='camera' />
//         Channels
//       </Menu.Item>
//     </Sidebar>

//     <Sidebar.Pusher>
//       <Segment basic>
//         <Header as='h3'>Application Content</Header>
//         <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//       </Segment>
//     </Sidebar.Pusher>
//   </React.Fragment>)
// }

export default DashBoard;