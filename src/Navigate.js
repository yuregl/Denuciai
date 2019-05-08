//import React from 'react'
import { createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import Login from './Tela/telaAuthLogCad'
import telaDenunciar from './Tela/telaDenuncia'
import ocorrenciaSucesso from './Tela/ocorrenciaSucesso'
import telaAjuda from './Tela/telaAjuda'

const MenuRoutes = {
    Denunciar: {
        name: 'Denunciar',
        screen: telaDenunciar,
        navigationOptions:{
            title: 'Denunciar'
        }
    },
    Ajuda:{
        name: 'Ajuda',
        screen: telaAjuda,
        navigationOptions:{
            title: 'Ajuda'
        }
    }
}

const MenuConfig = {
    initialRouteName:'Denunciar',
    contentOptions: {
        labelStyle:{
            fontWeight: 'bold',
            fontSize: 20 ,
            color:'#FFF'
        },
        style:{
            backgroundColor: '#000'
        }
    }
}
const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
    Login: {
        name: 'Login',
        screen: Login
    },
    Denunciar:{
        name: 'Denunciar',
        screen: MenuNavigator
    },
    OcorreSuc:{
        name: 'OcorreSuc',
        screen: ocorrenciaSucesso
    }
}

const MainNavigator =
    createSwitchNavigator(MainRoutes, {initialRouteName: 'Login'}) 

const App = createAppContainer(MainNavigator)

export default App