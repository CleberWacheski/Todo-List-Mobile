import styled,{css} from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

import { MaterialIcons } from '@expo/vector-icons';


export const Container = styled.View`
  flex:1;

  background-color: ${({theme})=>theme.colors.background};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme})=>theme.colors.text_primary};
  
  width: 200px;
  height: 56px;

  border-radius: 5px;

  justify-content: center;
  align-items: center;
 
`
export const TextButton = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  font-size: ${RFValue(14)}px;

  color:${({theme})=> theme.colors.primary};
`
export const BoxButtonsSelectedTasks = styled.View`
  justify-content: space-between;
  flex-direction: row;

  padding: 15px 9px;


`
  export const ButtonViewTask = styled.TouchableOpacity`
    background-color: ${({theme})=>theme.colors.primary} ;

    padding: 10px;

    border-radius: 3px;

    
  `
  export const TextTask = styled.Text`
    font-family: ${({theme})=> theme.fonts.bold};

    color:${({theme})=> theme.colors.text_primary};
  `

export const BoxTasks = styled.FlatList`
  margin-top: 2px;
`
export const ButtonViewCategory = styled.TouchableOpacity`

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({theme})=> theme.colors.details};

  ${({StyledView,theme})=> StyledView && css`
    border-bottom-width:2px;
    border-color: ${theme.colors.primary};
  ` }

`
export const Icon = styled(MaterialIcons)`
  margin-right: 20px ;

  ${({rotate})=> rotate && css`
    transform: rotateZ(180deg);
  `}

`
export const TitleCategory = styled.Text`
  font-family: ${({theme})=> theme.fonts.medium};

  padding: 14px 24px;

`