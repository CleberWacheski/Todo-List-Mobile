import React, { createContext, useState, useEffect } from "react";
import { Keyboard } from 'react-native'
import uuid from 'react-native-uuid'

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext();

export default function ContentProvider({ children }) {

    const [text, setText] = useState('')
    const [textCategory, setTextCategory] = useState('')
    const [dateSelected, setDateSelected] = useState({ dateFormated: '', US: '' })
    const [tasks, setTasks] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [categorySelected, setCategorySelected] = useState('Categoria')


    function AddNewTask() {

        setTasks(task => {
            task.push(
                {
                    nameOfTask: text,
                    category: categorySelected,
                    id: uuid.v4(),
                    done: false,
                    date: {
                        dateFormated: dateSelected.dateFormated,
                        US: dateSelected.US
                    }
                })
            return task
        })

        setText('')
        setCategorySelected('Categoria')
        setDateSelected('')

        function SortByDate(a, b) {
            return a.date < b.date;
        }

        setTasks(function (MyTasks) {
            MyTasks.sort(SortByDate)
            return MyTasks
        })
        
        SaveInStorage(categoryList,tasks)
    }

    function RemoveTask(id) {
       const updateTaskArray =  tasks.filter((elem) =>
            elem.id != id
        )
        
        setTasks(updateTaskArray)
        SaveInStorage(categoryList,updateTaskArray)
        
    }

    function UpdateTask(id) {

        setTasks(tasks.map((elem) => {
            if (elem.id === id)
                elem.done === true ? elem.done = false : elem.done = true
            return elem
        }
        ))


        
        SaveInStorage(categoryList,tasks)
    }

    function AddNewCategory() {

        Keyboard.dismiss()

            setCategoryList(categorie => {
                categorie.push({
                    id: uuid.v4(), 
                    name: textCategory,
                    visible: true
                   })
                   return categorie
            })
               

            
        setText('')

        SaveInStorage(categoryList,tasks)
    }

    function RemoveCategory(id,name) {

    
      const updateTaskList = tasks.filter(elem => 
            elem.category != name
        )

      const updateCategorieList = categoryList.filter(elem=> elem.id!= id)


      setTasks(updateTaskList)
      setCategoryList(updateCategorieList)   
      setCategorySelected('Categoria')
      SaveInStorage(updateCategorieList,updateTaskList)
    }

    function HideCategorieView(categorieName) {

        setCategoryList(categories => categories.map((categorie) => {
            if (categorie.name === categorieName) {
                (categorie.visible) ? categorie.visible = false : categorie.visible = true
            }
            return categorie
        }))
    }


    const SaveInStorage = async (categorie,task) => {
            await AsyncStorage.setItem('@todoList:Categories',JSON.stringify(categorie))
            await AsyncStorage.setItem('@todoList:Tasks',JSON.stringify(task))
    }



    return (
        <Context.Provider
            value={{
                tasks,
                setTasks,
                text,
                setText,
                AddNewTask,
                RemoveTask,
                UpdateTask,
                AddNewCategory,
                RemoveCategory,
                setCategoryList,
                categoryList,
                setCategorySelected,
                categorySelected,
                textCategory,
                setTextCategory,
                dateSelected,
                setDateSelected,
                HideCategorieView,
            }}>

            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    {children}
                </NavigationContainer>
            </ThemeProvider>
        </Context.Provider>
    )

}

