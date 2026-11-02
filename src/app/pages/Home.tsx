import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {use, useEffect, useState} from "react"
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillFormat{
    id: string
    name: string
}

export function Home() {

    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillFormat[]>([])
    const [greetings, setGreetings] = useState('')

    // primeira função, segunda dependencias
    //useEffect(() => {
     //  console.log("useEffect executado!")
   // }, [newSkill])

    useEffect(() => {
        const currentHour = new Date().getHours()
        //console.log(currentHour)
        if(currentHour < 12){
            setGreetings('Good Morning!')
        }
        else if (currentHour >=12 && currentHour < 18) {
            setGreetings('Good Afternoon!')
        }
        else {
           setGreetings('Good Night!') 
        }
    }, [])

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

       // setMySkills(oldState => [...oldState, data] )
        setMySkills([...mySkills, data])
    }
    
    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>
                Welcome, Maria Eduarda
                </Text>
                <Text style = {styles.greetings}>
                  {greetings}
                </Text>

            <TextInput 
            style = {styles.input}
            placeholder="Write your skill"
            placeholderTextColor= '#555'
            onChangeText={setNewSkill} //{() => newSkill = newSkill + text}
           // onChangeText={handleInputChange} // onChangeText = {text => handleInputChange(text)}
            />
            
            <Button title= "Adicionar" onPress={handleAddNewSkill} activeOpacity={0.1}/>
            
           {/* {
                mySkills.map(skill => (
                   <SkillCard key={skill.id} skill={skill.name} activeOpacity={1}/>   
                ))
            } */}
            
           {/*<ScrollView>
            {
                mySkills.map(skill => (
                   <SkillCard key={skill.id} skill={skill.name} activeOpacity={1}/>   
                ))
            }
           </ScrollView>      */}

           <FlatList
            data = {mySkills}
            keyExtractor = {item => item.id}
            renderItem = {({item}) => (
              <SkillCard 
              key={item.id} 
              skill={item.name}
               onPress = {() => handleRemoveSkill(item.id)}
                activeOpacity={1}
                />  
            )}
           />

            {/* <Text style ={styles.textFooter}>{newSkill}</Text> */}

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
    greetings: {
    color : '#fff'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios'? 15 : 10,
        marginTop: 20,
        borderRadius: 7
    },
    textFooter: {
        justifyContent: "flex-end",
        color: '#fff'
    }
})