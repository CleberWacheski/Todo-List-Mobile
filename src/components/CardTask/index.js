import React,{useContext} from 'react'

import { Context } from '../../Context/ContextAPI';

import { isPast, isFuture, isToday, isTomorrow, formatDistance, formatDistanceToNow } from 'date-fns';
import {
  Container,
  Content,
  DateText,
  ContentTask,
  CheckBoxIcon,
  TextTask,
  RemoveIcon,
  CheckBoxButton,
  RemoveButton,
} from './style'

import { useTheme } from 'styled-components';
import { useEffect } from 'react/cjs/react.production.min';

export function CardTask({task}){
    const theme = useTheme()
    
    const taskDate = task.date.dateFormated
    const taskDateUS = task.date.US

    const {RemoveTask,UpdateTask} = useContext(Context)


    function VerificationDate() {

      if (isToday(new Date(taskDateUS))) {
         
        return 'Hoje'
      }

      if (isTomorrow(new Date(taskDateUS))) {

        return `Amanhã`
      }

      if (isFuture(new Date(taskDateUS))) {
         
         return (
          `Daqui ${formatDistanceToNow(new Date(taskDateUS))
            .replace('day','dia')
            .replace('days','dias')
            .replace('months','meses')
            .replace('years','anos')} - ${taskDate}`)
      }

      if (isPast(new Date(taskDateUS))) {
                 
        return (
          `Atrasado há ${formatDistanceToNow(new Date(taskDateUS))
            .replace('day','dia')
            .replace('days','dias')
            .replace('months','meses')
            .replace('years','anos')} - ${taskDate}`)
      }
      return taskDate
    }

  return (
    <Container >
        <Content>
          <ContentTask>
            <CheckBoxButton onPress={()=>UpdateTask(task.id)}>
              <CheckBoxIcon
                name={task.done ? 'checkbox-active' : 'checkbox-passive' }
                size={16}
                color={task.done ? theme.colors.success : theme.colors.text_secondary}
              />
            </CheckBoxButton>

            <TextTask done={task.done}>{task.nameOfTask}</TextTask>

          </ContentTask>
          <DateText
            alertDate={VerificationDate()}>
              {VerificationDate()}
          </DateText>
        </Content>
          

          <RemoveButton onPress={()=>RemoveTask(task.id)}>
            <RemoveIcon
              name="trash-o"
              size={20}
              color={theme.colors.text_secondary}
            />
          </RemoveButton>
    </Container>
  );
}