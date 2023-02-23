import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { rem } from 'polished';
import React from 'react';
import { colors } from '~/libs/colors';
import { AccountIcon, AddIcon, ClockIcon, SearchIcon, TrendingIcon } from '../vector';

interface PageInfo {
  icon: React.ComponentType<any>;
  title: string;
}

const pageInfoMap: Record<string, PageInfo> = {
  '/': {
    icon: TrendingIcon,
    title: '베스트 댓글',
  },
  '/?mode=recent': {
    icon: ClockIcon,
    title: '최신 댓글',
  },
  '/write': {
    icon: AddIcon,
    title: '댓글 작성',
  },
  '/search': {
    icon: SearchIcon,
    title: '검색',
  },
  '/account': {
    icon: AccountIcon,
    title: '개인정보',
  },
};

function ContentTitle() {
  const router = useRouter();
  const currentPath = router.asPath;
  const { icon: Icon, title } = pageInfoMap[currentPath] ?? pageInfoMap['/'];

  return (
    <Block>
      <Icon />
      {title}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
  font-weight: bold;
  font-size: ${rem(16)};
  color: ${colors.personal};
  padding-bottom: ${rem(4)};
  border-bottom: 1px solid ${colors.personal};

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default ContentTitle;
