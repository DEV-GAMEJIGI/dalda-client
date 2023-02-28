import styled from '@emotion/styled';
import { TRANSFORMERS } from '@lexical/markdown';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { rem } from 'polished';
import { colors } from '~/libs/colors';
import { editorStyles, initialConfig } from '~/libs/editor';
import EditorPlaceholder from './EditorPlaceholder';
import CustomAutoLinkPlugin from './plugins/CustomAutoLinkPlugin';

function Editor() {
  const [HEADING, ...REST_TRANSFORMERS] = TRANSFORMERS;

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Container>
        <ContainerInner>
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<EditorPlaceholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <ListPlugin />
          <CustomAutoLinkPlugin />
          <MarkdownShortcutPlugin transformers={REST_TRANSFORMERS} />
        </ContainerInner>
      </Container>
    </LexicalComposer>
  );
}

const Container = styled.div`
  flex: 1;
  position: relative;
`;

const ContainerInner = styled.div`
  height: 100%;
  position: relative;
  border-radius: ${rem(5)};
  border: ${rem(1)} solid ${colors.gray1};

  .editor-input {
    ${editorStyles};
    height: 100%;
    padding: ${rem(16)};
    outline: none;
  }
`;

export default Editor;
