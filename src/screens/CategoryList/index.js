import React,{useContext,useState} from 'react'
import { FlatList } from 'react-native';

import { CardCategory } from '../../components/CardCategory';
import {Header} from '../../components/Header'

import { Context } from '../../Context/ContextAPI';

import {
  Container,
  Content,
  Input,
  ButtonAddCategory,
  TextButton,
  CategoryListView,
  AlertText,
} from './style'

export function CategoryList({navigation}) {
  const {categoryList,AddNewCategory,textCategory,setTextCategory,setCategorySelected} = useContext(Context)
  const [alert,setAlert] = useState('')

  function HandleAddNewCategory () {
    if (textCategory != ''){
      AddNewCategory()
      setAlert('')
      setTextCategory('')
      setCategorySelected(textCategory)
      navigation.goBack()
    }
    else {
      setAlert('Nome da Categoria Vazio ou Invalido')
    }
  }


  return (
    <Container>
        <Header/>
        <Content>
            <Input
                placeholder='Nome da categoria'
                onChangeText={(e)=> setTextCategory(e)}
            />
            <AlertText>{alert}</AlertText>
            <ButtonAddCategory onPress={HandleAddNewCategory}>
                <TextButton>
                    Adicionar Categoria
                </TextButton>
            </ButtonAddCategory>
        </Content>
        <CategoryListView>
            <FlatList 
              data={categoryList}
              keyExtractor={item=> item.id}
              renderItem={({item})=> 
                <CardCategory category={item.name} id={item.id} />
            }/>
        </CategoryListView>
    </Container>
  );
}