import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default API_Screen_01 = ({ navigation }) => {
  const [email, setEmail] = useState([]);
  const [emailInput, setEmailInuput] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);
  var url = 'https://670b3e51ac6860a6c2cb8625.mockapi.io/Teacher';
  useEffect(() => {
    var getAllEmail = fetch(url);
    getAllEmail
      .then((res) => res.json())
      .then((data) => {
        setEmail(data);
      });
  }, []);

  let c = emailInput;
  var cEmail = () => {
    var emInput = emailInput;
    console.log(emInput);
    const found = email.some((ele) => ele.email === emInput);
    console.log(checkEmail);
    if (found) {
      setCheckEmail(true);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/imgs/Logo.png')} style={styles.imgLogo} />
      <View style={styles.frameTitle}>
        <Text style={styles.txtContent}>MANAGE YOUR</Text>
        <Text style={styles.txtContent}>TASK</Text>
      </View>
      <View style={styles.frameEmail}>
        <View style={styles.frameImage}>
          <Image source={require('./assets/imgs/mail.png')} />
        </View>
        <TextInput
          value={emailInput}
          onChangeText={(text) => setEmailInuput(text)}
          style={styles.txtEmail}
          placeholder="Enter your email"></TextInput>
      </View>
      <View style={styles.frameBtnStart}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('API_Screen_02')
            cEmail();
          }}
          style={styles.btnStarted}>
          <Text style={styles.txtStarted}>
            GET STARTED
            <Image
              style={styles.imgNext}
              source={require('./assets/imgs/next.png')}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width: 390,
    height: 845,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white',
  },
  frameTitle: {
    width: '100%',
    height: 65,
  },
  txtContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(131, 83, 226, 1)',
  },
  frameEmail: {
    width: 334,
    height: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
  },
  txtEmail: {
    width: '85%',
    height: '100%',
  },
  imgLogo:{
    width:271,
    height:271,
  },
  frameImage: {
    width: 20,
    height: 20,
    display: 'flex',
    top: 5,
    left: 10,
  },
  frameBtnStart: {
    width: 190,
    height: 44,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    borderColor: 'black',
    background: 'rgba(0, 189, 214, 1)',
    borderRadius: 10,
  },
  btnStarted: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgNext: {
    width: 20,
    height: 20,
    top: 5,
    left: 5,
  },
  txtStarted: {
    fontSize: 18,
    color: 'white',
  },
});
