import { useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components";
import  Loading  from '../components/Loading.jsx';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`;


const FullPostScreen = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const {id, title} = route.params;


    const fetchPost = () => {
        setIsLoading(true);
        fetch(`https://662148d927fcd16fa6c67763.mockapi.io/Posts/${id}`)
          .then(data => data.json())
          .then(data => {
            setData(data);
            setIsLoading(false);
          })
          .catch(err => {
            console.error(err);
            Alert.alert('Error', 'Can not get post')
          })
          .finally(() => setIsLoading(false));
      }
    
      useEffect(() => {
        navigation.setOptions({
            title
        })
        fetchPost();
      }, []);

      if(isLoading) {
        return <Loading/>
    }

    return (
        <View style={{padding: 20}}>
            <PostImage source={{uri: data.imageURL}}/>
            <PostText>{data.title}</PostText>
        </View>
    )
}

export default FullPostScreen