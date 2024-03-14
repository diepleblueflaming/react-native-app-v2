const Styles = {
  container: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    padding: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',

    thumbnail: {
      width: 100,
      height: 100,
      resizeMode: 'cover'
    },
    info: {
      marginLeft: 8,
      width: '100%',
      flex: 1,
      flexWrap: 'wrap',
      productName: {
        fontSize: 18,
        marginBottom: 2,
        color: 'black',
      },
      brand: {
        color: '#2596be',
        fontWeight: 'bold'
      },
      price:{
        color: '#EA5125',
        fontWeight: 'bold'
      },
      text: {
        width: '100%',
        marginTop: 2
      }
    }
  }
}

export default Styles;
