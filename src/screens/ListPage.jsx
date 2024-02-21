import { React, useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Animated } from 'react-native';

const ListItem  = ({ navigation, item, progress }) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnimation, {
    //  toValue: progress,
     // duration:  500,
    //  useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = progressAnimation.interpolate({
    inputRange: [0,  100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.listItem}>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <View style={styles.itemContent}>
        <Text>{item.name}</Text>
        <Animated.View style={[styles.progressBar, { width }]} />
      </View>
    </View>
  );
};

const ListPage = () => {
  const data = [
    { name: 'Item  1', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  10 },
    { name: 'Item  2', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  20 },
    { name: 'Item  3', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  30 },
    { name: 'Item  4', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  40 },
    { name: 'Item  5', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  50 },
    { name: 'Item  6', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  60 },
    { name: 'Item  7', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  70 },
    { name: 'Item  8', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  80 },
    { name: 'Item  9', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  90 },
    { name: 'Item  10', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  10 },
    { name: 'Item  11', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  20 },
    { name: 'Item  12', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  30 },
    { name: 'Item  13', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  40 },
    { name: 'Item  14', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  50 },
    { name: 'Item  15', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  60 },
    { name: 'Item  16', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  70 },
    { name: 'Item  17', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  80 },
    { name: 'Item  18', logo: 'https://static.vecteezy.com/system/resources/previews/003/731/316/non_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg', progress:  90 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} progress={item.progress} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:  1,
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:  10,
    borderBottomWidth:  1,
    borderBottomColor: '#000',
  },
  logo: {
    width:  50,
    height:  50,
    marginRight:  10,
  },
  itemContent: {
    flex:  1,
  },
  progressBar: {
    height:  10,
    backgroundColor: 'blue',
    borderRadius:  5,
  },
});

export default ListPage;
