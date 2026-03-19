import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { ThemeSwitch } from "./ThemeSwitch";

export function Header({
    isDark,
    onToggleTheme,
}: {
    isDark: boolean;
    onToggleTheme: (value: boolean) => void;
}) {
    const textColor = isDark ? "#e0f2fe" : "#1e3a8a"; 
    const backgroundColor = isDark ? "#0f172a" : "#ffffff";
    const borderColor = isDark ? "#1e293b" : "#bfdbfe";

    return (
        <View style={[styles.container, { backgroundColor, borderBottomColor: borderColor }]}>
            <ActivityIndicator
                size="small"
                color={isDark ? "#7dd3fc" : "#2563eb"}
                style={styles.icon}
            />

            <Text style={[styles.title, { color: textColor }]}>
                Atualização em Andamento
            </Text>

            <ThemeSwitch isDark={isDark} onToggle={onToggleTheme} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#E2E8F0",
    },
    icon: {
        marginRight: 10,
    },
    title: {
        flex: 1,
        fontSize: 15,
        fontWeight: "600",
    },
});
