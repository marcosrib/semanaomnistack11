import React from 'react';
import { View, TouchableOpacity, Text, Image, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logo from '../../../assets/logo.png';

export default function Detail() {

  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = 'Ola bal bal bal';

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
   MailComposer.composeAsync({
     subject: `Herói do caso: Cadelinha `,
     recipients: ['marocos.rib.sousa@gmail.com'],
     body: message
   })
  }

  function sendWahtsapp() {
    Linking.openURL(`whatsapp://send?phone=55110000000=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name='arrow-left' size={20} color='#E82041' />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>

      </View>
      <View style={styles.contactBox}>

        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWahtsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
