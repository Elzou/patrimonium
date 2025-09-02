import "styled-components";

declare module "styled-components" {
    export interface TextStyle {
        size: string;
        weight: number;
        lineHeight: string;
    }

    export interface DefaultTheme {
        colors: {
            primary: Record<number, string>;
            secondary: Record<number, string>;
            success: Record<number, string>;
            info: Record<number, string>;
            warning: Record<number, string>;
            error: Record<number, string>;
            neutral: Record<number, string>;
        };
        typography: {
            h1: TextStyle;
            h2: TextStyle;
            h3: TextStyle;
            h4: TextStyle;
            body: TextStyle;
            small: TextStyle;
            caption: TextStyle;
        };
    }
}
