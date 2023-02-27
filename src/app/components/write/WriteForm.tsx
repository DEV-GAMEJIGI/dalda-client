import styled from '@emotion/styled';
import { rem } from 'polished';
import LegacyEditor from './LegacyEditor';

function WriteForm() {
  return (
    <StyledForm>
      <div>Tag inputs</div>
      <LegacyEditor />
      <button>Submit</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
`;

export default WriteForm;
