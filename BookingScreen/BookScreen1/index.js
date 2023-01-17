import { View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { styles } from "./styles"

export default function BookScreen1({navigation}){

    return(
    
        <View style={styles.container1}>
            
            <View style={styles.inputFiled}>

                <TextInput style={styles.locationseatch}

                    placeholder="Pick up at:"
                
                />

                <TextInput style={styles.locationseatch}

                placeholder="Drop off at:"

                />

            </View>

            <View style={styles.option1}>
                
                <View></View>
                
                </View>

        </View>



)}