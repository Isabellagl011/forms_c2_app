import React, { useState } from "react";
import { UserForm } from "./src/components/UserForm";
import { Userin } from "./src/components/Userin";
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { User } from "./src/components/User";
import { Uintelligence } from "./src/components/Uintelligence";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalUserForm, setModalUserForm] = useState(false);
  const [modalVisibleIn, setModalVisibleIn] = useState(false);

  /** Array para listar los usuarios */
  const [registeredUsers, setRegisteredUsers] = useState([]);
  /**Array para listar las iteligencias registradas */
  const [registeredInteligences, setRegisteredInteligences] = useState([]);
  const [user, setUser] = useState({});
  const [intelligence, setIntelligences] = useState({});
  const [dataArray, setdataArray] = useState([]);

  const editUser = (id) => {
    const editUser = registeredUsers.filter((user) => user.id === id);
    console.log("El array estudiante que el filter obtiene es:", editUser);
    setUser(editUser[0]);
    console.log(editUser);
  };

  const deleteUser = (id) => {
    console.log("usuario", id);
    const editUser = registeredUsers.filter((user) => user.id !== id);
    setRegisteredUsers(editUser);
    console.log(editUser);
  };

  const editIntelligence = (id) => {
    const editIntelligence = registeredInteligences.filter(
      (intelligence) => intelligence.id === id
    );
    console.log("la inteligencia que se está editando es:", editIntelligence);
    setIntelligences(editIntelligence[0]);
    console.log(editIntelligence);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Regista en la {""}
        <Text style={styles.titleBold}>UAM</Text>
      </Text>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.btnNewUser}>
        <Text style={styles.titleButton}>Nuevo usuario</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setModalUserForm(true);
        }}
        style={styles.btnNewUser}>
        <Text style={styles.titleButton}>Nuevo Usuario</Text>
      </Pressable>

      {registeredUsers.length === 0 ? (
        <Text style={styles.textNoUser}>No hay usuarios registrados</Text>
      ) : (
        <FlatList
          style={styles.userList}
          data={registeredUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            /*console.log(item);*/
            return (
              <User
                item={item}
                setModalUserForm={setModalUserForm}
                editUser={editUser}
                deleteUser={deleteUser}
              />
            );
          }}
        />
      )}
      <UserForm
        modalUserForm={modalUserForm}
        setModalUserForm={setModalUserForm}
        registeredUsers={registeredUsers}
        setRegisteredUsers={setRegisteredUsers}
        user={user}
        setUser={setUser}></UserForm>

      <Pressable
        onPress={() => {
          setModalVisibleIn(true);
        }}
        style={styles.btnNewUser}>
        <Text style={styles.titleButton}>Registro Inteligencia</Text>
      </Pressable>
      {registeredInteligences.length === 0 ? (
        <Text style={styles.textNoUser}>
          No hay inteligencias nuevas registrados
        </Text>
      ) : (
        <FlatList
          style={styles.userList}
          data={registeredInteligences}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Uintelligence
                item={item}
                setModalVisibleIn={setModalVisibleIn}
                editIntelligence={editIntelligence}
              />
            );
          }}
        />
      )}
      <Userin
        modalVisibleIn={modalVisibleIn}
        setModalVisibleIn={setModalVisibleIn}
        registeredInteligences={registeredInteligences}
        setRegisteredInteligences={setRegisteredInteligences}
        intelligence={intelligence}
        setIntelligences={setIntelligences}></Userin>

      <Modal animationType='slide' visible={modalVisible}>
        <Text>Desde Modal</Text>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0069a3",
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#FFFFFF",
  },
  titleBold: {
    fontWeight: "900",
    color: "#f4d73b",
  },
  btnNewUser: {
    backgroundColor: "#f4d73b",
    padding: 10,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  titleButton: {
    textAlign: "center",
    fontSize: 20,
    color: "#000000",
  },
  userList: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});
