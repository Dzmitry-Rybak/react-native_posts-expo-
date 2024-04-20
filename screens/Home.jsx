import { useState, useEffect } from 'react';
import { Text, View, Alert, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import {Post} from '../components/Post';
import  Loading  from '../components/Loading.jsx';

export const Home = ({navigation}) =>  {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchPosts = () => {
    setIsLoading(true);
    fetch('https://662148d927fcd16fa6c67763.mockapi.io/Posts')
      .then(data => data.json())
      .then(data => {
        setItems(data);
        setIsLoading(false);
      })
      .catch(err => {
        Alert.alert('Error', 'Can not get posts')
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(fetchPosts, []);

  if(isLoading) {
    return <Loading/>
  }

  return (
    <View>
      <Text>My first app</Text>
      <FlatList /* это вместо перебора map, чтоб включить скролл! */
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>} /* обновления содержимого в приложении при перетягивании вниз на экране */
            data={items} /*  данные которые в него приходят и ниже перебераем эти данные */
            // horizontal={true} - для горизонтальной пропркутки
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
                <Post title={item.title} imageURL={item.imageURL} createdAt={item.createdAt}/>
              </TouchableOpacity>
            )}
        />
    </View>
  );
}