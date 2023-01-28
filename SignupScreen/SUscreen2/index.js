import { View,Text, Image, TouchableOpacity,StatusBar,SafeAreaView, ScrollView,
        TextInput as Firstname,
        TextInput as Lastname,
        TextInput as Homeaddress,
        TextInput,
        Alert, Platform,Button 
} from "react-native"

import { React,useState,useRef } from "react"
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FlatList } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import axios from "../../plugin/axios";
import urid from 'urid';

export default function SUscreen2({navigation,route}){

let useremail_password=route.params;

const[datedisplay, setDatedisplay] = useState ('Birthdate');
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
    //console.log(fDate)
    setDatedisplay(fDate)
    
}

const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
}

const [adlaw, setAdlaw] = useState('');

const provinces= [

    {province:'Misamis Oriental',code:'9000-9025',iso:'PH-MSR'},
    {province:'Davao Occidental',code:'8011-8015',iso:'PH-DVO'},
    {province:'Sorsogon',code:'4700-4715',iso:'PH-SOR'},
    {province:'Surigao del sur',code:'8300-8319',iso:'PH-SUR'},
    {province:'Cotabato',code:'9400-9417',iso:'PH-NCO'},
];

const cities = [

    {city:'Cagayan de Oro',code:'9000-9025',iso:'PH-MSR'},
    {city:'Claveria',code:'8011-8015',iso:'PH-DVO'},
    {city:'El Salvador',code:'4700-4715',iso:'PH-SOR'},
    {city:'Balingasag',code:'8300-8319',iso:'PH-SUR'},
    {city:'Initao',code:'9400-9417',iso:'PH-NCO'},
];

// =============kani para sa province==========

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

// =============kani para sa CITY==========

const [textcolor1,setTextcolor1] = useState('gray')
const [selectedCity,setSelectedCity] = useState('City');
const [isclicked1, setIsclicked1] = useState(false);
const [data1,setData1] = useState(cities)
const searchRef1=useRef();
const onSearch1=(txt)=>{

    if(txt !== ''){
        let temData1=data1.filter(item=>{
            return item.city.toLowerCase().indexOf(txt.toLowerCase())>-1;
        });
        setData1(temData1);
    }
    else{
        setData1(cities);
        Setcity(selectedCity);
    }

};

const [miniplaceholder1,Setminiplaceholder1] = useState('');
const [miniplaceholder2,Setminiplaceholder2] = useState('');
const [miniplaceholder3,Setminiplaceholder3] = useState('');
const [miniplaceholder4,Setminiplaceholder4] = useState('');
const [miniplaceholder5,Setminiplaceholder5] = useState('');
const [miniplaceholder6,Setminiplaceholder6] = useState('');
const [miniplaceholder7,Setminiplaceholder7] = useState('');
const [miniplaceholder8,Setminiplaceholder8] = useState('');
const [miniplaceholder9,Setminiplaceholder9] = useState('');
const [miniplaceholder10,Setminiplaceholder10] = useState('');
//mini storage

const [fname,Setfname] = useState ('');
const [lname,Setlname] = useState ('');
const [homeaddress,Sethomeaddress] = useState ('');
const [province,Setprovince] = useState ('');
const [city,Setcity] = useState ('');
const [gender,setGender] = useState ('');
const [age,setAge] = useState ('');
const [weight,setWeight] = useState ('');
const [cellnum,setCellnum] = useState ('');



    return(
        
        <SafeAreaView style={styles.containter}>
            
            <StatusBar barStyle='dark-content' translucent backgroundColor='transparent'/>

           
        
            <View style={styles.pannel1}>
                 
                    <View style={styles.inputstyle}> 
                        <Firstname style={styles.inputfield}
                            placeholder='First name'
                            onChangeText={ (text)=>{
                                !text ? Setminiplaceholder1('') :
                                Setminiplaceholder1(' First Name ')
                                Setfname(text)
                            }}
                        />
                        <Text style={styles.miniplaceholder}>{miniplaceholder1}</Text>
                    </View>

                    <View style={styles.inputstyle}> 
                        <Firstname style={styles.inputfield}
                            placeholder='Last name'
                            onChangeText={ (text)=>{
                                !text ? Setminiplaceholder2('') :
                                Setminiplaceholder2(' Last Name ')
                                Setlname(text)
                            }}
                        />
                        <Text style={styles.miniplaceholder}>{miniplaceholder2}</Text>
                    </View>

                    <View style={styles.inputstyle}> 
                        <Firstname style={styles.inputfield}
                             placeholder='House no./Street name/barangay'
                            onChangeText={ (text)=>{
                                !text ? Setminiplaceholder3('') :
                                Setminiplaceholder3(' HouseNo./StreetName/Barangay ')
                                Sethomeaddress(text)
                            }}
                        />
                        <Text style={styles.miniplaceholder}>{miniplaceholder3}</Text>
                    </View>

{/* =======Daria ang para sa unsa province========  */}

                <View style={styles.inputstyle}> 
                    <TouchableOpacity style={styles.inputfield}
                        onPress={()=>{
                            setIsclicked(!isclicked);
                            Setminiplaceholder4('')
                        }}>

                        <Text style={{fontSize: RFValue(14,680),fontFamily:'Roboto', top:'20%', color:textcolor}}
                                      >{selectedProvince}</Text>
                        {isclicked?(<Image source={require('../../assets/upload.png')} style={styles.dropdownmenu} />)
                        :(<Image source={require('../../assets/dropdown.png')} style={styles.dropdownmenu} /> )}
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
                                    <TouchableOpacity style={styles.renderItem} onPress={()=>{
                                        setSelectedProvince(item.province);
                                        Setprovince(item.province)
                                        Setminiplaceholder4(' Province ')
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
                            
                        <Text style={styles.miniplaceholder}>{miniplaceholder4}</Text>
                    
                </View>

{/* =======Daria ang para sa unsa city========  */}

                <View style={styles.inputstyle}>
                <TouchableOpacity style={styles.inputfield}
                        onPress={()=>{
                            setIsclicked1(!isclicked1);
                            Setminiplaceholder5('')

                        }}>

                        <Text style={{fontSize: RFValue(14,680),fontFamily:'Roboto', top:'20%', color:textcolor1}}
                                      >{selectedCity}</Text>
                        {isclicked1?(<Image source={require('../../assets/upload.png')} style={styles.dropdownmenu} />)
                        :(<Image source={require('../../assets/dropdown.png')} style={styles.dropdownmenu} />)}
                    </TouchableOpacity>
                        {isclicked1 ? (
                        <View style={styles.dropdownarea}>
                            
                            <TextInput style={styles.searchinput}
                                ref={searchRef1}
                                placeholder='Search' 
                                onChangeText={(txt)=>{
                                    onSearch1(txt);
                                }}/>

                            <FlatList data={data1} renderItem={({item,index})=>{
                                return(
                                    <TouchableOpacity style={styles.renderItem} onPress={()=>{
                                        setSelectedCity(item.city);
                                        onSearch1('');
                                        Setcity(item.city)
                                        Setminiplaceholder5(' City ')
                                        setIsclicked1(false);
                                        setTextcolor1('black')
                                        searchRef1.current.clear()
                                    }}>
                                        <Text style={styles.fontstyle2}>{item.city}</Text>
                                    </TouchableOpacity>
                                )

                            }}/>
                               
                        </View>): (null)}
                        <Text style={styles.miniplaceholder}>{miniplaceholder5}</Text>

                </View>
                
                       
            <View style={styles.container3}>
                
                
                <TextInput style = {styles.bdayandgenderinputstyle}
                    placeholder='Gender'
                    onChangeText={ (text)=>{
                        !text ? Setminiplaceholder7('') :
                        Setminiplaceholder7(' Gender ')
                        setGender(text)
                    }}
                         
                />

                    <Text style={styles.miniplaceholder1}>{miniplaceholder7}</Text>
                 
                <TouchableOpacity style = {styles.bdayandgenderinputstyle} 
                    onPress = {()=>{ showMode('date'), Setminiplaceholder6('BirthDate')}}
                >
                                
                        <Text style={styles.datefont}>{datedisplay}</Text>
                        <Text style={styles.miniplaceholder}>{miniplaceholder6}</Text>
                </TouchableOpacity>
                
                
            </View>

            <View style={styles.container3}>
                
                <TextInput style = {styles.bdayandgenderinputstyle}
                    placeholder='Age'
                    onChangeText={ (text)=>{
                        !text ? Setminiplaceholder8('') :
                        Setminiplaceholder8(' Age ')
                        setAge(text)
                    }}       
                />
                    <Text style={styles.miniplaceholder1}>{miniplaceholder8}</Text>

                <View style={{width:'100%'}}>
                <TextInput style = {styles.bdayandgenderinputstyle}
                    placeholder='Weight'
                    keyboardType='number-pad'
                    onChangeText={ (text)=>{
                        !text ? Setminiplaceholder9('') :
                        Setminiplaceholder9(' Weight ')
                        setWeight(text)
                    }}       
                />
                    <Text style={styles.miniplaceholder1}>{miniplaceholder9}</Text>
                </View>

                    
            </View>

            <View style={styles.inputstyle}> 
                        <Firstname style={styles.inputfield}
                            placeholder='Cellphone'
                            keyboardType='number-pad'
                            maxLength={12}
                            onChangeText={ (text)=>{
                                !text ? Setminiplaceholder10('') :
                                Setminiplaceholder10(' Cellphone no. ')
                                setCellnum(text)
                            }}
                        />
                        <Text style={styles.miniplaceholder}>{miniplaceholder10}</Text>

                
            </View>
            
            <TouchableOpacity style={styles.Loginbutton} onPress={()=>{

                        if(fname==='' || lname ==='' ||homeaddress === ''|| province === '' || city === ''
                            || gender === '' || age === '' || weight === '' || cellnum === ''|| adlaw === ''){
                                
                                Alert.alert('Registration failed','Please make sure to fill up all the information.',[
                                    {text:'close', onPress: () => console.log('alert closed')},
                                
                                ]);
                            }
                        
                        else if(cellnum.length < 9){
                            Alert.alert('Invalid cellphone no.','Please make sure your cellphone number is valid.',[
                                {text:'close', onPress: () => console.log('alert closed')},
                            
                            ]);
                        }
                        else{
                            
                          axios.post('/api/insert.php', {

                            // user_id:urid(6,'num'),
                            email:useremail_password.email,
                            password: useremail_password.password,
                            first_name: fname,
                            last_name: lname,
                            home_address: homeaddress,
                            province: province,
                            city: city,
                            gender: gender,
                            birthdate: adlaw,
                            age: age,
                            weight: weight,
                            cellphone_no: cellnum,
           
                            })
                            .then(function (response) {
                            console.log(response.data)
                            navigation.navigate('LoginScreen')
                                
                            })
                            .catch(function (error) {
                                console.log(error)
                            });
                        }
                    }}>

                    <Image 
                    source={require('../../assets/button.png')} resizeMode='cover' 
                    style={styles.sample} />

                <Text style={styles.loginfont}>COMPLETE</Text>
            </TouchableOpacity>


            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                display='default'
                onChange={onChange}
                />
    
            )}
        
            </View>
            
        </SafeAreaView>

    )}