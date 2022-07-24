import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs'
import { useEffect,useState,useContext } from "react"
import * as SplashScreen from 'expo-splash-screen'
import AsyncStorage from "@react-native-async-storage/async-storage"

import { Context } from '../src/Context/ContextAPI'
import theme from '../src/styles/theme'
import { Home } from '../src/screens/Home/'
import { AddTask } from '../src/screens/AddTask'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import {
    TitilliumWeb_400Regular,
    TitilliumWeb_700Bold,
    TitilliumWeb_600SemiBold} 
    from '@expo-google-fonts/titillium-web';
  import * as  Font from 'expo-font'
import { format } from 'date-fns'
  

export function Routes() {
    const Tab = createBottomTabNavigator()

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const {setTasks,setCategoryList} = useContext(Context)
  
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
     try {
      SplashScreen.preventAutoHideAsync();
  
      await Font.loadAsync({
        TitilliumWeb_400Regular,
        TitilliumWeb_700Bold,
        TitilliumWeb_600SemiBold
      });

        const storedCategory = await AsyncStorage.getItem('@todoList:Categories')
        const storedTasks = await AsyncStorage.getItem('@todoList:Tasks')


       if (storedTasks) { setTasks(JSON.parse(storedTasks))}
       if (storedCategory) {setCategoryList(JSON.parse(storedCategory))}

     } catch (e) {
      console.warn("ERRO "+e);
     } 
     
     finally {
      setLoadingComplete(true);
      SplashScreen.hideAsync();
     }

    }
    loadResourcesAndDataAsync();
   }, []);


   if (!isLoadingComplete)
   return null
   
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {

                        switch (route.name) {
                            case ("Lista de Tarefas"):
                                return <Ionicons name={'md-newspaper-outline'} size={30} color={color} />
                                break;
                            case ("Adicionar Tarefa"):
                                return <MaterialIcons name="add-task" size={30} color={color} />
                                break;
                            case ('Editar Categorias'):
                                return <MaterialIcons name="edit" size={30} color={color} />
                                break;
                        }
                    },
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                        paddingTop: 5,
                        borderTopWidth: 1.5,
                    },
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: theme.colors.text_secondary,
                    tabBarLabelStyle: {
                        fontFamily: theme.fonts.bold,
                        fontSize: 11
                    },
                    tabBarHideOnKeyboard: true,

                })}
            >
                <Tab.Screen name="Lista de Tarefas" component={Home}/>
                <Tab.Screen name="Adicionar Tarefa" component={AddTask} />
            </Tab.Navigator>
    );

}