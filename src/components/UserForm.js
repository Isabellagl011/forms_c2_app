import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import DatePicker from "react-native-date-picker";

export const UserForm = ({
  modalUserForm,
  setModalUserForm,
  registeredUsers,
  setRegisteredUsers,
  user: userObj,
  setUser,
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [id, setId] = useState("");
  const [userName, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    console.log("info del objeto user" + userObj.id);

    if (Object.keys(userObj).length > 0) {
      console.log("Entre al useEffect");
      setId(userObj.id);
      setUsername(userObj.userName);
      setUserEmail(userObj.userEmail);
      setCellphone(userObj.cellphone);
      setComments(userObj.comments);
      setDate(userObj.date);
    }
  }, [userObj.date]);
  const handleUser = () => {
    console.log("presionaste agregar usuario UAM");
    if ([userName, userEmail, cellphone, comments, date].includes("")) {
      Alert.alert("Error", "Hay campos sin diligenciar");
      return;
    }

    /**Información del usuario */
    const newUser = {
      /**Creamos un id ficticio a partir de la fecha de nacimiento */
      userName,
      userEmail,
      cellphone,
      date,
      comments,
    };
    if (id) {
      //editar
      newUser.id = id;
      const usersEdited = registeredUsers.map((userState) =>
        userState.id === newUser.id ? newUser : userState
      );
      console.log("Editando el usuario", newUser);
      setRegisteredUsers(usersEdited);
      console.log(usersEdited);
      setUser({});
    } else {
      //nuevo registro
      newUser.id = Date.now();
      setRegisteredUsers([...registeredUsers, newUser]);
    }
    /**Copia del array de registro de usuarios */

    setModalUserForm(!modalUserForm);
    /**Limpieza de campos para borrar desde el ultimo registro*/
    setUsername("");
    setUserEmail("");
    setCellphone("");
    setDate(new Date());
    setComments("");
  };

  return (
    <Modal animationType='slide' visible={modalUserForm}>
      <ImageBackground
        source={require("../assets/jpg/dev2.jpg")}
        resizeMode='cover'
        style={styles.backCover}>
        <Image
          style={styles.image}
          source={require("../assets/png/Logos_UAM-08.png")}
        />

        <ScrollView>
          <Text style={styles.title}>
            Inscripción {""}
            <Text style={styles.titleBold}>Vacaciones UAM</Text>
          </Text>

          <Pressable
            style={styles.btnExit}
            onPress={() => {
              setModalUserForm(!modalUserForm);
              setUser({});
              setId("");
              setUsername("");
              setUserEmail("");
              setCellphone("");
              setDate(new Date());
              setComments("");
            }}>
            <Text style={styles.btnTextExit}> X Cerrar</Text>
          </Pressable>

          <View style={styles.campo}>
            <TextInput
              placeholder='Nombre Completo'
              placeholderTextColor={"#F8F9F9"}
              style={styles.input}
              value={userName}
              onChangeText={setUsername}></TextInput>
          </View>

          <View style={styles.campo}>
            <TextInput
              placeholder='@autonoma.edu.co'
              placeholderTextColor={"#F8F9F9"}
              style={styles.input}
              keyboardType='email-address'
              value={userEmail}
              onChangeText={setUserEmail}></TextInput>
          </View>

          <View style={styles.campo}>
            <TextInput
              placeholder='Celular'
              placeholderTextColor={"#F8F9F9"}
              style={styles.input}
              keyboardType='phone-pad'
              value={cellphone}
              onChangeText={setCellphone}
              maxLength={10}></TextInput>
          </View>

          <View style={styles.campo}>
            <DatePicker
              date={date}
              locale='es-ES'
              onDateChange={(date) => setDate(date)}></DatePicker>
          </View>

          <View style={styles.campo}>
            <TextInput
              placeholder='Dejanos tus comentarios'
              placeholderTextColor={"#F8F9F9"}
              style={[styles.input, styles.inputComments]}
              numberOfLines={6}
              multiline={true}
              value={comments}
              onChangeText={setComments}></TextInput>
          </View>
          <Pressable style={styles.btnNewUser}>
            <Text style={styles.btnTextNewUser} onPress={handleUser}>
              Agregar
            </Text>
          </Pressable>
        </ScrollView>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    margin: 15,
    width: 75,
    height: 75,
    marginBottom: 15,
  },
  backCover: {
    position: "absolute",
    marginTop: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
    backgroundColor: "rgba(52,52,52,alpha)",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#FFFFFF",
    marginHorizontal: 30,
    fontWeight: "600",
    marginBottom: 20,
  },
  titleBold: {
    textAlign: "center",
    fontSize: 22,
    color: "#0069a3",
    marginHorizontal: 30,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#000000c0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: "#FFF",
    marginBottom: 8,
    marginTop: 12,
  },
  campo: {
    marginHorizontal: 30,
  },
  inputComments: {
    height: 100,
  },
  inputDate: {
    borderRadius: 10,
    height: 10,
  },
  btnExit: {
    marginVertical: 30,
    backgroundColor: "#000000c0",
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnTextExit: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  btnNewUser: {
    marginVertical: 50,
    backgroundColor: "#0069a3",
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnTextNewUser: {
    textAlign: "center",
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 16,
  },
});
