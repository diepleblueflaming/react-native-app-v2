import { FC } from 'react';
import {
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  Text
} from 'react-native';
import Styles from "./SelfIntroduction.style";
import { PropsTypes } from "../types";

const SelfIntroduction: FC<PropsTypes> = ({ name, knownfordepartment, deathday, dateofbirth, biography, alsoKnowAs, url, homepage}) => {
  const {width} = useWindowDimensions();

  const informationList = [
    {label: 'Date Of Birth', value: dateofbirth},
    {label: 'Death Day', value: deathday},
    {label: 'Biography', value: biography},
    {label: 'Also Know As', value: Array.isArray(alsoKnowAs) ? alsoKnowAs.join(', ') : alsoKnowAs},
    {label: 'Acting', value: knownfordepartment},
    {label: 'HomePage', value: homepage},
  ]

  return (
    <View style={Styles.container}>
      <ImageBackground source={{uri: url}} style={Styles.image} >
        <View style={{...Styles.informationArea, width: width - 32}}>
          <Image source={{uri: url}} style={Styles.avatar} />
          <Text style={Styles.name}>{name}</Text>
          {
            informationList.map(({label, value}) =>
              <View style={{...Styles.informationItem}} key={label}>
                <Text style={Styles.informationItemLabel}>{label}</Text>
                <Text style={Styles.informationItemText}>{value}</Text>
              </View>
            )
          }
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelfIntroduction;
