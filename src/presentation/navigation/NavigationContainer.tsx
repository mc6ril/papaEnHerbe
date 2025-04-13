import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabParamList, RootStackParamList } from "./types";
import { useTheme } from "@design-system/theme";
import { View, Text } from "react-native";
import { HomePage } from "@presentation/features/home/screens/HomePage";

// Composants temporaires pour les autres onglets
const AgendaScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Agenda</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Profil</Text>
  </View>
);

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const AppNavigation = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.background.primary,
            borderTopColor: theme.colors.border.primary,
          },
          tabBarActiveTintColor: theme.colors.text.primary,
          tabBarInactiveTintColor: theme.colors.text.secondary,
          headerShown: false,
        }}>
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color }) => <Text style={{ color }}>🏠</Text>,
          }}
        />
        <Tab.Screen
          name="AgendaTab"
          component={AgendaScreen}
          options={{
            tabBarLabel: "Agenda",
            tabBarIcon: ({ color }) => <Text style={{ color }}>📅</Text>,
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profil",
            tabBarIcon: ({ color }) => <Text style={{ color }}>👤</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
