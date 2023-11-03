import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import { TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import Layout3 from './Layout3';
// https://6543a7db01b5e279de20bdbb.mockapi.io/all
const Layout2 = () => {
  const nav = useNavigation()
  const rou = useRoute()
  const [datas, setDatas] = useState([])
  useEffect(() => {
    const getData = async () => {
      const respone = await axios.get(' https://6543a7db01b5e279de20bdbb.mockapi.io/all')
      console.log(respone.data);
      if (rou.params?.job == null) {
        setDatas(respone.data)
        console.log(datas);
      }
      else {
        setDatas([...datas, { id: datas.length, name: rou.params?.job }])
        console.log(datas);
      }

    }
    getData()
  }, [rou.params?.job])
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: Dimensions.get('window').width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Pressable style={{ marginLeft: 10 }} onPress={() => nav.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Image style={{ marginRight: 10, width: 50, height: 50, backgroundColor: 'black', borderRadius: 50 }} source={require('../assets/Rectangle.png')} />
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi {rou.params?.name}</Text>
            <Text style={{ fontSize: 15, color: 'rgba(23, 26, 31, 1)' }}>Have agrate day a head</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: 334, height: 44, borderWidth: 1, borderRadius: 5, marginVertical: 15 }}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder='Search' />
      </View>
      {
        datas.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', width: 335, backgroundColor: 'rgba(222, 225, 230, 0.47)', height: 50, borderRadius: 20, alignItems: 'center', marginVertical: 10 }}>
            <Feather name="check-square" size={24} color="green" />
            <Text>{item.name}</Text>
            <Feather name="edit" size={24} color="red" />
          </View>
        ))
      }
      <Pressable onPress={() => nav.navigate('layout3')}>
        <View style={{ borderRadius: 100, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', width: 69, height: 69 }}>
          <Text style={{ fontSize: 60, color: 'white' }}>+</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Layout2

const styles = StyleSheet.create({})