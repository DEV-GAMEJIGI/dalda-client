import { css, Global } from '@emotion/react';

function GlobalStyles() {
  return <Global styles={styles} />;
}

const styles = css`
  html {
    height: 100%;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    height: 100%;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  #__next {
    height: 100%;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }
`;

export default GlobalStyles;
