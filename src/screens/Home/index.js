import React from 'react'
import { StatusBar } from 'react-native';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

import {
  Container,
} from './style'

export function Home({navigation}){

    React.useEffect(()=> {
      navigation.addListener('beforeRemove',(e)=> {
        e.preventDefault();
      })
    },[])

  return (
    <Container>
      <StatusBar 
      barStyle='light-content' 
      translucent 
      backgroundColor='#4D648D'/>
      
       <Header/>
       <Main/>
    </Container>
  );
}