import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

interface SkillCardProps extends TouchableOpacityProps{
    skill: string
}

export function SkillCard({skill, ...rest} : SkillCardProps) {
    return(
    <TouchableOpacity style = {styles.buttonSkill} {...rest}>
            <Text style = {styles.buttonText}>{skill}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonSkill: {
          backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 14,
        marginTop: 12,
        padding: 12,
        alignItems: 'center',
        borderRadius: 7
    }
})