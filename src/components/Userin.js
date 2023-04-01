import React, { useState, useEffect } from "react";
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

export const Userin = ({
  modalVisibleIn,
  setModalVisibleIn,
  registeredInteligences,
  setRegisteredInteligences,
  intelligence: intelligenceObj,
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [id, setId] = useState("");
  const [autorName, setautorName] = useState("");
  const [inteliName, setinteliName] = useState("");
  const [InteliCharacteristic, setInteliCharacteristic] = useState("");

  useEffect(() => {
    console.log("info de la inteligencia ingresada" + intelligenceObj.id);

    if (Object.keys(intelligenceObj).length > 0) {
      console.log("Entre al useEffect de inteligencias");
      setId(intelligenceObj.id);
      setautorName(intelligenceObj.autorName);
      setinteliName(intelligenceObj.inteliName);
      setInteliCharacteristic(intelligenceObj.InteliCharacteristic);
      setDate(intelligenceObj.date);
    }
  }, [intelligenceObj.date]);
  const handleIntelligence = () => {
    console.log("presionaste agregar una Inteligencia UAM");
    if ([autorName, inteliName, InteliCharacteristic, date].includes("")) {
      Alert.alert("Error", "No podemos adicionar la inteligencia");
      return;
    }

    /**Información de la inteligencia */
    const newIntelligence = {
      autorName,
      inteliName,
      InteliCharacteristic,
      date,
    };
    if (id) {
      //editar
      newIntelligence.id = id;
      console.log("Editando la inteligencia ingresada", newIntelligence);
      return;
    } else {
      //nuevo registro
      newIntelligence.id = Date.now();
      setRegisteredInteligences([...registeredInteligences, newIntelligence]);
    }
    /**Copia del array de registro de las inteligencias UAM */
    setRegisteredInteligences([...registeredInteligences, newIntelligence]);
    setModalVisibleIn(!modalVisibleIn);
    /**Limpieza de campos para borrar desde el ultimo registro*/
    setautorName("");
    setInteliCharacteristic("");
    setinteliName("");
    setDate(new Date());
  };

  return (
    <Modal animationType='slide' visible={modalVisibleIn}>
      <ImageBackground
        source={require("../assets/png/inteligencias.png")}
        resizeMode='cover'
        style={styles.backCover}>
        <Image
          style={styles.image}
          source={require("../assets/png/Logos_UAM-08.png")}
        />

        <ScrollView>
          <Pressable
            style={styles.btnExit}
            onPress={() => setModalVisibleIn(false)}>
            <Text style={styles.btnTextExit}> X Cerrar</Text>
          </Pressable>

          <Text style={styles.title}>
            Inscripción {""}
            <Text style={styles.titleBold}>
              Identificación de inteligencias
            </Text>
          </Text>

          <View style={styles.campo}>
            <TextInput
              placeholder='Nombre del autor'
              placeholderTextColor={"#F8F9F9"}
              style={styles.input}
              value={autorName}
              onChangeText={setautorName}></TextInput>
          </View>

          <View style={styles.campo}>
            <TextInput
              placeholder='Nombre de la nueva inteligencia'
              placeholderTextColor={"#F8F9F9"}
              style={styles.input}
              value={inteliName}
              onChangeText={setinteliName}></TextInput>
          </View>

          <View style={styles.campo}>
            <TextInput
              placeholder='Caracteristicas de la inteligencia'
              placeholderTextColor={"#F8F9F9"}
              style={styles.input}
              value={InteliCharacteristic}
              onChangeText={setInteliCharacteristic}></TextInput>
          </View>

          <View style={styles.campo}>
            <DatePicker
              date={date}
              locale='es-ES'
              onDateChange={(date) => setDate(date)}></DatePicker>
          </View>

          <Pressable style={styles.btnNewIntelligence}>
            <Text
              style={styles.btnTextIntelligence}
              onPress={handleIntelligence}>
              Registrar Inteligencia
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
  btnNewIntelligence: {
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
  btnTextIntelligence: {
    textAlign: "center",
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 16,
  },
});
