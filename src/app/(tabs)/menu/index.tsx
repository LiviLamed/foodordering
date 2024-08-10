import { Image, StyleSheet, Platform, View, Text, FlatList } from 'react-native';
import products from '@/assets/data/products';
import { ProducListItem } from '@/components/ProducListItem';

export default function MenuScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProducListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 5, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
