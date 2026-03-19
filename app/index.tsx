import { Header } from "@/components/Header";
import { NewsCard } from "@/components/NewsCard";
import { SectionListExample } from "@/components/SectionListExample";
import { NEWS_ITEM } from "@/data/newsItem";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const [isDark, setIsDark] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    let MyComponent;
    if (isEnabled) {
        MyComponent = <SectionListExample />;
    } else {
        MyComponent = (
            <FlatList
                data={NEWS_ITEM}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <NewsCard isDark={isDark} news={item} />}
                contentContainerStyle={{ paddingBottom: 16 }}
            />
        );
    }

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: isDark ? "#020817" : "#f0f9ff" }}
        >
            <Header isDark={isDark} onToggleTheme={setIsDark} />

            <View style={{ flex: 1 }}>{MyComponent}</View>
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
