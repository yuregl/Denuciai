//import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from './Tela/telaAuthLogCad'
import telaDenuncia from './Tela/telaDenuncia'
import ocorrenciaSucesso from './Tela/ocorrenciaSucesso'

const MainRoutes = {
    Login: {
        name: 'Login',
        screen: Login
    },
    Denunciar:{
        name: 'telaDenuncia',
        screen: telaDenuncia
    },
    OcorreSuc:{
        name: 'ocorreSuc',
        screen: ocorrenciaSucesso
    }

}

const MainNavigator =
    createSwitchNavigator(MainRoutes, {initialRouteName:'Login'}) 

const App = createAppContainer(MainNavigator)

export default App