import { DesignButton } from "@design-system/components/common/Button";
import { useTheme } from "@design-system/theme";
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Platform, StatusBar } from "react-native";
import { calculateWeek } from "@presentation/utils/pregnancy/calculations";
import { styles } from "./styles";

export const HomePage = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentWeek, setCurrentWeek] = useState<number>(0);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setCurrentWeek(calculateWeek(date));
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background.primary,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
      ]}>
      {/* Header */}
      <View style={[styles.header]}>
        <Text style={[styles.title, { color: theme.colors.text.primary }]}>Papa en Herbe</Text>
        <TouchableOpacity
          onPress={toggleTheme}
          style={styles.themeButton}>
          <Text style={{ color: theme.colors.text.primary }}>{theme.mode === "dark" ? "☀️" : "🌙"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Date Selection Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text.primary }]}>Votre parcours</Text>
          <View style={styles.dateContainer}>
            <Text style={[styles.dateText, { color: theme.colors.text.secondary }]}>
              {selectedDate ? `Semaine ${currentWeek} de grossesse` : "Sélectionnez la date de conception"}
            </Text>
            <DesignButton
              onPress={() => {
                // TODO: Implement date picker
                handleDateSelect(new Date());
              }}
              variant="primary">
              {selectedDate ? "Modifier la date" : "Définir la date"}
            </DesignButton>
          </View>
        </View>

        {/* Baby Development Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text.primary }]}>Le développement de bébé</Text>
          <View style={styles.card}>
            <Text style={[styles.cardText, { color: theme.colors.text.secondary }]}>
              {selectedDate
                ? `Votre bébé mesure environ ${currentWeek * 2} cm et pèse environ ${currentWeek * 10} grammes.`
                : "Sélectionnez une date pour voir le développement de votre bébé."}
            </Text>
          </View>
        </View>

        {/* Tips Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text.primary }]}>Conseils du jour</Text>
          <View style={styles.card}>
            <Text style={[styles.cardText, { color: theme.colors.text.secondary }]}>
              {selectedDate
                ? `En semaine ${currentWeek}, vous pouvez commencer à...`
                : "Sélectionnez une date pour voir les conseils adaptés."}
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text.primary }]}>Actions rapides</Text>
          <View style={styles.actionsContainer}>
            <DesignButton
              variant="tertiary"
              size="base"
              onPress={() => {
                console.log("Agenda button pressed (dev only)");
              }}
              style={{ marginRight: 4 }}>
              {`📅\n Agenda`}
            </DesignButton>
            <DesignButton
              variant="tertiary"
              size="base"
              onPress={() => {
                console.log("Checklist button pressed (dev only)");
              }}
              style={{ marginRight: 4 }}>
              {`📝\n Checklist`}
            </DesignButton>
            <DesignButton
              variant="tertiary"
              size="base"
              onPress={() => {
                console.log("Forum button pressed (dev only)");
              }}>
              {`💬\n Forum`}
            </DesignButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
