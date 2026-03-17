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
            value={isDark}
            onValueChange={onToggle}
            trackColor={{ false: "#CBD5E1", true: "#3B82F6" }}
            thumbColor="#FFFFFF"
        />
    );
}
