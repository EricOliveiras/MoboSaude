import {StyleSheet} from "react-native";
import {themes} from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.teaGreen, // Tea Green
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxMid: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxBottom: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    textTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    button: {
        display: 'flex',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes.emerald, // Emerald
        padding: 20,
        marginTop: 30,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    viewStartText: {
        fontSize: 22,
        marginRight: 15
    },
    foot: {
        display: 'flex',
        flexDirection: 'row',
    },
    link: {
        color: themes.lapisLazuli, // Lapis Lazuli
        textDecorationLine: 'underline',
        fontSize: 16,
    },
});