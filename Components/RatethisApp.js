
import React,{useState} from 'react'

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';
  
  const App = () => {
    // To set the default Star Selected
    const [defaultRating, setDefaultRating] = useState(1);
    // To set the max number of Stars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  
    const CustomRatingBar = () => {
      return (
        <View style={styles.customRatingBarStyle}>
          {maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.4}
                key={item}
                onPress={() => setDefaultRating(item)}>
                <Image
                  style={styles.starImageStyle}
                  source={
                    item <= defaultRating
                      ? require('../assets/RatingStar.png') 
                      : require('../assets/RatingStarGrayScale-removebg-preview.png') 
                  }
                />
              </TouchableOpacity>
            );
          })}
        </View>
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>How was your experience with us</Text>
          <Text style={styles.textStyleSmall}>Please Rate Us</Text>
          <CustomRatingBar />
          <Text style={styles.textStyle}>
            
            {defaultRating} / {Math.max.apply(null, maxRating)}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => alert('ThankYou')}>

            <Text style={styles.buttonTextStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
      justifyContent: 'center',
      textAlign: 'center',
    },
    titleText: {
      padding: 8,
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 23,
      color: '#000',
      marginTop: 15,
    },
    textStyleSmall: {
      textAlign: 'center',
      fontSize: 16,
      color: '#000',
      marginTop: 15,
    },
    buttonStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 30,
      padding: 15,
      backgroundColor: '#400826',
    },
    buttonTextStyle: {
      color: '#fff',
      textAlign: 'center',
    },
    customRatingBarStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 30,
    },
    starImageStyle: {
      width: 40,
      height: 40,
      resizeMode: 'cover',
    },
  });
  

 

