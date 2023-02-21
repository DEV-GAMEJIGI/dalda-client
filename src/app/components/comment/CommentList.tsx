import styled from '@emotion/styled';
import { rem } from 'polished';
import { Comment } from '~/libs/api/types';
import { media } from '~/libs/media';
import CommentItem from './CommentItem';

interface Props {
  comments: Comment[];
}

function CommentList({ comments }: Props) {
  return (
    <Section>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  gap: ${rem(16)};
  grid-template-columns: repeat(1, 1fr);

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default CommentList;
