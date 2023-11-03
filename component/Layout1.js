import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
const Layout1 = () => {
    const nav = useNavigation()
    const [name, setName] = useState('')
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginTop: 185, textAlign: 'center', width: 190, fontWeight: '700', fontSize: 24, color: 'rgba(131, 83, 226, 1)' }}>MANAGE YOUR TASK</Text>
            <View style={{ marginVertical: 90, borderWidth: 1, borderRadius: 6, width: 334, height: 43, flexDirection: 'row', alignItems: 'center' }}>
                <Feather name="mail" size={24} color="black" style={{ marginHorizontal: 4 }} />
                <TextInput placeholder='Enter your name' value={name} onChangeText={setName} />
            </View>
            <Pressable onPress={() => nav.navigate('layout2', { name: name })}>
                <View style={{ width: 190, height: 44, backgroundColor: 'rgba(0, 189, 214, 1)', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Get Started</Text>
                </View>
            </Pressable>
        </View >
    )
}

export default Layout1

const styles = StyleSheet.create({})