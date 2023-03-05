import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDate = (date: string) => {
  const d = new Date(date);
  const diff = (Date.now() - d.getTime()) / 1000;

  if (diff < 60) {
    return '방금 전';
  }

  return formatDistanceToNow(d, { addSuffix: true, locale: ko });
};

export const formatNumber = (number: number) => {
  if (number < 1000) {
    return number.toLocaleString('ko-KR');
  }

  if (number >= 1000 && number < 10000) {
    const result = Math.floor((number / 1000) * 10) / 10;
    return `${result.toLocaleString('ko-KR')}천`;
  }

  if (number >= 10000) {
    const result = Math.floor((number / 10000) * 10) / 10;
    return `${result.toLocaleString('ko-KR')}만`;
  }
};
