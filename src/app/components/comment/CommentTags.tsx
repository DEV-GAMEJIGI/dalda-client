import styled from '@emotion/styled';
import Link from 'next/link';
import { rem } from 'polished';
import { colors } from '~/libs/colors';

interface Props {
  tags: string[];
}

function CommentTags({ tags }: Props) {
  return (
    <Block>
      {tags.map((tag) => (
        <StyledLink key={tag} href={`/tag/${tag}`}>
          #{tag}
        </StyledLink>
      ))}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  gap: ${rem(8)};
`;

const StyledLink = styled(Link)`
  font-size: ${rem(14)};
  font-weight: bold;
  color: ${colors.personal};
`;

export default CommentTags;
