import React, { useContext, useState } from 'react'

import { Context } from '../../Context/ContextAPI';
import { CardTask } from '../CardTask';
import {useTheme} from 'styled-components'

import {
  Container,
  BoxTasks,
  TitleCategory,
  BoxButtonsSelectedTasks,
  ButtonViewTask,
  TextTask,
  ButtonViewCategory,
  Icon
} from './style'


export function Main() {

  const { tasks, categoryList,HideCategorieView } = useContext(Context)
  const [viewTask, setViewTask] = useState(false)
  const theme = useTheme()


  return (
    <Container>

      <BoxButtonsSelectedTasks>
        <ButtonViewTask onPress={() => setViewTask(false)}>
          <TextTask>Tarefas Pendentes</TextTask>
        </ButtonViewTask>
        <ButtonViewTask onPress={() => setViewTask(true)}>
          <TextTask>Tarefas Concluidas</TextTask>
        </ButtonViewTask>
      </BoxButtonsSelectedTasks>

      <BoxTasks
        data={categoryList}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <>
            <ButtonViewCategory 
              onPress={()=> HideCategorieView(item.name)}
               StyledView={(!item.visible) ? true : false}
              >

             {
             (!viewTask) &&
             <>
             <TitleCategory>{item.name}</TitleCategory>
              <Icon 
                name='arrow-drop-down'
                size={25}
                color={theme.colors.primary}
                 rotate={(!item.visible) ? true : false}
              /> 
              </>
              }
            </ButtonViewCategory>
            
             { tasks.map((task) =>
              (task.category === item.name 
                && task.done === viewTask 
                && item.visible === true
                ) 
                && <CardTask task={task} key={task.id}  />
            )}

          </>
        }
      />
    </Container>
  );
}
