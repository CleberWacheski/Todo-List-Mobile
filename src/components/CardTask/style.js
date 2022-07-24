import styled,{css} from 'styled-components/native'

import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({theme})=>theme.colors.text_primary};

  border-width: 0.25px;
  border-color: ${({theme})=>theme.colors.text_secondary};


`
export const ContentTask = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  padding-top: 10px;
  
`
export const CheckBoxButton = styled.TouchableOpacity`
  padding: 0 15px 0 24px;



`
export const CheckBoxIcon = styled(Fontisto)``
export const TextTask = styled.Text`

  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=>theme.fonts.regular};

  color: ${({theme,done})=> done ? theme.colors.success : theme.colors.text_secondary};

  text-decoration:${({done})=> done ? 'line-through' : 'none'};

  
`
export const Content = styled.View`
  padding-bottom: 5px;
`
export const RemoveButton = styled.TouchableOpacity`
  padding: 0 24px;
`
export const RemoveIcon = styled(FontAwesome)`
`


export const DateText = styled.Text`
  font-size: ${RFValue(9)}px;
  font-family: ${({theme})=> theme.fonts.bold};

  margin-left: 24px;

  ${({alertDate,theme})=> (alertDate === 'Hoje') && css`
      color: ${theme.colors.alert};
  `}

  ${({alertDate,theme})=> (alertDate === 'Amanhã') && css`
      color: ${theme.colors.success};
  `}

  ${({alertDate,theme})=> (alertDate != 'Amanhã' && alertDate != 'Hoje') && css`
      color: ${theme.colors.primary};
  `}
`