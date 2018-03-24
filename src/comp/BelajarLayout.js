import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (

      <View style={styles.containerMain}>
        <View style={styles.statusbar} />
          <View style={styles.box1}>
            <Text style={styles.center}>Pendidikan Teknik Informatika</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.center}>Ini Slider</Text>
          </View>
          <View style={styles.box3}>
            <View style={styles.button}><Text style={styles.text}>1</Text></View>
            <View style={styles.button}><Text style={styles.text}>2</Text></View>
            <View style={styles.button}><Text style={styles.text}>3</Text></View>
            <View style={styles.button}><Text style={styles.text}>4</Text></View>
          </View>
          <View style={styles.box4}>
            <View style={styles.button}><Text style={styles.text}>5</Text></View>
            <View style={styles.button}><Text style={styles.text}>6</Text></View>
            <View style={styles.button}><Text style={styles.text}>7</Text></View>
            <View style={styles.button}><Text style={styles.text}>8</Text></View>
          </View>

          <View style={styles.box1}>
            <Text style={styles.center}>#JaenKuliahDiPTI</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#F5F5F5',
    flex: 1
  },
  statusbar: {
    backgroundColor: '#1A237E',
    height: 26
  },
  box1: {
    flex: 1,
    backgroundColor: '#303F9F',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    flex: 4,
    backgroundColor: '#C5CAE9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    flex: 2,
    backgroundColor: '#C5CAE9',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  box4: {
    flex: 2,
    backgroundColor: '#C5CAE9',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303F9F', 
    borderRadius: 3.0
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  center: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'center',
  }

});
