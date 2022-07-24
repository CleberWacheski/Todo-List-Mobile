import styled from 'styled-components/native'

export const Container = styled.View`
  flex:1;
  

`;
export const Content = styled.View`
  

`
export const BoxOthersOptions = styled.View`


`
export const Button = styled.TouchableOpacity`
    align-self: center;

    margin-top: 20px;
    padding: 10px 12px;
    
    border-radius: 5px;

    background-color: ${({theme})=> theme.colors.primary};


`
export const Text = styled.Text`

    color: ${({theme})=> theme.colors.text_primary};
    font-family: ${({theme})=> theme.fonts.bold};

`