
import React, { useContext,useState ,useEffect} from 'react'

import { Header } from '../../components/Header';
import { Context } from '../../Context/ContextAPI';

import {
    Container,
    Content,
    Input,
    Button,
    TextButton,
    AlertText,
    BoxAddNewTask,
    ButtonTaskDetail,
    TextDetail,
    IconArrowDown,
} from './style'


export function AddTask({ navigation }) {

    const { AddNewTask, setText, text, categorySelected ,dateSelected} = useContext(Context)

    const [alert,setAlert] = useState('')


    function HandleAddTask() {
        if (text && categorySelected != 'Categoria') {
            setAlert('')
            AddNewTask()
            navigation.goBack()
        }
        if (!text) {
            setAlert('Nome vazio')
        }
        if (categorySelected === 'Categoria') {
            setAlert('Selecione uma Categoria')
        }
    }


    return (
        <Container>
            <Header />
            <Content>
                <BoxAddNewTask>
                    <Input
                        placeholder='Nome da tarefa'
                        onChangeText={(e) => setText(e)}
                        value={text}
                    />
                    <AlertText>{alert}</AlertText>
                    <ButtonTaskDetail
                        onPress={()=> navigation.navigate('Editar Categorias')}
                    >
                        <TextDetail>
                            {categorySelected}
                        </TextDetail>
                        <IconArrowDown
                            name='down'
                            size={15}
                        />
                    </ButtonTaskDetail>

                    <ButtonTaskDetail
                        onPress={()=>navigation.navigate('Calendario')}
                    >
                        <TextDetail>
                            {(!dateSelected.dateFormated) ? 'Sem Data' : dateSelected.dateFormated}
                        </TextDetail>
                        <IconArrowDown
                            name='down'
                            size={15}
                        />
                    </ButtonTaskDetail>
                    
                </BoxAddNewTask>


                <Button
                    onPress={HandleAddTask}

                >
                    <TextButton>
                        Adicionar Tarefa
                    </TextButton>
                </Button>
            </Content>
        </Container>
    );
}