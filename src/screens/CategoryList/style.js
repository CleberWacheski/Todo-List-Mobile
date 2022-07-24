import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'


export const Container = styled.View`
    flex:1;
`;
export const Content = styled.View`
    margin-top: 30px;
    align-items: center;
    padding-bottom: 35px;

`
export const Input = styled.TextInput`
  width: 70%;
  height: 50px;

  padding: 0 20px;

  border-radius: 5px;
  background-color: ${({theme})=>theme.colors.text_primary};
  
  font-family: ${({theme})=>theme.fonts.medium};
  font-size: ${RFValue(15)}px;


`
export const AlertText = styled.Text`

color: ${({theme})=> theme.colors.alert};

font-family: ${({theme})=> theme.fonts.medium};
font-size: ${RFValue(10)}px;

padding: 10px;


`
export const ButtonAddCategory = styled.TouchableOpacity`

  background-color: ${({theme})=>theme.colors.primary};

  padding: 10px 15px;

  border-radius: 5px;

 
`
export const TextButton = styled.Text`
 font-family: ${({theme})=>theme.fonts.medium};
 font-size: ${RFValue(13)}px;

 color: white;
`
export const CategoryListView = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 20px;

`