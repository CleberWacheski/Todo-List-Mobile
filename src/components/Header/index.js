import React,{useContext} from 'react'
import { Context } from '../../Context/ContextAPI';

import {
  Container,
  BoxTitles,
  AppName,
  CounterTasks,
  Tasks
} from './style'

export function Header(){
  const {tasks} = useContext(Context)

  return (
    <Container>
        <BoxTitles>
            <AppName>
                To.Do
            </AppName>
            <CounterTasks>
                Você tem <Tasks>{tasks.length} tarefas </Tasks>
            </CounterTasks>
        </BoxTitles>
    </Container>
  );
}