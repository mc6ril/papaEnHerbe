import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider, useTheme} from './design-system/theme/ThemeProvider';
import {HomePage} from '@presentation/features/home/screens/HomePage';

const AppContent = () => {
  const {theme} = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background.primary,
      }}>
      <StatusBar
        barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <HomePage />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
