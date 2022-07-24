import React,{useContext} from 'react'
import { useNavigation } from '@react-navigation/native';

import { Context } from '../../Context/ContextAPI';

import {
  Container,
  Text,
  RemoveCategoryButton,
  IconRemove,
  SelectButton
} from './style'

export function CardCategory({ category, id }) {
  const {RemoveCategory,setCategorySelected} = useContext(Context)
  const navigation = useNavigation()

  function CategorySelected() {
    setCategorySelected(category)
    navigation.navigate('Adicionar Tarefa')
  }

  return (
    <Container>
      <SelectButton onPress={CategorySelected}>
        <Text>
          {category}
        </Text>
      </SelectButton>
      <RemoveCategoryButton onPress={()=>RemoveCategory(id,category)}>
        <IconRemove
          name='trash-o'
          size={26}
        />
      </RemoveCategoryButton>
    </Container>
  );
}