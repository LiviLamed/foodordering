import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import products from '@/assets/data/products';
import { ProducListItem } from '@/components/ProducListItem';

export default function MenuScreen() {
  return (
    <View>
      <ProducListItem product={products[0]} />
      <ProducListItem product={products[1]} />
    </View>
  );
}
