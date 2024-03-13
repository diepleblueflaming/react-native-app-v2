import { FC } from "react";
import {SafeAreaView} from "react-native";
import SelfIntroduction from './components/SelfIntroduction';
import { PropsTypes } from "./types";

const Home: FC<PropsTypes> = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SelfIntroduction {...props}/>
    </SafeAreaView>
  );
}

export default Home;
