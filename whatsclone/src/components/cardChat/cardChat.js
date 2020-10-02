import React, { useEffect, useState } from 'react';
import {Text, Image, View, StyleSheet, ScrollView, Alert} from 'react-native';
import CardData from '../../assets/dados/dados.json';

const CardChat = () =>{

    const[listaDados, setListaDados] = useState([])
    
    useEffect(()=>{
        setListaDados(CardData)
    }, [])   
    
    return(
        <ScrollView> 
                {listaDados.map(dado =>(                                                                  
                    <View key={dado.id} style={styles.container}>
                        <View>                
                            <Image style={styles.image} source={{uri: dado.imagem}} width={60} height={60}/>
                        </View>
                        <View style={styles.textArea}>
                            <View>                           
                                <Text style={styles.titleCard}>{dado.nome}</Text>                        
                                <Text style={styles.msgCard}>{dado.msg}</Text>
                            </View>
                            <View>
                                <Text style={styles.statusHour}>{dado.horario}</Text>
                                {dado.msgNaoLida > 0 ? 
                                    <Text style={styles.statusMsg}>{dado.msgNaoLida}</Text> : null}
                            </View>                
                        </View>
                    </View>
                ))} 
        </ScrollView>        
    );    
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
        width:280,
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