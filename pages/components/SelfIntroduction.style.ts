import { StyleSheet } from "react-native";

const boxShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  informationArea: {
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    marginHorizontal: 16,
    marginBottom: 24,
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 8,
    paddingBottom: 8,
    ...boxShadow
  },
  informationItem: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  informationItemText: {
    marginLeft: 8,
    fontSize: 14,
    color: 'black'
  },
  informationItemLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#939191',
    paddingBottom: 2
  },
  avatar: {
    borderRadius: 40,
    height: 80,
    width: 80,
    marginLeft: 16,
    position: 'absolute',
    top: -40,
    resizeMode: 'cover'
  },
  name: {
    fontSize: 24,
    marginBottom: 8
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
})

export default Styles;
