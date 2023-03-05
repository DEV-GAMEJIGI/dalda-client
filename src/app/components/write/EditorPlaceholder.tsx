import styled from '@emotion/styled';
import { rem } from 'polished';
import { colors } from '~/libs/colors';

function EditorPlaceholder() {
  return <Block>내용을 입력하세요.</Block>;
}

const Block = styled.div`
  position: absolute;
  top: ${rem(16)};
  left: ${rem(16)};
  color: ${colors.gray2};
  pointer-events: none;
`;

export default EditorPlaceholder;
