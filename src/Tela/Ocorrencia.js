import React, {Component} from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native'

export default class Ocorrencia extends Component{
    
    state = {
        title:'Pichação Bancários',
        Rua:'Três ruas, 775',
        Data:'29 Outubro 2018',
        foto: null,
        descricao:'Foi encotrado uma uma pichação nas três ruas no bancáriosaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        andamento: false
    }
    
    render(){
        return(
            <View style = {styles.principal}>
                <View style={styles.cabecalho}>
                    <Text style = {styles.txtCabecalho}>
                        Visualizar Ocorrência
                    </Text>
                </View>

                <View style = {styles.txtLocal}>
                    <View style = {styles.viewTitle}>
                        <Text style={styles.txtTitle}>{this.state.title}</Text>
                    </View>
                    <View>
                        <Text style = {styles.txtRuaLocal}>
                            {this.state.Rua}
                        </Text>
                        <Text style = {styles.txtRuaLocal}>
                            {this.state.Data}
                        </Text>
                    </View>
                </View>
                    
                <View style = {styles.viewImagem}>
                    <Image/>
                </View>

                <View style = {styles.TitleDesc} >
                    <Text style = {styles.textTitleDesc}>Descrição</Text>
                </View>

                <View style = {styles.viewDoScroll}> 
                    <ScrollView style = {styles.viewScroll}>
                        <Text style = {styles.textDesc}>{this.state.descricao}</Text>
                    </ScrollView>
                </View>
                    
                
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    principal:{
        flex: 1,
        backgroundColor: '#FCFCFC',
        alignItems: 'center'
    },
    cabecalho:{
        margin: 20,
        alignItems: 'center'
    },
    txtCabecalho:{
        fontSize: 20,
        color: '#FF473A',
        fontWeight: 'bold'
    },
    viewImagem:{
        width: '90%',
        height: Dimensions.get('window').width /2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    imgContainer:{
        alignContent: 'center',
        justifyContent: 'center'
    },
    txtLocal:{
        width:'90%'
    },
    txtTitle:{
        color: 'black',
        fontSize: 20,
        marginBottom: 10 
    },
    txtRuaLocal:{
        fontSize: 14
    },
    TitleDesc:{
        width: '90%',
        marginTop : 10
    },
    textTitleDesc:{
        color:'black',
        fontSize:15
    },
    viewDoScroll:{
        width: '90%',
        marginTop: 10,
        borderWidth: 5,
        borderColor: 'green'
    }
    
})