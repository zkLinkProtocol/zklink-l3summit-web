import { createTheme } from "@material-ui/core/styles";

interface CustomTheme {
  app?: {
    input: {
      color: any;
      background: any;
      border: any;
    };
    section: {
      background: any;
    };
    border: {
      radius: any;
    };
  };
}

declare module "@material-ui/core/styles/createTheme" {
  interface Theme extends CustomTheme {
    // [key: string]: any;
  }

  interface ThemeOptions extends CustomTheme {}
}

declare module "@material-ui/core/styles/createPalette" {
  // interface Palette {
  //   neutral: Palette['primary'];
  // }
  // interface PaletteOptions {
  //   neutral: PaletteOptions['primary'];
  // }
}

export enum MuiThemeType {
  "light" = "light",
  "dark" = "dark",
}

// styled use dark theme
export function isDark(props: any) {
  if (props?.palette?.type) {
    return props.palette.type === MuiThemeType.dark;
  }
  if (props?.theme?.palette?.type) {
    return props.theme.palette.type === MuiThemeType.dark;
  }
}

export function themeValue(darkValue: any, lightValue: any) {
  return function (props: any) {
    return isDark(props) ? darkValue : lightValue;
  };
}

export const muiThemes: any = {
  [MuiThemeType.light]: function () {
    return createTheme({
      overrides: {
        MuiButton: {
          root: {
            fontFamily: '"Fira Sans", "Helvetica", sans-serif',
            minWidth: 60,
          },
          sizeLarge: {
            padding: "13px 24px",
            fontWeight: 500,
            fontSize: "16px",
            fontStyle: "normal",
            lineHeight: "24px",
            borderRadius: "8px",
          },
          containedPrimary: {
            backgroundColor: "rgba(3, 212, 152, 0.6)",
            border: "1px solid rgba(3, 212, 152, 0.7)",
            boxShadow: "0 0",
            "&$disabled": {
              color: "rgba(0, 0, 0, 0.22)",
              backgroundColor: "rgba(3, 212, 152, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
            },
          },
        },
        MuiBackdrop: {
          root: {
            backgroundColor: "rgba(6, 6, 6, 0.57)",
            backdropFilter: "blur(2px)",
          },
        },
        MuiSwitch: {
          track: {
            backgroundColor: "darkgray",
          },
        },
        MuiAccordion: {
          root: {
            boxShadow: "0 0 0px 1px rgb(0 0 0 / 8%)",
            borderRadius: "10px",
            "&$expanded": {
              margin: "2px 0",
            },
          },
          rounded: {
            "&:last-child": {
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            },
            "&:first-child": {
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            },
          },
        },
      },
      typography: {
        button: {
          textTransform: "none",
        },
      },
      palette: {
        type: MuiThemeType.light,
        primary: {
          main: "rgba(3, 212, 152, 1)",
          contrastText: "#fff",
        },
        error: {
          main: "rgba(255, 74, 40, 1)",
        },
        text: {
          primary: "#333333",
          secondary: "#7E7E7E",
        },
      },
      app: {
        input: {
          color: "#333333",
          background: "#FFFFFF",
          border: "1px solid #FFFFFF",
        },
        section: {
          background: "#f2f2f2",
        },
        border: {
          radius: "8px",
        },
      },
    });
  },
  [MuiThemeType.dark]: function () {
    return createTheme({
      overrides: {
        MuiButton: {
          root: {
            fontFamily: '"Fira Sans", "Helvetica", sans-serif',
            padding: "6px 24px",
            fontSize: "18px",
            minWidth: 60,
          },
          sizeLarge: {
            padding: "13px 24px",
            fontWeight: 500,
            fontSize: "16px",
            fontStyle: "normal",
            lineHeight: "24px",
            borderRadius: "8px",
          },
          contained: {
            color: "#FFFFFF",
            backgroundColor: "#282B31",
            "&:hover": {
              color: "rgba(255, 255, 255, 0.22)",
              backgroundColor: "#282B31",
            },
          },
          containedPrimary: {
            backgroundColor: "#059F76",
            border: "none",
            "&$disabled": {
              color: "rgba(255, 255, 255, 0.22)",
              backgroundColor: "rgba(3, 212, 152, 0.1)",
            },
          },
        },
        MuiBackdrop: {
          root: {
            backgroundColor: "rgba(6, 6, 6, 0.57)",
            backdropFilter: "blur(2px)",
          },
        },
        MuiSwitch: {
          track: {
            backgroundColor: "darkgray",
          },
        },
        MuiAccordion: {
          root: {
            borderRadius: "10px",
            backgroundColor: "rgba(3, 212, 152, 0.22)",
            "&$expanded": {
              margin: "2px 0",
            },
          },
          rounded: {
            "&:last-child": {
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            },
            "&:first-child": {
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            },
          },
        },
        MuiAccordionSummary: {},
      },
      typography: {
        button: {
          textTransform: "none",
        },
      },
      palette: {
        type: MuiThemeType.dark,
        primary: {
          main: "rgba(3, 212, 152, 1)",
          contrastText: "#fff",
        },
        error: {
          main: "rgba(255, 74, 40, 1)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#7E7E7E",
        },
      },
      app: {
        input: {
          color: "#FFFFFF",
          background: "rgba(1, 11, 17, 1)",
          border: "1px solid rgba(255, 255, 255, 0.14)",
        },
        section: {
          background: "#f2f2f2",
        },
        border: {
          radius: "8px",
        },
      },
    });
  },
};
