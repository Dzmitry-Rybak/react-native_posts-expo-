import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text `
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const truncateTitle = (str) => {
  if(str.length >= 50) {
    return str.substring(0, 50) + '...';
  }
  return str;
}


export const Post = ({title, imageURL, createdAt}) => {
    return (
        <PostView>
            <PostImage source={{uri: imageURL}}/>
            <PostDetails>
                <PostTitle>{truncateTitle(title)}</PostTitle>
                {/* Для более досканалого форматирвоания отображения даты используй библиотек date-fns  - там будет метод format */}
                <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
            </PostDetails>
        </PostView>
    )
}