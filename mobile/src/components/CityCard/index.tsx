
import { Text, TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';

export interface CityCardProps {
  id: string;
  title: string;
  _count: { reviews: string };
  bannerUrl: string
}


interface Props extends TouchableOpacityProps {
  data: CityCardProps
}



export function CityCard({ data, ...rest }: Props) {
  return (
    // ...rest p jogar as outras props desconhecidas
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.bannerUrl }}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>
          <Text style={styles.reviews}>
            {data._count.reviews} reviews
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}