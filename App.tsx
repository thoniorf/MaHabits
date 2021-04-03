import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import ActivitiesCardList from './ui/ActivitiesCardList/ActivitiesCardList';
import AddActivityDialog from './ui/AddActivity/AddActivityDialog';
import AddActivityFAB from './components/AddActivityFAB';
import {Provider} from 'react-redux';
import store from './store/store';

declare const global: {HermesInternal: null | {}};

const theme = {
  ...DefaultTheme,
};

const App = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Your habits</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <AddActivityDialog
                  visible={openAddDialog}
                  onDismiss={() => {
                    setOpenAddDialog(false);
                  }}
                  onSave={() => {
                    setOpenAddDialog(false);
                  }}
                />
                <ActivitiesCardList />
              </View>
            </View>
          </ScrollView>
          <AddActivityFAB
            onPress={() => {
              setOpenAddDialog(true);
            }}
          />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    minHeight: '100%',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
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
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
