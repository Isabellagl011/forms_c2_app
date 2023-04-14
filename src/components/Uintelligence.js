import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
export const Uintelligence = ({
  item,
  setModalVisibleIn,
  editIntelligence,
  deleteIntelligence,
}) => {
  const { autorName, inteliName, date, id } = item;
  const dateFormate = (date) => {
    const newDate = new Date(date);
    const optionsFormate = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return newDate.toLocaleDateString("es-ES", optionsFormate);
  };
  console.log(item);
  return (
    <ScrollView>
      <View style={styles.content}>
        <Text style={styles.label}>Autor:</Text>
        <Text style={styles.text}>{autorName}</Text>
        <Text style={styles.label}>Nombre de la inteligencia:</Text>
        <Text style={styles.text}>{inteliName}</Text>
        <Text style={styles.date_formate}>{dateFormate(date)}</Text>
        <View styles={styles.buttons}>
          <Pressable
            style={[styles.btn, styles.btnEdit]}
            onPress={() => {
              setModalVisibleIn(true);
              editIntelligence(id);
            }}>
            <Text style={styles.btnText}>Editar</Text>
          </Pressable>
          <Pressable
            style={[styles.btn, styles.btnDeleteOne]}
            onPress={() => {
              setModalVisibleIn(true);
              
            }}>
            <Text style={styles.btnText}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  label: {
    color: "#000000",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 10,
  },
  text: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  date_format: {
    color: "#000000",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEdit: {
    backgroundColor: "#0090D0",
  },
  btnDeleteOne: {
    backgroundColor: "#E63D17",
  },
  btnText: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
    color: "#FFFFFF",
  },
});
