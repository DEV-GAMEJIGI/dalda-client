import styled from '@emotion/styled';
import { rem } from 'polished';
import React, { useState } from 'react';
import { colors } from '~/libs/colors';
import Input from '../system/Input';

interface Props {
  tags: string[];
  onChange: (values: string[]) => void;
}

function TagEditor({ tags, onChange }: Props) {
  const [value, setValue] = useState('');

  const onChangValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Backspace' && value === '') {
      onChange(tags.slice(0, tags.length - 1));
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      setValue('');

      if (value === '' || tags.includes(value)) return;

      const tag = value.trim();
      onChange([...tags, tag]);
    }
  };

  return (
    <Block>
      {tags.map((tag) => (
        <Tag key={tag}>#{tag}</Tag>
      ))}
      <StyledInput
        placeholder="태그를 입력하세요."
        value={value}
        onChange={onChangValue}
        onKeyDown={onKeyDown}
      />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${rem(8)};
  border: 1px solid ${colors.gray1};
  border-radius: ${rem(5)};
  padding: ${rem(10)} ${rem(16)};
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.personal};
`;

const StyledInput = styled(Input)`
  border: none;
  font-size: ${rem(14)};

  ::placeholder {
    color: ${colors.gray2};
  }
`;

export default TagEditor;
