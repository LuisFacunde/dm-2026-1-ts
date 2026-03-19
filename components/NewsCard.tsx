import { NewsItem } from "@/data/newsItem";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type NewsCardProps = {
    isDark: boolean;
    news: NewsItem;
}

export function NewsCard({ isDark, news }: NewsCardProps) {
    const titleColor = isDark ? "#ffffff" : "#1e3a8a";
    const descriptionColor = isDark ? "#93c5fd" : "#3b82f6";
    const backgroundColor = isDark ? "#0f172a" : "#ffffff";
    const borderColor = isDark ? "#1e293b" : "#bfdbfe";
    const iconColor = isDark ? "#bfdbfe" : "#2563eb";
    const iconBgColor = isDark ? "#1e293b" : "#eff6ff";

    return (
        <View style={[styles.container, { backgroundColor, borderColor }]}>
            <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
                <MaterialIcons name={news.icon} size={40} color={iconColor} />
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, { color: titleColor }]} numberOfLines={2}>
                    {news.title}
                </Text>
                <Text style={[styles.description, { color: descriptionColor }]} numberOfLines={1}>
                    {news.date} às {news.time}
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
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 6,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
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