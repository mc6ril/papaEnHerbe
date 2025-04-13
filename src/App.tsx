import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { HomePage } from "@presentation/features/home/screens/HomePage";
import { ThemeProvider, useTheme } from "@design-system/theme";
import { AppNavigation } from "@presentation/navigation/NavigationContainer";

const AppContent = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background.primary,
      }}>
      <StatusBar
        barStyle={theme.mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent={true}
      />
      <AppNavigation />
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
