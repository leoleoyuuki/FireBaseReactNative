import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import {createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./src/services/firebaseconfig";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrar() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  async function esqueciSenha() {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert("Email de reset enviado para: " + email)
      })
      .catch((error) => {
        console.log(error)
        // ..
      });
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite Seu Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        placeholder="Digite Sua Senha"
        value={senha}
        onChangeText={(value) => setSenha(value)}
      />

      <TouchableOpacity onPress={cadastrar}>
        <Text>Enviar</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={esqueciSenha} >
        <Text>Esqueci a Senha </Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
