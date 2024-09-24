import {View, Text, Image, TouchableOpacity, Linking} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LogoImage from "../../public/images/logo.png"
import {FontAwesome} from "@expo/vector-icons"
import {RootStackParamList} from "../../App";
import {styles} from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, 'FrontPage'>;

export default function FrontPage({navigation}: Props) {
    const openLink = () => {
        Linking.openURL('https://www.github.com/ericoliveiras');
    };

    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image
                    source={LogoImage}
                    style={styles.logo}
                />
                <Text style={styles.textTitle}>MoboSaúde</Text>
            </View>
            <View style={styles.boxMid}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Form')}
                >
                    <Text style={styles.viewStartText}>Começar</Text>
                    <FontAwesome name="arrow-right" size={30}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxBottom}>
                <View style={styles.foot}>
                    <Text>
                        Desenvolvido por{' '}
                        <Text onPress={openLink} style={styles.link}>
                            Eric Oliveira
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}