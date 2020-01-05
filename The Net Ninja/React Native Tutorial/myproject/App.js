import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SchrollView, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import SandBox from './components/sandbox'

// React Native Tutorial #14 - Flexbox Basics
// React Native Tutorial #13 - Dismissing the Keyboard
// React Native Tutorial #12 - Alerts
// React Native Tutorial #11 - Todo App (part 3)
// React Native Tutorial #10 - Todo App (part 2)
// React Native Tutorial #9 - Todo App (part 1)

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((preTodos) => {
        return [
          { text, key: Math.random().toString() },
          ...preTodos
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }
  }

  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});

// React Native Tutorial #8 - Touchable Components

// React Native Tutorial #7 - Flat List Component

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: 'shaun', id: '1' },
//     { name: 'yoshi', id: '2' },
//     { name: 'mario', id: '3' },
//     { name: 'luigi', id: '4' },
//     { name: 'peach', id: '5' },
//     { name: 'toad', id: '6' },
//     { name: 'bowser', id: '7' }
//   ]);

//   const pressHandler = (id) => {
//     console.log(id);
//     setPeople((prevPeople) => {
//       return prevPeople.filter(person => person.id != id);
//     })
//   }

//   return (
//     <View style={styles.container}>

//       <FlatList 
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({item}) => (
//           <TouchableOpacity onPress={() => pressHandler(item.id)}>
//             <Text style={styles.item}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />

//       {/* <ScrollView>
//         {people.map(item => (
//           <View>
//             <Text style={styles.item}>{item.name}</Text>
//           </View>
//         ))}
//       </ScrollView> */}

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize: 24,
//     marginHorizontal: 10,
//     marginTop: 24
//   }
// });

// React Native Tutorial #6 - Lists & ScrollView 

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: 'shaun', key: '1' },
//     { name: 'yoshi', key: '2' },
//     { name: 'mario', key: '3' },
//     { name: 'luigi', key: '4' },
//     { name: 'peach', key: '5' },
//     { name: 'toad', key: '6' },
//     { name: 'bowser', key: '7' }
//   ]);
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {people.map(item => (
//           <View>
//             <Text style={styles.item}>{item.name}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize: 24
//   }
// });

// React Native Tutorial #5 - Text Inputs

// export default function App() {
//   const [name, setName] = useState('shaun');
//   const [age, setAge] = useState('30');
//   return (
//     <View style={styles.container}>
//       <Text>Enter name:</Text>
//       <TextInput
//         multiline
//         style={styles.input}
//         placeholder='e.g. John Doe'
//         onChangeText={(val) => setName(val)} />
//       <Text>Enter age:</Text>
//       <TextInput
//         keyboardType='numeric'
//         style={styles.input}
//         placeholder='e.g. 99'
//         onChangeText={(val) => setAge(val)} />
//       <Text>name: {name}, age: {age}</Text>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#777',
//     padding: 8,
//     margin: 10,
//     width: 200,
//   }
// });

// React Native Tutorial #4 - Using State

// export default function App() {
//   const [name, setName] = useState('shaun');
//   const [person, setPerson] = useState({ name: 'mario', age: 40 });
//   const clickHandler = () => {
//     setName('chun-li');
//     setPerson({ name: 'luigi', age: 45 })
//   }
//   return (
//     <View style={styles.container}>
//       <Text>My name is {name}</Text>
//       <Text>His name is {person.name} and his age is { person.age }</Text>
//       <View style="styles.buttonContainer">
//         <Button title='update state' onPress={clickHandler} />
//       </View>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     marginTop: 20
//   }
// });


// React Native Tutorial #3 - Views, Text & Styles

// export default function App() {
//   const [name, setName] = useState('shaun');
//   const [age, setAge] = useState('30');
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.boldText}>Hello, World</Text>
//       </View>
//       <View style={styles.body}>
//         <Text style={styles.boldText}>Lorem ipsum <Text>test</Text> dolor sit amet.</Text>
//         <Text>Lorem ipsum dolor sit amet.</Text>
//         <Text>Lorem ipsum dolor sit amet.</Text>
//       </View>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     backgroundColor: 'pink',
//     padding: 20
//   },
//   boldText: {
//     fontWeight: 'bold'
//   },
//   body: {
//     backgroundColor: 'yellow',
//     padding: 20,
//     fontWeight: 'bold' // Text dont inherit
//   }
// });
