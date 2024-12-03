import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
       <Image
       source={{
        uri:'https://bgr.com/wp-content/uploads/2022/03/AdobeStock_194080021.jpeg?resize=1020%2C574&quality=82'
       }}
       style={styles.cardImage}
       />
       <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Earth</Text>
        <Text style={styles.cardLabel}>Blue Planet</Text>
        <Text style={styles.cardDescription}>Earth is a Planet in the Solar System in Milky Way Galaxy</Text>
        <Text style={styles.cardFooter}>Earth Away</Text>
       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal:8,
    },
    card: {
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage: {
        height:200,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,
    },
    cardLabel:{
        color:'#000000',
        fontSize:14,
        marginBottom:6,
        fontWeight:'bold'
    },
    cardDescription:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1,
    },
    cardFooter:{
        color:'#000000'
    },
})