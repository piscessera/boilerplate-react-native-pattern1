import React from 'react';
import { Scene, Router, Actions, Stack, ActionConst, Drawer } from 'react-native-router-flux';
import SampleScreen from './screens/sample-screen/SampleScreen';

export default RouterComponent = () => {
  onMenuItemSelected = item => {
  }

  return (
    <Router>
      <Scene key="root" hideNavBar={true}>

        <Scene key="sampleScreen" component={SampleScreen} type={ActionConst.REPLACE}/>

        {/* <Drawer key="drawer" contentComponent={SideMenu}
          headerMode="none"
          drawerWidth={300}
        >
          <Stack key="appStack">
            <Scene key="sampleScreen" component={SampleScreen} type={ActionConst.REPLACE}/>
          </Stack>
        </Drawer> */}

      </Scene>
    </Router>
  );
};
