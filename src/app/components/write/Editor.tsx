import styled from '@emotion/styled';
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  type Transformer,
} from '@lexical/markdown';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { EditorState } from 'lexical';
import { rem } from 'polished';
import { colors } from '~/libs/colors';
import { editorStyles, initialConfig } from '~/libs/editor';
import EditorPlaceholder from './EditorPlaceholder';
import CustomAutoLinkPlugin from './plugins/CustomAutoLinkPlugin';
import CustomCodeHighlightPlugin from './plugins/CustomCodeHighlightPlugin';

interface Props {
  defaultValue?: string;
  transformers: Transformer[];
  onChange: (value: string) => void;
}

function Editor({ defaultValue = '', transformers, onChange }: Props) {
  const onChangeListener = (editorState: EditorState) => {
    editorState.read(() => {
      /** @todo markdown.replace(regex) */
      const markdown = $convertToMarkdownString(transformers);
      onChange(markdown);
    });
  };

  return (
    <LexicalComposer
      initialConfig={{
        ...initialConfig,
        editorState: () => $convertFromMarkdownString(defaultValue, transformers),
      }}
    >
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
          <CustomCodeHighlightPlugin />
          <OnChangePlugin onChange={onChangeListener} />
          <MarkdownShortcutPlugin transformers={transformers} />
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
