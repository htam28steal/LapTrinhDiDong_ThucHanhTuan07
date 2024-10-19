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

export default API_Screen_02 = ({ navigation }) => {
  [DATA, setData] = useState(['']);
  var url = 'https://670b3e51ac6860a6c2cb8625.mockapi.io/Teacher';
  useEffect(() => {
    var fn = fetch(url);
    fn.then((res) => res.json()).then((data) => setData(data));
  }, []);

  const Item = ({ items }) => {
    return (
      <View style={styles.frameCourse}>
        <View style={styles.frameCheck}>
          <Image
            source={require('./assets/imgs/check.png')}
            style={styles.check}
          />
        </View>
        <Text style={styles.name}>{items.content}</Text>
        <View style={styles.frameBtnControl}>
          <TouchableOpacity style={styles.btnEdit}>
            <Image
              source={require('./assets/imgs/recyclebin.png')}
              style={styles.check}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEdit}>
            <Image
              source={require('./assets/imgs/btnEdit.png')}
              style={styles.check}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.frameHeader}>
        <View style={styles.frameIconBack}>
          <TouchableOpacity
            style={styles.icons}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
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
      <View style={styles.frameSearch}>
        <View style={styles.frameIconSearch}>
          <Image
            source={require('./assets/imgs/search.png')}
            style={styles.iconSearch}
          />
        </View>
        <TextInput style={styles.txtSearch} placeholder="Search"></TextInput>
      </View>
      <View style={styles.frameList}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item items={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.frameBtnAdd}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.push('API_Screen_03')}>
          <Text style={styles.txtAdd}>+</Text>
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
    justifyContent: 'space-between',
    padding: 10,
  },
  frameHeader: {
    display: 'flex',
    width: '100%',
    height: 60,
    padding: 10,
    flexDirection: 'row',
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
  frameSearch: {
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
  frameIconSearch: {
    width: 26,
    height: 26,
  },
  iconSearch: {
    width: '100%',
    height: '100%',
  },
  txtSearch: {
    width: '90%',
    height: '100%',
  },
  frameList: {
    width: 334,
    height: 410,
  },
  frameCourse: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: 48,
    alignItems: 'center',
    padding: 15,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 24,
    marginTop: 10,
    backgroundColor: 'rgba(222, 225, 230, 0.47)',
  },
  frameCheck: {
    width: 24,
    height: 24,
    borderColor: 'black',
    borderWidth: 1,
  },
  check: {
    width: '100%',
    height: '100%',
  },
  frameBtnControl: {
    display: 'flex',
    width: 58,
    height: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btnEdit: {
    width: 24,
    height: 24,
  },
  frameBtnAdd: {
    display: 'flex',
    width: 69,
    height: 69,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 189, 214, 1)',
    borderRadius: '50%',
  },
  btnAdd: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtAdd: {
    fontSize: 30,
    color: 'white',
    fontWeight: 600,
  },
});
