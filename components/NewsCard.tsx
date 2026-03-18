import { NewsItem } from "@/data/newsItem";
import { StyleSheet, Text, View, Image } from "react-native";

type NewsCardProps = {
    isDark: boolean;
    news: NewsItem;
}

export function NewsCard({ isDark, news }: NewsCardProps) {
    const titleColor = isDark ? "white" : "black";
    const descriptionColor = isDark ? "#ccc" : "#666";
    const backgroundColor = isDark ? "#333" : "#fff";
    const borderColor = isDark ? "#555" : "#ddd";

    return (
        <View style={[styles.container, { backgroundColor, borderColor }]}>
            <Image source={{ uri: news.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={[styles.title, { color: titleColor }]} numberOfLines={2}>
                    {news.title}
                </Text>
                <Text style={[styles.description, { color: descriptionColor }]} numberOfLines={3}>
                    {news.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 6,
        marginRight: 12,
        backgroundColor: '#eee',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
    }
});