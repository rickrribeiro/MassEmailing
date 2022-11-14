import { FlatList, Image, View } from 'react-native';
import { styles } from './styles'
import { Background, Heading } from '../../components';
import logoImg from '../../assets/logo.png'
import { CityCard, CityCardProps } from '../../components/CityCard';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native'


export function Home(){
    
    const [cities, setCities] = useState<CityCardProps[]>([]);

    const navigation = useNavigation()
    function handleOpenCity({id, title, bannerUrl}: CityCardProps){
        navigation.navigate('city', {id, title, bannerUrl});
    }

    useEffect(() => {
        fetch('http://192.168.0.31:3000/cities/getAll')
        .then(response =>response.json())
        .then(data => setCities(data))
    }, []);

    
    return(
        <Background >
            <SafeAreaView style={styles.container}>
                <Image source={logoImg}
                        style={styles.logo}/>
                        <Heading
                            title="Cidades em alta!"
                            subtitle="Selecione a cidade que você quer morar!"
                />

                {/* keyExtractor é p definir qual attr vai ser utilizado como idx */}
                <FlatList 
                data= {cities}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <CityCard
                    data={item}
                    onPress={() => handleOpenCity(item)}/>
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentList}
                horizontal/>
            
                        
            </SafeAreaView>
        </Background >
    );
}