import { Image, StyleSheet, Platform, View, Text, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import products from '@/assets/data/products';
import { Product } from '@/models/product.model';
import {Href, Link, useSegments} from 'expo-router';

interface ProductListItemProps {
  product: Product;
}

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

export const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments()
  const href: Href<string> = (segments[0] ? `${segments[0]}/menu/${product.id}` : `/menu/${product.id}`) as Href<string>;

  console.log(segments)

  return (
    <Link href={href} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
    height: 250,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  seperator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    margin: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
});

export default ProductListItem