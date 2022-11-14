import { ImageBackground } from "react-native";
import backgoundImg from '../../assets/bg.jpg'
import { styles } from './styles'

interface Props {
    children: React.ReactNode
}

export function Background({children}: Props){
    return(
        <ImageBackground 
            source={backgoundImg}
            style={styles.container}
            defaultSource={backgoundImg}
            imageStyle={styles.image}
        >
            {children}
        </ImageBackground>

    );
}