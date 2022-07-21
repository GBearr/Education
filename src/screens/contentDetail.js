import React from 'react';
import ImageData from '../../ImageData';
import {Text, View, FlatList} from 'react-native';

const contentDetail = () => {
  const data = ImageData();

  return (
    <View>
      <FlatList
        data={data.biologyData}
        renderItem={item => <Text>{item.item.shorttitle}</Text>}
      />
    </View>
  );
};

export default contentDetail;
