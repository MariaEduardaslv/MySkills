import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from "react"

export function Home() {

    const [newSkill, setNewSkill] = useState()


    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>
                Welcome, Maria Eduarda
                </Text>

            <TextInput 
            style = {styles.input}
            placeholder="Write your skill"
            placeholderTextColor= '#555'
            onChangeText={setNewSkill}
            />
            
            <TouchableOpacity
             style = {styles.button}
              activeOpacity={0.5}
              >
                <Text
                 style= {styles.buttonText}>
                    Add
                    </Text>
            </TouchableOpacity>
            {/* <Text style ={styles.textFooter}>Unicruz</Text> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121025',
        paddingHorizontal: 20,
        paddingVertical:50
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios'? 15 : 10,
        marginTop: 20,
        borderRadius: 7
    },
    button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius:7,
    alignItems: 'center',
    marginTop: 17
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    textFooter: {
        alignSelf: 'center',
        marginBottom: 20
    }
})