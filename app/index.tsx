import { Header } from "@/components/Header";
import { SectionListExample } from "@/components/SectionListExample";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const [isDark, setIsDark] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    let MyComponent;
    if (isEnabled) {
        MyComponent = <SectionListExample />;
    } else {
        MyComponent = (
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: 25,
                }}
            >
                <Text style={styles.title}>Olá Turma!</Text>
            </View>
        );
    }

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: isDark ? "#0F172A" : "#F8FAFC" }}
        >
            <Header isDark={isDark} onToggleTheme={setIsDark} />

            <View style={{ flex: 1, alignItems: "center" }}>{MyComponent}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "bold",
        color: "blue",
    },
});
