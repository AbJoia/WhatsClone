import React, { useState } from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import CardData from '../../assets/dados/dados.json';

const CardChat = () =>{

    const[dados, setDados] = useState(CardData);    

    return(
        <ScrollView>
            <View style={styles.container}>
                <View>                
                    <Image style={styles.image} source={require("../../assets/imgPerfil/jackdorsey.jpg")}/>
                </View>
                <View style={styles.textArea}>
                    <View>
                        <Text style={styles.titleCard}>Jack Dorsey</Text>
                        <Text style={styles.msgCard}>Hey Abner! How are you?...</Text>
                    </View>
                    <View>
                        <Text style={styles.statusHour}>11:45</Text>
                        <Text style={styles.statusMsg}>4</Text>
                    </View>                
                </View>
            </View>
            <View style={styles.container}>
            <View>                
                <Image style={styles.image} source={require("../../assets/imgPerfil/billgates.jpg")}/>
            </View>
            <View style={styles.textArea}>
                <View>
                    <Text style={styles.titleCard}>Bill Gates</Text>
                    <Text style={styles.msgCard}>Hey Abner! Tranquilo?...</Text>
                </View>
                <View>
                    <Text style={styles.statusHour}>9:40</Text>                    
                </View>                
                </View>
            </View>
            <View style={styles.container}>
            <View>                
                <Image style={styles.image} source={require("../../assets/imgPerfil/mark.jpg")}/>
            </View>
            <View style={styles.textArea}>
                <View>
                    <Text style={styles.titleCard}>Mark Zuckerberg</Text>
                    <Text style={styles.msgCard}>Eita! Aqui no Facebook...</Text>
                </View>
                <View>
                    <Text style={styles.statusHour}>8:25</Text>
                    <Text style={styles.statusMsg}>1</Text>
                </View>                
            </View>
            </View>
            <View style={styles.container}>
            <View>                
                <Image style={styles.image} source={require("../../assets/imgPerfil/chaves.jpg")}/>
            </View>
            <View style={styles.textArea}>
                <View>
                    <Text style={styles.titleCard}>Chaves</Text>
                    <Text style={styles.msgCard}>Foi sem querer querendo...</Text>
                </View>
                <View>
                    <Text style={styles.statusHour}>4:55</Text>                    
                </View>                
            </View>
            </View>
            <View style={styles.container}>
            <View>                
                <Image style={styles.image} source={require("../../assets/imgPerfil/jacksparrow.jpg")}/>
            </View>
            <View style={styles.textArea}>
                <View>
                    <Text style={styles.titleCard}>Capitão Jack Sparrow</Text>
                    <Text style={styles.msgCard}>Bebei amigos, yo ho...</Text>
                </View>
                <View>
                    <Text style={styles.statusHour}>23:55</Text>                    
                </View>                
            </View>
            </View>
            <View style={styles.container}>
            <View>                
                <Image style={styles.image} source={require("../../assets/imgPerfil/gumball.jpg")}/>
            </View>
            <View style={styles.textArea}>
                <View>
                    <Text style={styles.titleCard}>Gumball</Text>
                    <Text style={styles.msgCard}>Quando você fala uma...</Text>
                </View>
                <View>
                    <Text style={styles.statusHour}>12:55</Text>
                    <Text style={styles.statusMsg}>2</Text>
                </View>                
            </View>            
            </View>
            <View style={styles.container}>
                <View>                
                    <Image style={styles.image} source={require("../../assets/imgPerfil/homer.jpg")}/>
                </View>
                <View style={styles.textArea}>
                    <View>
                        <Text style={styles.titleCard}>Homer Simpson</Text>
                        <Text style={styles.msgCard}>Porco aranha porco...</Text>
                    </View>
                    <View>
                        <Text style={styles.statusHour}>00:45</Text>
                        <Text style={styles.statusMsg}>10</Text>
                    </View>                
                </View>
            </View>
            <View style={styles.container}>
                <View>                
                    <Image style={styles.image} source={require("../../assets/imgPerfil/slash.jpg")}/>
                </View>
                <View style={styles.textArea}>
                    <View>
                        <Text style={styles.titleCard}>Slash</Text>
                        <Text style={styles.msgCard}>Vamos fazer um som?...</Text>
                    </View>
                    <View>
                        <Text style={styles.statusHour}>14:25</Text>
                        <Text style={styles.statusMsg}>2</Text>
                    </View>                
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection: 'row',        
        height: 75
    },

    titleCard: {       
       fontWeight: 'bold',
       fontSize: 18,
       textAlign: 'left',       
    },

    statusHour: {
        marginLeft: 14,
        color: '#25d366',
        fontSize:13,
        fontWeight: 'bold'
    },

    statusMsg:{
        textAlign:'center',
        marginTop: 10,       
        backgroundColor: '#25d366',
        color: 'white',
        width: 20, 
        marginLeft: 22,
        fontSize: 15,   
        borderRadius:50
    },

    msgCard: {
        width:210,
        fontSize:17,        
        color: '#A6A4A1'        
    },

    textArea: {
        width: 280,
        flexDirection: 'row',
        marginLeft: 23,
        marginTop: 15,        
        borderBottomWidth: 1,
        borderBottomColor: '#A6A4A1'
    },

    image: {
        marginTop: 10,
        marginLeft: 5,
        width: 60,
        height: 60,
        flexWrap: 'wrap',
        borderRadius: 50        
    }
})

export default CardChat;