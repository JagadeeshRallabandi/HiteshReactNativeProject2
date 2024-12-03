import { StyleSheet, Text, View,Linking, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                what's new in JavaScript 21 - ES12
            </Text>
        </View>
        <Image
        source={{
            uri:'https://bgr.com/wp-content/uploads/2022/03/AdobeStock_194080021.jpeg?resize=1020%2C574&quality=82',
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Just like Earth 
                There are tmany Planets 
                in the Solar System
                The main Planets in the Solar System are
                Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune
            </Text>
        </View>
        <View style={styles.footerContainer}>
           <TouchableOpacity onPress={()=>openWebsite('https://nineplanets.org/')}>
            <Text style={styles.link}>Read more</Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
        width:350,
        height:390,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard:{
        backgroundColor:'#FFFFFF',
        elevation:5,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.5,
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    headerText:{
        color:'#000000',
        fontSize:18,
        fontWeight:'600',
    },
    cardImage:{
        height:200,

    },
    bodyContainer:{
        padding:16,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    link:{
        fontSize:16,
        color:'	#0040ff',
        backgroundColor:'#0040ff',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }
})