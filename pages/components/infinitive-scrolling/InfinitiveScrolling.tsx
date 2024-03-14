import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Text,
  Image,
  useWindowDimensions
} from "react-native";
import Styles from "./InfinitiveScrolling.style";

const callApi = async (data: { skip: number; limit: number }) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?skip=${data.skip}&limit=${data.limit}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const Flatlist = () => {
  const {width} = useWindowDimensions();

  const limit = 10;
  const [data, setData] = useState([]);

  const [UI, setUI] = useState(false);

  const isStop = useRef<boolean>(false);

  const isLoading = useRef<boolean>(false);


  useEffect(() => {
    getData("refresh");
  }, []);

  const getData = async (type: "refresh" | "loadMore") => {
    if (isLoading.current === true){
      return;
    }

    if (type === "loadMore" && isStop.current === true) {
      return;
    }

    if (type === "refresh") {
      setData([]);
      isStop.current = false;
    }

    try {
      setUI(true);
      isLoading.current = true;
      //call api
      const response = await callApi({
        skip: type == "loadMore" ? data.length : 0,
        limit: limit,
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      isLoading.current = false;
      if (response.products.length < limit) {
        isStop.current = true;
      }
      if (type == "refresh") {
        setData(response?.products);
      }
      if (type == "loadMore") {
        setData(data.concat(response?.products));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUI(false);
    }
  };

  const renderFooterList = useMemo(() => {
    if (UI) {
      return <View style={{paddingVertical: 8}} >
        <ActivityIndicator color={"red"} size={'large'}/>
      </View>;
    }

    if (data.length == 0 && isStop.current) {
      return <Text>Empty List</Text>;
    }

    if (isStop.current) {
      return <Text>All products have been downloaded</Text>;
    }
    return <View />;
  }, [UI]);

  const renderItem = ({item: { title, description, brand, price, thumbnail }}: {item: {title: string, description: string, price: number, brand: string, thumbnail: string}}) => {
    return (
      <View style={{...Styles.item, width: width - 16}}>
        <Image source={{uri: thumbnail}} style={Styles.item.thumbnail}/>
        <View style={{...Styles.item.info}}>
          <Text style={{...Styles.item.info.text, ...Styles.item.info.productName}}>{title}</Text>
          <Text style={{...Styles.item.info.text, ...Styles.item.info.brand}}>{brand}</Text>
          <Text style={{...Styles.item.info.text, ...Styles.item.info.price}}>${price}</Text>
          <Text style={Styles.item.info.text}>{description}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, idx) => idx + ""}
        renderItem={renderItem}
        onEndReachedThreshold={0.3}
        onEndReached={() => getData("loadMore")}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => getData("refresh")}
          />
        }
        ListFooterComponent={
          <View style={{ alignItems: "center", marginVertical: 10 }}>
            {renderFooterList}
          </View>
        }
      />
    </View>
  );
};

export default Flatlist;

