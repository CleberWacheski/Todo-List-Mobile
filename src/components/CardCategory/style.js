import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

import {FontAwesome} from '@expo/vector-icons'


export const Container = styled.View`
  width: 100%;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 0.5px;

`
export const SelectButton = styled.TouchableOpacity`
  
  width: 90%;

  padding: 20px 0;
`

export const Text = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme})=>theme.fonts.medium};

`
export const RemoveCategoryButton = styled.TouchableOpacity`
 padding: 20px 0;

 width: 10%;
  
`
export const IconRemove = styled(FontAwesome)`

`