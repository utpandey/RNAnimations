import React, {useState} from 'react';
import {Animated, View, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const value = useState(new Animated.Value(0))[0];
  const opacity = useState(new Animated.Value(0))[0];

  function moveBall() {
    // Animated.timing(value, {
    //   toValue: {x: 10, y: 10},
    //   duration: 1000,
    //   useNativeDriver: false,
    // }).start();
    Animated.timing(value, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  function Fade_In_Ball() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }
  function Fade_Out_Ball() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                opacity,
                backgroundColor: 'red',
                // transform: [{translateX: value}],
              },
            ]}
          />
          <TouchableOpacity onPress={Fade_In_Ball}>
            <Text>Fade-In!.!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Fade_Out_Ball}>
            <Text>Fade-Out!.!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default App;
