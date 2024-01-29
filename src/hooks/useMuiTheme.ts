import { muiThemes, MuiThemeType } from "@/styles/Themes";

function useMuiTheme(themeType?: MuiThemeType) {
  if (themeType) {
    return muiThemes[themeType]();
  }
  return muiThemes[MuiThemeType.dark]();
}

export default useMuiTheme;
