import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCallback, useState } from "react";
import * as Contacts from "expo-contacts";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as Battery from 'expo-battery';

export default function ContactInfo() {
  const [contacts, setContacts] = useState();

  async function carregarContatos() {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
    });

    setContacts(data);
    console.log(data);
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          carregarContatos();
        }
      })();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header title="Informações do Aparelho" />

      <View style={styles.content}>
        {contacts ? (
          <FlatList
            style={{ flex: 1, gap: 10 }}
            data={contacts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Item item={item} />}
          />
        ) : (
          <Text>Não for possível carregar os contatos</Text>
        )}
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  content: {
    flex: 1,
    gap: 20,
    padding: 20,
  },
  contentTextStyle: {
    padding: 5,
    textAlignVertical: "center",
    minHeight: 50,
    backgroundColor: "#969",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#888",
    paddingHorizontal: 25,
    padding: 20,
  },
});