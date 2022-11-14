import { useState } from "react";
import { Modal, ModalProps, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from "phosphor-react-native";
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from "../../theme";
import { Heading } from "../Heading";

interface Props extends ModalProps {
  phone: string;
  onClose: () => void;
}

export function ContactNumber({ phone, onClose, ...rest }: Props) {
  const [isCoping, setIsCoping] = useState(false);

  async function handleCopyContactToClipboard() {
    setIsCoping(true);
    await Clipboard.setStringAsync(phone);

    Alert.alert('Contato Copiado!', 'O numero de contato foi copiado.');
    setIsCoping(false);
  }

  return (
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            title="Recomendação!"
            subtitle="Agora é só entrar em contato!"
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>
            Copiar contato
          </Text>

          <TouchableOpacity
            style={styles.phoneButton}
            onPress={handleCopyContactToClipboard}
            disabled={isCoping}
          >
            <Text style={styles.phone}>
              {isCoping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : phone}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}