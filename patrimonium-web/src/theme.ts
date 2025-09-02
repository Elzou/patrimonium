import type {DefaultTheme} from "styled-components";

export const theme: DefaultTheme = {
    colors: {
        primary: {
            100: "#E6F2F1",
            200: "#B3D9D7",
            300: "#80C1BD",
            400: "#4DA9A2",
            500: "#146764", // référence
            600: "#115C5A",
            700: "#0E504E",
            800: "#0B4442",
            900: "#083836",
        },
        secondary: {
            100: "#E6F6F7",
            200: "#B3E3E6",
            300: "#80D1D6",
            400: "#4DBFC6",
            500: "#1B8790", // référence
            600: "#18777F",
            700: "#14686F",
            800: "#11595F",
            900: "#0D4A4F",
        },
        success: {
            100: "#E9F7ED",
            200: "#C7EBCF",
            300: "#A4DFB1",
            400: "#6FCC84",
            500: "#3BAF4D", // référence
            600: "#349C45",
            700: "#2C883C",
            800: "#237033",
            900: "#1B5829",
        },
        info: {
            100: "#E6F7FB",
            200: "#B3E6F3",
            300: "#80D4EC",
            400: "#4DC2E4",
            500: "#0099CC", // référence
            600: "#008AB8",
            700: "#007AA3",
            800: "#006B8F",
            900: "#005C7A",
        },
        warning: {
            100: "#FFF7E6",
            200: "#FFE6B3",
            300: "#FFD580",
            400: "#FFC34D",
            500: "#E6A23C", // référence
            600: "#CC9136",
            700: "#B3802F",
            800: "#996F29",
            900: "#805E23",
        },
        error: {
            100: "#FDECEC",
            200: "#F9CACA",
            300: "#F5A8A8",
            400: "#F18686",
            500: "#E63946", // référence
            600: "#CF333F",
            700: "#B82D37",
            800: "#A1272F",
            900: "#8A2128",
        },
        neutral: {
            100: "#FAFAFA",
            200: "#F0F0F0",
            300: "#E0E0E0",
            400: "#C2C2C2",
            500: "#A3A3A3", // référence
            600: "#858585",
            700: "#666666",
            800: "#4D4D4D",
            900: "#333333",
        },
    },
    typography: {
        h1: {
            size: "36px",
            weight: 600, // semibold
            lineHeight: "44px",
        },
        h2: {
            size: "28px",
            weight: 600,
            lineHeight: "36px",
        },
        h3: {
            size: "22px",
            weight: 600,
            lineHeight: "28px",
        },
        h4: {
            size: "18px",
            weight: 600,
            lineHeight: "24px",
        },
        body: {
            size: "16px",
            weight: 400,
            lineHeight: "24px",
        },
        small: {
            size: "14px",
            weight: 400,
            lineHeight: "20px",
        },
        caption: {
            size: "12px",
            weight: 400,
            lineHeight: "16px",
        },
    },
};
