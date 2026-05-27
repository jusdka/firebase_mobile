import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { useState } from 'react';
//npm install react-native-toast-message
import Toast from 'react-native-toast-message';
import { auth } from '@/lib/firebase';
import {signInWithEmailAndPassword} from "@firebase/auth";

import { router } from 'expo-router';//captura de rota

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [loading, setLoading] = useState(false)

    async function validarLogin() {
        setLoading(true)

        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        router.replace('/(tabs)/explore');

        setLoading(false)
            
        
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.Text}> Área Restrita</Text>

            <TextInput
                style={styles.Input}
                placeholder="Informe seu usuário"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.Input}
                placeholder="Informe sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Toast />

            <TouchableOpacity style={styles.Button} onPress={validarLogin} disabled={loading}>
                <Text style={styles.Text}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    Text: {
        fontSize: 24, color: '#ffffff',
        marginBottom: 20,
    },
    Input: {
        width: '100%',
        height: 40,
        backgroundColor: '#ffffff',
        marginBottom: 20,
        color: '#000000'
    },
    Button: {
        width: '100%',
        height: 40,
        backgroundColor: '#c2e015',
        alignItems: 'center',
    },
})