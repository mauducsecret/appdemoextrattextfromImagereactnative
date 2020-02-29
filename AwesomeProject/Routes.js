import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import IndexScreen from './screen/IndexScreen.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "index" component = {IndexScreen} title = "App Demo" initial = {true} />
      </Scene>
   </Router>
)
export default Routes