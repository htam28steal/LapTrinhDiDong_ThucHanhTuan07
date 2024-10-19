import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

var url = 'https://670b3e51ac6860a6c2cb8625.mockapi.io/Todo';
var obj = { title: 'Thanh Tâm', img: 'picture 22' };
var fnADD = () => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  console.log('OK')
};
var fnDELETE = () => {
  fetch(url.concat('/') + 31, {
    method: 'DELETE',
  });
    console.log('OK')
};
var fnUpdate = () =>{
  fetch(url.concat("/") + 30, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title:'Yêu Em Nhất', img : 'hehe'}),
    })
};

const App = () => {
  const [DATA, setData] = useState([]);

  useEffect(() => {
    var fn = fetch('https://670b3e51ac6860a6c2cb8625.mockapi.io/Todo');
    fn.then((res) => res.json()).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity onPress={fnADD}>
        <Text>ADD</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fnDELETE}>
        <Text>DELETE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fnUpdate}>
        <Text>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 400,
    borderColor: 'black',
    borderWidth: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
