import {View, TouchableOpacity, Image, FlatList, Text} from 'react-native';
import { Background, Heading, ContactCard, ContactNumber } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CityParams } from '../../@types/navigation';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo.png'
import { useEffect, useState } from 'react';
import { ContactCardProps } from '../../components/ContactCard';

export function City() {
    const [contacts, setContacts] = useState<ContactCardProps[]>([])
    const [contactNumberSelected, setContactNumberSelected] = useState('');
    const route = useRoute();
    const city = route.params as CityParams;
    const navigation = useNavigation();


    function handleGoBack(){
        navigation.goBack()
    }

    useEffect(() => {
        fetch(`http://192.168.0.31:3000/recommendations/getByCity/${city.id}`)
        .then(response =>response.json())
        .then(data => setContacts(data))
    }, []);

    async function getReviewContact(adsId: string) {
        fetch(`http://192.168.0.31:3000/reviews/get/${adsId}`)
          .then(response => response.json())
          .then(data => setContactNumberSelected(data.phone))
      }

    return (
        <Background >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo 
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />

                    </TouchableOpacity>
                    <Image
                        source={logoImg}
                        style={styles.logo}
                    />
                    <View style={styles.right} />
                </View>
                <Image
                    source={{uri: city.bannerUrl}}
                    style={styles.cover}
                    resizeMode="cover"
                />
                <Heading
                title={city.title}
                subtitle="Contatos recomendados" />
                <FlatList
                    data={contacts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ContactCard
                        data={item}
                        onConnect={() => getReviewContact(item.id)}
                        />
                    )}
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={[contacts.length > 0 ? styles.contentList : styles.emptyListContent ]}
                    showsHorizontalScrollIndicator
                    ListEmptyComponent={
                        <Text style={styles.emptyListText}>
                        Não há reviews publicados ainda.
                        </Text>
                    }
                    />
            <ContactNumber
                visible={contactNumberSelected.length >0}
                phone={contactNumberSelected}
                onClose={()=>setContactNumberSelected('')}
            />
            </SafeAreaView>
        </Background >
    )
}