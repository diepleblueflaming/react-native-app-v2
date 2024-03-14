import { FC, useState } from "react";
import {SafeAreaView} from "react-native";
import SelfIntroduction from './components/SelfIntroduction';
import InfinitiveScrolling from "./components/infinitive-scrolling/InfinitiveScrolling";
import { Tab, TabView } from '@rneui/themed';
import { PropsTypes } from "./types";

const Home: FC<PropsTypes> = (props) => {
  const [tabIndex, setTabIndex] = useState();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab
        value={tabIndex}
        onChange={(e) => setTabIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        containerStyle={{
          backgroundColor: 'gray'
        }}
        variant="primary"
      >
        <Tab.Item
          title={'User'}
          titleStyle={{ fontSize: 16 }}
        />
        <Tab.Item
          title={'Product List'}
          titleStyle={{ fontSize: 16 }}
        />
      </Tab>

      <TabView value={tabIndex} onChange={setTabIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <SelfIntroduction {...props}/>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <InfinitiveScrolling />
        </TabView.Item>
      </TabView>
    </SafeAreaView>
  );
}

export default Home;
