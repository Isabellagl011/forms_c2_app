import React, { useState } from "react";
import { UserForm } from "./src/components/UserForm";
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

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalUserForm, setModalUserForm] = useState(false);

  /** Array para listar los usuarios */
  const [registeredUsers, setRegisteredUsers] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Registrate en la {""}
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
          data={registeredUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            console.log(item);
            return <User item={item} />;
          }}
        />
      )}
      <UserForm
        modalUserForm={modalUserForm}
        setModalUserForm={setModalUserForm}
        registeredUsers={registeredUsers}
        setRegisteredUsers={setRegisteredUsers}></UserForm>

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
});
