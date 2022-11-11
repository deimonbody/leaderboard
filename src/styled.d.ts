import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      orange:string;
      darkBlue:string;
      lightBlue:string;
      mainBlue:string;
      mainGray:string;
      mainBg:string;
      white:string;
      textDarkBlue:string;
      userPostion:string;
    };
    fonts:{
      medium:string;
      bold:string;
      reg:string;
    }
  }
}
