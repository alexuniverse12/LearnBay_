// navigation
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// react imports
import React, { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
//expo
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// general screens
import MainScreen from './screens/MainScreen';
import HelpScreen from './screens/HelpScreen'
import Firebase from './config/Firebase'
import Tools from './screens/ToolsPage/Tools'
import Favorites from './screens/ToolsPage/Favorites';
import GeneralBookScreen from './screens/GeneralBookScreen'

// globalState
import { useGlobalState } from './globalState/globalState'
// auth 
import {Signup} from './screens/account/Signup'
import {Login} from './screens/account/Login'
// subtopics
import MarketingSubTopicScreen from './screens/Marketing/MarketingSubTopicScreen'
import ManagementSubTopicScreen from './screens/Management/ManagementSubTopicScreen'
import DesignSubTopicScreen from './screens/Designing/DesignSubTopicScreen'
import FinanceSubTopicScreen from './screens/Finance/FinanceSubTopicScreen';
// startup
import StartupTopicScreen from './screens/Startup/StartupTopicScreen';
import LeanStartup from './screens/Startup/books/LeanStartup';
import BlueOceanStrategy from './screens/Startup/books/BlueOceanStrategy';
import Hooked from './screens/Startup/books/Hooked';
import CrossingTheChasm from './screens/Startup/books/CrossingTheChasm';
import Sprint from './screens/Startup/books/Sprint';
import Traction from './screens/Startup/books/Traction';

import StartScreen from './screens/StartScreen';
import AsyncStorage from '@react-native-community/async-storage';
import IntroHelpScreen from './screens/IntroHelpScreen';
// topics screen 
import Uxdesign from './screens/Designing/ManagementTopics/Uxdesign';
import GraphicDesign from './screens/Designing/ManagementTopics/GraphicDesign';
import CopywritingMarketingTopicScreen from './screens/Marketing/MarketingTopics/CopywritingMarketingTopicScreen';
import SoftMarketingTopicScreen from './screens/Marketing/MarketingTopics/SoftMarketingTopicScreen';
import CorporativeManagement from './screens/Management/ManagementTopics/CorpotativeManagement';
import ProductManagement from './screens/Management/ManagementTopics/ProductManagement';
import ProjectManagement from './screens/Management/ManagementTopics/ProjectManagement';
import InvestingTopicScreen from './screens/Finance/FinanceTopics/InvestingTopicScreen';
// marketing books
import ThisIsMarketing from './screens/Marketing/books/ThisIsMarketing';
import TheLanguageOfTrust from './screens/Marketing/books/TheLanguageOfTrust';
import MadeToStick from './screens/Marketing/books/MadeToStick';
import Contagious from './screens/Marketing/books/Contagious';
import EverybodyWrites from './screens/Marketing/books/EverybodyWrites';
import BuildingStoryBrand from './screens/Marketing/books/BuildingStoryBrand';
import TheAdweekCopywritingHandbook from './screens/Marketing/books/TheAdweekCopywritingHandbook';
import PredictablyIrrational from './screens/Marketing/books/PredictablyIrrational';
// management books
import GettingThingsDone from './screens/Management/books/GettingThingsDone';
import Scrum from './screens/Management/books/Scrum';
import Kanban from './screens/Management/books/Kanban';
import SprintManagement from './screens/Management/books/SprintManagement';
import LeanProductionSimplified from './screens/Management/books/LeanProductionSimplified';
import LearningAgile from './screens/Management/books/LearningAgile';
import HookedManagement from './screens/Management/books/HookedManagement';
import CrossingTheChasmManagement from './screens/Management/books/CrossingTheChasmManagement';
import Powerful from './screens/Management/books/Poweful';
import NakedStatistics from './screens/Management/books/NakedStatistics';
import CultureCode from './screens/Management/books/CultureCode';
import MeasureWhatMatters from './screens/Management/books/MeasureWhatMatters';
import Inspired from './screens/Management/books/Inspired';
// design books
import CreatingBrandIdentity from './screens/Designing/books/CreatingBrandIdentity';
import DoNotMakeMeThink from './screens/Designing/books/DoNotMakeMeThink';
import GraphicDesignTheNewBasics from './screens/Designing/books/GraphicDesignTheNewBasics';
import GridSystems from './screens/Designing/books/GridSystems';
import HookedDesign from './screens/Designing/books/HookedDesign';
import LogoDesignLove from './screens/Designing/books/LogoDesignLove';
import LogoModernism from './screens/Designing/books/LogoModernism';
import SprintDesign from './screens/Designing/books/SprintDesign';
import TheDesignOfEverydayThings from './screens/Designing/books/TheDesignOfEverydayThings';
import ThinkingWithType from './screens/Designing/books/ThinkingWithType';
import TypeMatters from './screens/Designing/books/TypeMatters';
import UxForBeginners from './screens/Designing/books/UxForBeginners';





// navigators 
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const ToolsPage = () => {
  return (
    <Stack.Navigator screenOptions={{  headerShown: false}}>
        <Stack.Screen name="Tools" component={Tools} />
    </Stack.Navigator>
  )
} 

const Books = () => {
  return (
   // {/* <Stack.Navigator initialRouteName = {key}  screenOptions={{  headerShown: false}} > */}
    <Stack.Navigator  initialRouteName = {MainScreen}  screenOptions={{  headerShown: false}} >
      <Stack.Screen name = 'MainScreen'  component = {MainScreen} />
      <Stack.Screen name = 'Login'  component = {Login} />
      <Stack.Screen name = 'IntroHelpScreen'  component = {IntroHelpScreen} />
      <Stack.Screen name = 'Signup'  component = {Signup} />
      <Stack.Screen name = 'StartScreen'  component = {StartScreen} />
      <Stack.Screen name = 'HelpScreen'  component = {HelpScreen} />
      <Stack.Screen name = 'Favorites'  component = {Favorites} />
      <Stack.Screen name = 'GeneralBookScreen'  component = {GeneralBookScreen} />
      
      {/* topics */}
      <Stack.Screen name = 'StartupTopicScreen'  component = {StartupTopicScreen} />
      <Stack.Screen name = 'SoftMarketingTopicScreen'  component = {SoftMarketingTopicScreen} />
      <Stack.Screen name = 'CopywritingMarketingTopicScreen'  component = {CopywritingMarketingTopicScreen} />
      <Stack.Screen name = 'CorporativeManagement'  component = {CorporativeManagement} />
      <Stack.Screen name = 'ProductManagement'  component = {ProductManagement} />
      <Stack.Screen name = 'ProjectManagement'  component = {ProjectManagement} />
      <Stack.Screen name = 'Uxdesign'  component = {Uxdesign} />
      <Stack.Screen name = 'GraphicDesign'  component = {GraphicDesign} />
      <Stack.Screen name = 'InvestingTopicScreen'  component = {InvestingTopicScreen} />
      {/* subtopics */}
      <Stack.Screen name = 'ManagementSubTopicScreen'  component = {ManagementSubTopicScreen} />
      <Stack.Screen name = 'DesignSubTopicScreen'  component = {DesignSubTopicScreen} />
      <Stack.Screen name = 'MarketingSubTopicScreen'  component = {MarketingSubTopicScreen} />
      <Stack.Screen name = 'FinanceSubTopicScreen'  component = {FinanceSubTopicScreen} />
      {/* books */}
      <Stack.Screen name = 'LeanStartup'  component = {LeanStartup} />
      <Stack.Screen name = 'Hooked'  component = {Hooked} />
      <Stack.Screen name = 'CrossingTheChasm'  component = {CrossingTheChasm} />
      <Stack.Screen name = 'Sprint'  component = {Sprint} />
      <Stack.Screen name = 'Traction'  component = {Traction} />
      <Stack.Screen name = 'BlueOceanStrategy'  component = {BlueOceanStrategy} />
          {/* marketing books */}
      <Stack.Screen name = 'ThisIsMarketing'  component = {ThisIsMarketing} />
      <Stack.Screen name = 'TheLanguageOfTrust'  component = {TheLanguageOfTrust} />
      <Stack.Screen name = 'MadeToStick'  component = {MadeToStick} />
      <Stack.Screen name = 'Contagious'  component = {Contagious} />
      <Stack.Screen name = 'PredictablyIrrational'  component = {PredictablyIrrational} />
      <Stack.Screen name = 'TheAdweekCopywritingHandbook'  component = {TheAdweekCopywritingHandbook} />
      <Stack.Screen name = 'BuildingStoryBrand'  component = {BuildingStoryBrand} />
      <Stack.Screen name = 'EverybodyWrites'  component = {EverybodyWrites} />
          {/* management books */}
      <Stack.Screen name = 'LearningAgile'  component = {LearningAgile} />
      <Stack.Screen name = 'GettingThingsDone'  component = {GettingThingsDone} />
      <Stack.Screen name = 'Scrum'  component = {Scrum} />
      <Stack.Screen name = 'Kanban'  component = {Kanban} />
      <Stack.Screen name = 'SprintManagement'  component = {SprintManagement} />
      <Stack.Screen name = 'LeanProductionSimplified'  component = {LeanProductionSimplified} />
      <Stack.Screen name = 'HookedManagement'  component = {HookedManagement} />
      <Stack.Screen name = 'CrossingTheChasmManagement'  component = {CrossingTheChasmManagement} />
      <Stack.Screen name = 'Powerful'  component = {Powerful} />
      <Stack.Screen name = 'NakedStatistics'  component = {NakedStatistics} />
      <Stack.Screen name = 'CultureCode'  component = {CultureCode} />
      <Stack.Screen name = 'Inspired'  component = {Inspired} />
      <Stack.Screen name = 'MeasureWhatMatters'  component = {MeasureWhatMatters} />
          {/* design books */}
      <Stack.Screen name = 'CreatingBrandIdentity'  component = {CreatingBrandIdentity} />
      <Stack.Screen name = 'DoNotMakeMeThink'  component = {DoNotMakeMeThink} />
      <Stack.Screen name = 'GraphicDesignTheNewBasics'  component = {GraphicDesignTheNewBasics} />
      <Stack.Screen name = 'GridSystems'  component = {GridSystems} />
      <Stack.Screen name = 'LogoDesignLove'  component = {LogoDesignLove} />
      <Stack.Screen name = 'HookedDesign'  component = {HookedDesign} />
      <Stack.Screen name = 'LogoModernism'  component = {LogoModernism} />
      <Stack.Screen name = 'SprintDesign'  component = {SprintDesign} />
      <Stack.Screen name = 'TheDesignOfEverydayThings'  component = {TheDesignOfEverydayThings} />
      <Stack.Screen name = 'ThinkingWithType'  component = {ThinkingWithType} />
      <Stack.Screen name = 'TypeMatters'  component = {TypeMatters} />
      <Stack.Screen name = 'UxForBeginners'  component = {UxForBeginners} />
   </Stack.Navigator>
  )
} 

// getting fonts
const getFonts = () => Font.loadAsync({
  'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  
})


export default function App() {
  const [fontsLoaded,setFontsLoaded] = useState(false)
  const [initializing, setInitializing] = useGlobalState('init');
  const [user, setUser] = useGlobalState('userState');

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

// for login and sign up
  if (!user && fontsLoaded) {
    return (
      <NavigationContainer>
          <Stack.Navigator  initialRouteName = {Signup}  screenOptions={{  headerShown: false}} >
              <Stack.Screen name = 'Signup'  component = {Signup} />
              <Stack.Screen name = 'Login'  component = {Login} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }

// if signed in 
  if(fontsLoaded) {
    return (
      <NavigationContainer>
          <Tab.Navigator 
            tabBarOptions={{
              activeTintColor: '#C4F2F2',
              inactiveTintColor:'#f2f2f2',
              inactiveBackgroundColor: '#0E1B26',
              activeBackgroundColor: '#0E1B26',
            }}>
            <Tab.Screen 
            name="Books"
            component={Books}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="library-books" size={28} color={color}  />
              ),
              tabBarLabel: 'Books',
              tabBarLabel:() => {return null},
            }}
             />
            <Tab.Screen 
            name="Tools" 
            component={ToolsPage}

            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="tools" size={28} color={color} />
              ),
              tabBarLabel: 'Tools',
              tabBarLabel:() => {return null},

            }}
            />
          </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync = {getFonts}
        onFinish ={ () => setFontsLoaded(true) }
       />
    )
  }


 
}
