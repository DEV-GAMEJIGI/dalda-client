import { useState } from 'react';
import BaseLayout from '~/components/layout/BaseLayout';
import Editor from '~/components/write/Editor';
import TagEditor from '~/components/write/TagEditor';
import WriteFormTemplate from '~/components/write/WriteFormTemplate';
import { PostCommentForm } from '~/libs/api/types';

export default function WritePage() {
  const [form, setForm] = useState<PostCommentForm>({
    content: '',
    tags: [],
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

  return (
    <BaseLayout>
      <WriteFormTemplate>
        <TagEditor tags={form.tags} onChange={onChangeTags} />
        <Editor onChange={onChangeContent} />
      </WriteFormTemplate>
    </BaseLayout>
  );
}
