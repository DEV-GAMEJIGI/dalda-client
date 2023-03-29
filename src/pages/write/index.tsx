import { useRouter } from 'next/router';
import React, { useState } from 'react';
import BaseLayout from '~/components/layout/BaseLayout';
import Editor from '~/components/write/Editor';
import TagEditor from '~/components/write/TagEditor';
import WriteFormTemplate from '~/components/write/WriteFormTemplate';
import { usePostCommentMutation } from '~/hooks/mutation/usePostCommentMutation';
import { PostCommentRequest } from '~/libs/api/types';

export default function WritePage() {
  const router = useRouter();
  const [isEmpty, setIsEmpty] = useState(false);
  const [form, setForm] = useState<PostCommentRequest>({
    content: '',
    tags: [],
  });

  const { mutateAsync: postComment } = usePostCommentMutation({
    onSuccess: () => router.push('/?mode=recent'),
  });

  const onChangeContent = (value: string) => {
    setForm((prev) => {
      return { ...prev, content: value };
    });
  };

  const onChangeTags = (values: string[]) => {
    setForm((prev) => {
      return { ...prev, tags: values };
    });
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.content.length === 0) {
      return setIsEmpty(true);
    }
    await postComment(form);
  };

  return (
    <BaseLayout>
      <WriteFormTemplate onSubmit={onSubmitForm}>
        <TagEditor tags={form.tags} onChange={onChangeTags} />
        <Editor onChange={onChangeContent} isEmpty={isEmpty} />
      </WriteFormTemplate>
    </BaseLayout>
  );
}
