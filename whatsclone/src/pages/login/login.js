import React from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableHighlight} from 'react-native';

const Login = ({navigation}) =>{
    return(
        <View style={style.container}>
            <View style={style.titleArea}>
                <Text style={style.title}>Verifique seu número</Text>
                <Image style={style.image} source={require('../../assets/icons/morevertblackIcon.png')}/>
            </View>
            <View style={style.textAreaInfo}>
                <Text style={style.textInfo}>O WhatsApp enviará um SMS para verificar seu</Text>
                <Text style={style.textInfo}>número de telefone. Insira o código do seu país e</Text>
                <Text style={style.textInfo}>seu número de telefone:</Text>                
            </View>
            <View>
                <TextInput style={style.inputPais} placeholder={"seu país"}/>
                <View style={style.inputPhoneArea}>  
                    <TextInput style={style.inputCodPais} defaultValue={"+"}/>
                    <TextInput style={style.inputNumber} placeholder={"seu número"}/>
                </View>           
            </View>
            <View style={style.bottomArea}>
                <TouchableHighlight underlayColor={'#fff'} style={style.button} onPress={() => navigation.navigate('ChatPage')}>
                    <Text style={style.buttonText}>AVANÇAR</Text>
                </TouchableHighlight>
                <Text style={style.textInfoRodape}>Tarifas de SMS de sua operadora podem ser aplicadas</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        
    },

    titleArea:{
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',        
    },

    title: {         
        marginLeft: 70,       
        color: '#128c7e',
        fontSize:20,
        fontWeight: 'bold'
    },

    textAreaInfo:{
        marginTop:25
    },

    textInfo: {             
        fontSize: 15,        
        textAlign: 'center'        
    },

    image:{           
        width: 30,
        height:30
    },

    inputPais: {
        marginHorizontal: 45,
        borderBottomWidth: 2,
        borderColor: '#128c7e',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,       
    },

    inputPhoneArea:{
        flexDirection: 'row'
    },

    inputCodPais: {
        width: 60,
        marginLeft: 45,
        borderBottomWidth: 2,
        borderColor: '#128c7e',        
        fontWeight: "bold",
        fontSize: 15, 
    },

    inputNumber:{
        width: 200,
        marginLeft: 10,
        borderBottomWidth: 2,
        borderColor: '#128c7e',        
        fontWeight: "bold",
        fontSize: 20, 
    },

    bottomArea:{
        marginTop: 220,
        alignItems: "center"
    },

    textInfoRodape:{
        marginTop: 20,
        fontSize: 12,
        textAlign:'center',
        fontWeight: 'bold',
        color: '#85817F'
    },

    button:{        
        backgroundColor: '#25d366',
        width: 120,
        height: 40,
        borderRadius: 3,
        elevation: 2
    },

    buttonText:{
        textAlign:'center',
        lineHeight: 40,
        color: 'white',
        fontWeight: 'bold',
    }

})

export default Login;