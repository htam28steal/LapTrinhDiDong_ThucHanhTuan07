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

export default API_Screen_03 = ({navigation}) => {
  [job, setJob] = useState(['']);
  var addJob = async () => {
    var url = 'https://670b3e51ac6860a6c2cb8625.mockapi.io/Teacher';
    var obj = { content: job };
     await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    }).then((respone) => {
      if (respone.ok) {
        return true;
      } else {
        return false;
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.frameHeader}>
        <View style={styles.frameIconBack}>
          <TouchableOpacity style={styles.icons} onPress={()=>{navigation.goBack()}}><Image
            source={require('./assets/imgs/back.png')}
            style={styles.icons}
          />
           </TouchableOpacity>
        </View>
        <View style={styles.frameDetail}>
          <View style={styles.frameAvarta}>
            <Image
              source={require('./assets/imgs/avatar.png')}
              style={styles.avatar}
            />
          </View>
          <View style={styles.frameName}>
            <Text style={styles.name}>Hi Twinkle</Text>
            <Text style={styles.des}>Have agrate day a head</Text>
          </View>
        </View>
      </View>
      <View style={styles.frameTitle}>
        <Text style={styles.title}>ADD YOUR JOB</Text>
      </View>
      <View style={styles.frameJob}>
        <View style={styles.frameIconJob}>
          <Image
            source={require('./assets/imgs/job.png')}
            style={styles.iconJob}
          />
        </View>
        <TextInput
          value={job}
          onChangeText={(text) => {
            setJob(text);
          }}
          style={styles.txtJob}
          placeholder="input your job"></TextInput>
      </View>

      <View style={styles.frameBtnAdd}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => {
            const result =  addJob();
            if (result) {
               navigation.navigate('API_Screen_02');
            }
          }}>
          <Text style={styles.txtAdd}>FINISH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 390,
    height: 640,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-between',
  },
  frameHeader: {
    display: 'flex',
    width: '100%',
    height: 50,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  frameIconBack: {
    width: 36,
    height: 36,
  },
  icons: {
    width: '100%',
    height: '100%',
  },
  frameDetail: {
    display: 'flex',
    width: '70%',
    height: '100%',
    flexDirection: 'row',
  },
  frameAvarta: {
    display: 'flex',
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: 'rgba(217, 203, 246, 1)',
  },
  avatar: {
    display: 'flex',
    width: '80%',
    height: '80%',
  },
  frameName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
  },
  des: {
    fontSize: 14,
    fontWeight: 600,
    color: 'grey',
  },
  frameTitle: {
    display: 'flex',
    width: 228,
    height: 48,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  frameJob: {
    display: 'flex',
    width: 334,
    height: 44,
    borderRadius: 4,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
  },
  frameIconJob: {
    width: 26,
    height: 26,
  },
  iconJob: {
    width: '100%',
    height: '100%',
  },
  txtJob: {
    width: '90%',
    height: '100%',
  },
  frameBtnAdd: {
    display: 'flex',
    width: 190,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(0, 189, 214, 1)',
  },
  btnAdd: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtAdd: {
    fontSize: 20,
    color: 'white',
    fontWeight: 600,
  },
});
