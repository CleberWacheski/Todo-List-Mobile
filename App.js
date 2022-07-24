import { Routes } from "./Routes/routes"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ContentProvider from "./src/Context/ContextAPI"
import { CategoryList } from "./src/screens/CategoryList"
import { CalendarScreen } from "./src/screens/CalendarScreen"
import { SplashScreen } from "./src/screens/SplashScreen"

export default function App() {

  const Stack = createNativeStackNavigator() 
   
  return (
    <ContentProvider >
      <Stack.Navigator
         screenOptions={{
          headerShown: false,
         }}
         initialRouteName='SpashScreen'
      > 
      
        <Stack.Screen name="SpashScreen" component={SplashScreen}  />
        <Stack.Screen name="Routes" component={Routes} />
        <Stack.Screen name="Editar Categorias" component={CategoryList}/>
        <Stack.Screen name="Calendario" component={CalendarScreen}/>
        
      </Stack.Navigator>
    </ContentProvider>

  )
}
