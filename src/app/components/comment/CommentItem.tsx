import styled from '@emotion/styled';
import { rem } from 'polished';
import { Comment } from '~/libs/api/types';
import { colors } from '~/libs/colors';
import { formatDate, formatNumber } from '~/libs/format';
import TextIcon from '../system/TextIcon';
import { CommentIcon, HeartOutlinedIcon } from '../vector';
import CommentTags from './CommentTags';

interface Props {
  comment: Comment;
}

function CommentItem({ comment }: Props) {
  return (
    <Block>
      <Top>
        <Username>{comment.writer.username}</Username>
        <CreatedAt>
          {formatDate(comment.createdAt)} {comment.isModified && '(수정됨)'}
        </CreatedAt>
      </Top>
      <Middle>
        <Content>{comment.description}</Content>
        <CommentTags tags={comment.tags} />
      </Middle>
      <Bottom>
        <TextIcon
          text={`${formatNumber(comment.subCommentsCount)}`}
          icon={<CommentIcon />}
          gap={8}
        />
        <TextIcon text={`${formatNumber(comment.likes)}`} icon={<HeartOutlinedIcon />} gap={8} />
      </Bottom>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(16)};
  border-radius: ${rem(10)};
  border: 1px solid ${colors.gray0};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Top = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${rem(8)};
`;

const Username = styled.div`
  font-weight: bold;
  font-size: ${rem(16)};
  color: ${colors.gray5};
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  margin-top: ${rem(8)};
  margin-bottom: ${rem(24)};
`;

const CreatedAt = styled.div`
  font-size: ${rem(12)};
  color: ${colors.gray2};
`;

const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  font-size: ${rem(14)};
  color: ${colors.gray4};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  color: ${colors.gray3};
  font-size: ${rem(14)};
`;

export default CommentItem;
