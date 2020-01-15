

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (

    <View style={styles.sectionContainer}>
      <ScrollView>
        <Text style={styles.sectionTitle}>My New App</Text>
        <Text style={styles.sectionDescription}>
          My Project will be the best
        </Text>
      </ScrollView>
    </View>



  );
};

const styles = StyleSheet.create({


  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },

});

export default App;
