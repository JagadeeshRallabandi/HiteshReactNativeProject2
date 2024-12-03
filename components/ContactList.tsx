import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name:'Jagadeesh',
            status:'Just an extra ordinary student',
            image:'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
            uid:2,
            name:'Rallabandi',
            status:'Just an extra ordinary teacher',
            image:'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
            uid:3,
            name:'Sai',
            status:'Just an extra ordinary scientist',
            image:'https://randomuser.me/api/portraits/men/3.jpg',
        },
        {
            uid:4,
            name:'Rahul',
            status:'Just an extra ordinary lawyer',
            image:'https://randomuser.me/api/portraits/men/4.jpg',
        }
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,image})=>(
            <View key={uid} style={styles.userCard}>
               <Image
               source={{
                uri:image
               }}
               style = {styles.userImage}
               />
               <View>
               <Text style={styles.userName}>{name}</Text>
               <Text style={styles.userStatus}>{status}</Text>
               </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8D3DAF',
        borderRadius:10,
        padding:8,
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:60/2,
        marginRight:14,

    },
    userStatus:{
        fontSize:12,

    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#000000'
    }
})