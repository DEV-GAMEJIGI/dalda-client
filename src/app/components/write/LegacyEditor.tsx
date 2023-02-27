import { indentWithTab } from '@codemirror/commands';
import { markdown } from '@codemirror/lang-markdown';
import { keymap } from '@codemirror/view';
import styled from '@emotion/styled';
import { EditorView, minimalSetup } from 'codemirror';
import { rem } from 'polished';
import { useEffect, useRef, useState } from 'react';
import { colors } from '~/libs/colors';

const editorTheme = EditorView.theme({
  '&': {
    padding: rem(16),
    fontSize: rem(14),
    color: colors.gray4,
  },
  '.cm-content': {
    fontFamily: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`,
  },
  '.ͼ7': {
    textDecoration: 'none',
  },
  '.ͼ9': {
    fontWeight: 'bold',
  },
});

function LegacyEditor() {
  const [height, setHeight] = useState(0);
  const blockRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight(blockRef.current?.clientHeight || 0);
  }, []);

  useEffect(() => {
    if (!editorRef.current) return;

    const view = new EditorView({
      extensions: [
        minimalSetup,
        markdown(),
        editorTheme,
        EditorView.lineWrapping,
        keymap.of([indentWithTab]),
      ],
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <Block ref={blockRef} height={height}>
      <div ref={editorRef} />
    </Block>
  );
}

const Block = styled.div<{ height: number }>`
  flex: 1;
  border: 1px solid ${colors.gray1};
  border-radius: ${rem(5)};

  .cm-editor {
    height: ${(props) => rem(props.height)};
  }

  .cm-content,
  .cm-line {
    padding: 0;
  }

  .cm-focused {
    outline: none;
  }
`;

export default LegacyEditor;
