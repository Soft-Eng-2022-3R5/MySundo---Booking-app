import { View,Text, Image, TouchableOpacity,StatusBar,TextInput,Alert, Platform,Button } from "react-native"
import { React,useState,useRef } from "react"
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FlatList } from "react-native-gesture-handler";



export default function Suscreen3({navigation}){


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
let fTime = 'Hours:' + tempDate.getHours() + '| Minutes' + tempDate.getMinutes();
setText(fDate + '\n' + fTime)
setAdlaw(fDate)
    // console.log(fDate + '('+ fTime + ')')
    console.log(fDate)

    
}

const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
}

const [adlaw, setAdlaw] = useState();

const provinces= [

    {province:'Misamis Oriental',code:'9000-9025',iso:'PH-MSR'},
    {province:'Davao Occidental',code:'8011-8015',iso:'PH-DVO'},
    {province:'Sorsogon',code:'4700-4715',iso:'PH-SOR'},
    {province:'Surigao del sur',code:'8300-8319',iso:'PH-SUR'},
    {province:'Cotabato',code:'9400-9417',iso:'PH-NCO'},
];

const [textcolor,setTextcolor] = useState('gray')
const [selectedProvince,setSelectedProvince] = useState('Province');
const [isclicked, setIsclicked] = useState(false);
const [data,setData] = useState(provinces)
const searchRef=useRef();
const onSearch=(txt)=>{

    if(txt !== ''){
        let temData=data.filter(item=>{
            return item.province.toLowerCase().indexOf(txt.toLowerCase())>-1;
        });
        setData(temData);
    }
    else{
        setData(provinces);
    }

};
    return(

        <View style={styles.containter}>
            
            <Image style={styles.bgstyle}
                source={require('../../assets/background2.jpg')}
                resizeMode='cover'
            />

            <View style={styles.logostyle}>

                <Text style={styles.fontstyle1}>SIGN UP</Text>
                <Text style={{fontFamily:'Roboto',fontSize:14}}>Create a new account</Text>
            </View>

           
            <View style={styles.pannel1}>


                <View style={styles.inputstyle}>


                    <View style={styles.inputfieldicon}>
                        <Icon style = {{alignSelf:'center',top:9}} 
                        name={'user-alt'} size={20} color={'#4F4E57'} />
                    </View>

                        <TextInput style={styles.inputfield}

                            placeholder='First name'
                            textContentType="string"
                        />

                    <View style={styles.inputfieldicon}>
                        <Icon style = {{alignSelf:'center',top:9}} 
                        name={'user-alt'} size={20} color={'#4F4E57'} />
                    </View>

                        <TextInput style={styles.inputfield}

                            placeholder='Last name'
                            textContentType="string"
                         />

                    <View style={styles.inputfieldicon}>
                        <Icon style = {{alignSelf:'center',top:9}} 
                        name={'home'} size={20} color={'#4F4E57'} />
                    </View>

                        <TextInput style={styles.inputfield}

                            placeholder='House no./Street name/barangay'
                            textContentType="string"
                         />
                    
                    <View style={styles.inputfieldicon}>
                        <Icon style = {{alignSelf:'center',top:9}} 
                        name={'globe'} size={20} color={'#4F4E57'} />
                        
                    </View>

                    <TouchableOpacity style={styles.inputfield}
                        onPress={()=>{
                            setIsclicked(!isclicked);

                        }}>

                        <Text style={{fontSize:14,fontFamily:'Roboto', top:8, color:textcolor}}
                                      >{selectedProvince}</Text>
                        {isclicked?(<Icon style = {styles.dropdownmenu} 
                            name={'chevron-up'} size={20} color={'black'} />):(
                                <Icon style = {styles.dropdownmenu} 
                            name={'chevron-down'} size={20} color={'black'} />
                            )}
                    </TouchableOpacity>
                        {isclicked ? (
                        <View style={styles.dropdownarea}>
                            
                            <TextInput style={styles.searchinput}
                                ref={searchRef}
                                placeholder='Search' 
                                onChangeText={(txt)=>{
                                    onSearch(txt);
                                }}/>

                            <FlatList data={data} renderItem={({item,index})=>{
                                return(
                                    <TouchableOpacity style={styles.provinceitem} onPress={()=>{
                                        setSelectedProvince(item.province);
                                        onSearch('');
                                        setIsclicked(false);
                                        setTextcolor('black')
                                        searchRef.current.clear()
                                    }}>
                                        <Text style={styles.fontstyle2}>{item.province}</Text>
                                    </TouchableOpacity>
                                )

                            }}/>
                               
                        </View>): (null)}


                {/* ang next is para sa city idk unsaon pag code */}
                
                       




                </View>

            {/* <View style={{top:60}}>
            <Button title = 'TimePicker' onPress={() => showMode('date')}/>
            </View>
           
            {show && (
                
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                display='default'
                onChange={onChange}
                
                />

            )} */}
                


            </View>

            <View style={styles.backbutton}>


                    

            </View>



        </View>

    )}