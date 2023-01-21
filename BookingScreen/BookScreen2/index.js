import { useState } from "react";
import { View,TextInput,TouchableOpacity,Text,Image,StatusBar } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from "./styles"
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BookScreen2({navigation}){

const [bordercolor,setBordercolor] = useState('#f9feff');
const [bordercolor1,setBordercolor1] = useState('#f9feff');

const[datedisplay, setDatedisplay] = useState ('00/00/0000');
const [date, setDate] = useState(new Date());    
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);
const [text, setText] = useState("Empty");

const onChange = (event, selectedDate) => {
    setShow(!Platform.OS === 'android');
    const currentDate = selectedDate || date;
    setDate(currentDate);


let tempDate = new Date(currentDate);
let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
setText(fDate + '\n' + fTime)
setAdlaw(fDate)
    //console.log(fDate + '('+ fTime + ')')
    console.log(fDate)
    setDatedisplay(fDate)
    setOras(fTime)
}

const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
}

const [adlaw, setAdlaw] = useState();
const [oras, setOras] = useState('00:00');

    return(
    
        <View style={styles.container1}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent"/>
            <View style={styles.option1}>

                <TextInput style={styles.searchlocation}
                    editable={false}
                    value='Select Pick up location'
                
                />
      
                <Text style={styles.fontstyle1}>Pick up at:</Text>
                
                <TouchableOpacity style={styles.button2} onPress={()=>{navigation.navigate('MapScreen')}}>
                <Icon 
                name={'right'} size={32} color={'#7A7A7A'} />
                </TouchableOpacity>

                <View style={styles.line1}/>

                <TextInput style={styles.searchlocation}
                    editable={false}
                    value='Select Drop off location'
                
                />
      
                <Text style={styles.fontstyle1}>Drop of at:</Text>

                <TouchableOpacity style={styles.button3} onPress={()=>{navigation.navigate('MapScreen')}}>
                <Icon 
                name={'right'} size={32} color={'#7A7A7A'} />
                </TouchableOpacity>

                </View>

            <View style={styles.option2}>

                <Image style={styles.icon1} 
                source={require('../../assets/Note.png')} 
                resizeMode='contain'/>                
              
                <Text style={styles.fontstyle2}>Write a note to Sundo Driver</Text>
                
                <TouchableOpacity style={styles.button1}>
                <Icon 
                name={'right'} size={32} color={'#7A7A7A'} />
                </TouchableOpacity>

            </View>

        
            <View style={styles.option3}>

            <Image style={styles.icon2}
                source={require('../../assets/Wallet.png')} resizeMode='contain'/>



            <TouchableOpacity style={styles.cashbutton}>
                <Text style={styles.fontstyle3}>Cash</Text>
            </TouchableOpacity>


            <Image style={styles.icon3}
                source={require('../../assets/Clock.png')} resizeMode='contain'/>
            
            
                {/* <Text style={styles.fontstyle4}>00/00/000</Text> */}

                <TouchableOpacity style = {styles.datestyle} 
                    onPress = {()=>{ showMode('date')}}
                >
                                
                        <Text style={styles.fontstyle4}>{datedisplay}</Text>
                      
                </TouchableOpacity>

                <TouchableOpacity style = {styles.timestyle} 
                    onPress = {()=>{ showMode('time')}}
                >
                                
                        <Text style={styles.fontstyle4}> {oras}</Text>
                      
                </TouchableOpacity>

                {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
                />
    
                )}
            </View>

            <View style={styles.line2}/>

            <Text style={styles.fontstyle5}>Payment method</Text>
            <Text style={styles.fontstyle6}>Date and time</Text>
            <Text style={styles.fontstyle7}>Select type of Sundo Vechicle</Text>

            <View style={styles.option4}>

                < TouchableOpacity style={{backgroundColor:'white',
                                width:'25%',
                                height:'85%',
                                marginTop:'2.5%',
                                borderRadius:10,
                                elevation:4,
                                borderColor:bordercolor,
                                borderWidth:1.5,
                                flexDirection:'column'}}
                                
                                onPress={()=>{ setBordercolor('#00FC47'), setBordercolor1('#f9feff')}}
                                >

                    <Image style={styles.motorlogo}
                source={require('../../assets/motor.png')} resizeMode='contain'/>
                    <Text style={{textAlign:'center',top:'-5%',fontWeight:'bold'}}>Motorcycle</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'white',
                                width:'25%',
                                height:'85%',
                                marginTop:'2.5%',
                                borderRadius:10,
                                elevation:4,
                                borderColor:bordercolor1,
                                borderWidth:1.5,
                                flexDirection:'column'}}

                                onPress={()=>{ setBordercolor('#f9feff'), setBordercolor1('#00FC47')}}
                                >

                    <Image style={styles.carlogo}
                    source={require('../../assets/Car.png')} resizeMode='contain'/>
                    <Text style={{textAlign:'center',fontWeight:'bold'}}>Car</Text>
                </TouchableOpacity>

                <View style={{backgroundColor:'white',
                                width:'25%',
                                height:'85%',
                                marginTop:'2.5%',
                                borderRadius:10,
                                elevation:4,
                                borderColor:'white',
                                borderWidth:1.5,
                                flexDirection:'column'}}>

                <Text style={{textAlign:'center',top:'30%',fontWeight:'bold'}}>Comming soon!</Text>
                </View>
               
            </View>
                
                <View style={styles.locationicon}>
                    <Image style={{alignSelf:'center',height:'100%'}}
                    source={require('../../assets/locationicon.png')} resizeMode='contain'/>
                </View>   

                <Text style={styles.fontstyle8}>TOTAL: 00.00</Text>


                <TouchableOpacity style={styles.bookbutton} onPress={()=>{navigation.goBack()}}>
                    <Image style={styles.bookbuttonstyle}
                    source={require('../../assets/button.png')} resizeMode='cover'/>
                        <Text style={styles.textstylebutton}>BOOK</Text>
                </TouchableOpacity>


        </View>



)}