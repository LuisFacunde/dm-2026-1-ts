import React from "react";
import { Switch } from "react-native";

export function ThemeSwitch({
    isDark,
    onToggle,
}: {
    isDark: boolean;
    onToggle: (value: boolean) => void;
}) {
    return (
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor="#f4f3f4"
            onValueChange={onToggle}
            value={isDark}
        />
    );
}
