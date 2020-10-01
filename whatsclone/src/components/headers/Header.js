import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const Header = () => {
    return(
        <>
            <View style={style.containerHeaderTop}>
                <View style={style.viewLogoArea}>
                    <Text style={style.viewText}>WhatsApp</Text>
                </View>
                <View style={style.viewIcon}>
                    <View>
                        <Image style={style.image} source={require('../../assets/icons/searchIcon.png')} />
                    </View>
                    <View>
                        <Image style={style.image} source={require('../../assets/icons/messageIcon.png')} />
                    </View>
                    <View>
                        <Image style={style.image} source={require('../../assets/icons/roundmorevertIcon.png')} />
                    </View>
                </View>           
            </View>
            <View style={style.containerHeaderBottom}>
                <View >
                    <Image style={style.image} source={require('../../assets/icons/photoCameraIcon.png')} />
                </View>
                <View style={style.viewBottomArea}>
                    <Text style={style.bottomText}>CHATS</Text>
                </View>
                <View style={style.viewBottomArea}>
                    <Text style={style.bottomText}>STATUS</Text>
                </View>
                <View style={style.viewBottomArea}>
                    <Text style={style.bottomText}>CALLS</Text>
                </View>
            </View>
        </>
        
    )
}

const style = StyleSheet.create({
    containerHeaderTop: { 
        flexDirection: "row",              
        backgroundColor: '#075e54',
        height: 80        
    },

    viewLogoArea:{       
        width: 180
    },

    viewText: {
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 15,
        color: '#fff',        
        fontSize: 20
    },

    viewIcon: {
        flexDirection: "row",
        alignSelf: "flex-start", 
        marginLeft: 50,            
        marginTop: 25,
        width:180      
    },   

    image: {
      marginLeft: 15, 
      width: 25,
      height:25
    },

    containerHeaderBottom: {        
        flexDirection: "row", 
        height:40,       
        backgroundColor: '#075e54', 
    },

    bottomText: {
        color: '#fff',        
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    },

    viewBottomArea: {
        width: 105
    }
})

export default Header;