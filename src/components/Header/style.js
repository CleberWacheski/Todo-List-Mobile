import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 150px;

  background-color: ${({theme})=> theme.colors.primary};
`;
export const BoxTitles = styled.View`
    width: 100%;
    margin-top: 65px;
    padding: 0 25px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const AppName = styled.Text`
    font-family: ${({theme})=> theme.fonts.bold};
    font-size: ${RFValue(24)}px;

    color:${({theme})=> theme.colors.text_primary};
  
  
`
export const CounterTasks = styled.Text`
    font-family: ${({theme})=> theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color:${({theme})=> theme.colors.text_primary};
`
export const Tasks = styled.Text`
    font-family: ${({theme})=> theme.fonts.bold};
    


`