import React, {Component} from 'react'
import {
    View, 
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
} from 'react-native'
import {DrawerActions} from 'react-navigation'


imgCamera = require('../../imgs/btn-camera-50.png')
imgVideo = require('../../imgs/btn-filmadora.png')
imgLocal = require('../../imgs/local.png')


export default class Denuncia extends Component{
    
    state = {
        tituloDenuncia: '',
        descDenuncia: '',
        Local: '',
        dataDenuncia: '',
        foto:''
    }

    fazerDenuncia = () =>{
        this.props.navigation.navigate('OcorreSuc')
    }

    render(){
        return(
            <ImageBackground style = {styles.background}>
                <View style ={styles.viewTitle}>
                    <Text style = {styles.txtTitle}>
                        Denunciar
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                        <Text>
                            Aqui!
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.desc}>
                    <Text style = {styles.desInicial}>Descrição</Text>
                    <View >
                        <Text style = {styles.txtDesc}>Titulo da denúncia</Text>
                        <TextInput placeholder = 'Digite o titulo da denuncia'
                            style = {styles.input} value = {this.state.tituloDenuncia}
                            onChangeText = {tituloDenuncia => this.setState({tituloDenuncia})}/>

                        <Text style = {styles.txtDesc}>Descrição da denúncia</Text>
                        <TextInput placeholder = 'Digite a sua denúncia'
                            style = {styles.input} value = {this.state.desInicial}
                            onChangeText = {desInicial => this.setState({desInicial})}/>

                        <Text style = {styles.txtDesc}>Local</Text>
                        <TextInput placeholder = 'Digite o nome do local'
                            style = {styles.input} value = {this.state.Local}
                            onChangeText = {Local => this.setState({Local})}/>
                    </View>

                    <View style = {styles.txtGPS}>
                        <View style = {{marginRight: 10}}>
                            <Text style = {styles.txtDesc}>
                                Usar GPS
                            </Text>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <Image source = {imgLocal}/>
                            </TouchableOpacity> 
                        </View>
                    </View>
                        
                    <View>
                        {/*Ainda tem que codificar*/}
                    </View>

                    <View style = {styles.camera}>
                        <TouchableOpacity> 
                            <Image source = {imgVideo} style = {styles.imagem}/>
                        </TouchableOpacity>

                        <TouchableOpacity> 
                            <Image source = {imgCamera} style = {styles.imagem}/>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.viewBotao}>
                        <TouchableOpacity style = {styles.botao}
                            onPress = {this.fazerDenuncia}>
                            <View>
                                <Text style = {styles.txtBotao}>
                                    Denunciar
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                        
                </View>
            </ImageBackground>
        )
    }
} 

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#FCFCFC'
    },
    viewTitle:{ // View Denuncia
        margin: 20,
        alignItems: 'center'
    },
    txtTitle:{  //txt Denuncia
        fontSize: 20,
        color: '#FF473A',
        fontWeight: 'bold'
    },
    desc:{
        width: '85%',
    },
    desInicial:{
        fontSize: 18,
        color:'black',
        marginTop: 5,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    txtDesc:{
        fontSize: 15,
        marginBottom: 5,
        color: 'black',
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#F6F6F6',
        borderBottomWidth: 1,
        borderBottomColor: '#FF473A',
        marginBottom: 5,
        paddingLeft: 10,
        fontSize:14
    },
    txtGPS:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10
    },

    camera:{
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
        marginTop: 20,
        marginBottom: 20
    },
    imagem:{
        width:70,
        height: 70
    },
    viewBotao:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    botao:{
        backgroundColor: '#FF473A',
        alignItems: 'center',
        padding: 15,
        width: 300,
        marginBottom: 10,
    },
    txtBotao:{
        fontSize: 13,
        color: 'white'
    }
})