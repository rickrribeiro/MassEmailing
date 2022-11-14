import { Text, TouchableOpacity, View } from 'react-native';
import { WhatsappLogo } from "phosphor-react-native";

import { ContactInfo } from "../ContactInfo";

import { styles } from './styles';
import { THEME } from "../../theme";

export interface ContactCardProps {
  id: string;
  user: Object,
  description: string,
  name: string
}

interface Props {
  data: ContactCardProps;
  onConnect: () => void;
}

export function ContactCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <ContactInfo
        label="Descrição"
        value={`${data.description}`}
      />

      <ContactInfo
        label="Usuário"
        value={`${data.user?.username}`}
      />

      <ContactInfo
        label="Criação"
        value={`${data.createdAt}`}
        colorValue={THEME.COLORS.SUCCESS}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <WhatsappLogo
          color={THEME.COLORS.TEXT}
          size={20}
        />

        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}