import React, { useContext, useState } from 'react'

import { Header } from '../../components/Header';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../styles/theme';

import {
    Container,
    Content,
    Button,
    Text,
} from './style'

import { Context } from '../../Context/ContextAPI';

export function CalendarScreen() {

    const { setDateSelected } = useContext(Context)
    const navigation = useNavigation()

    LocaleConfig.locales['pt-br'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ],
        monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
        dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
        today: "Hoje",
    },
        LocaleConfig.defaultLocale = 'pt-br';

    function HandleDateSelected(date) {
        const formatMonth = (Number(date.month) <= 10 ? '0'+date.month : date.month)

        setDateSelected({
            dateFormated: `${date.day}/${formatMonth}/${date.year}`,
            US: date.dateString+'T03:00'
        })
        navigation.navigate('Adicionar Tarefa')
    }

    function HandleBackScreen () {
        setDateSelected({dateFormated: '', US: '' })
        navigation.navigate('Adicionar Tarefa')
    }

    return (
        <Container>
            <Header />
            <Content>
                <Calendar
                    renderArrow={(direction) =>
                        <AntDesign name={direction === 'right' ? 'right' : 'left'} size={15} color="black" />
                    }
                    theme={{
                        textDayFontFamily: theme.fonts.medium,
                        textMonthFontFamily: theme.fonts.bold,
                        textDayFontSize: 18,
                        textMonthFontSize: 18,
                    }}

                    minDate={(new Date()).toDateString()}
                    onDayPress={(date) => HandleDateSelected(date)}
                />
            </Content>
            <Button onPress={HandleBackScreen}>
                    <Text>
                        Sem Data
                    </Text>
                </Button>
        </Container>
    );
}