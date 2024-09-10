import { Image, StyleSheet, Platform, View, Text, FlatList } from 'react-native';
import products from '@/assets/data/products';
import  ProductListItem  from '@/components/ProductListItem';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Product } from '@/models/product.model';

export default function MenuScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        // keyExtractor={(item) => item.id.toLocaleString()}
        numColumns={2}
        contentContainerStyle={{ gap: 5, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
