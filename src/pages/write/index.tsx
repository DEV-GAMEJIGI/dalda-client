import { TRANSFORMERS } from '@lexical/markdown';
import BaseLayout from '~/components/layout/BaseLayout';
import Editor from '~/components/write/Editor';
import WriteFormTemplate from '~/components/write/WriteFormTemplate';
import { useRootStore } from '~/stores';

export default function WritePage() {
  const { form, changeForm } = useRootStore();
  const [HEADING, ...REST_TRANSFORMERS] = TRANSFORMERS;

  const onChangeContent = (value: string) => {
    changeForm('content', value);
  };

  return (
    <BaseLayout>
      <WriteFormTemplate>
        <div>Tags Component</div>
        <Editor onChange={onChangeContent} transformers={REST_TRANSFORMERS} />
      </WriteFormTemplate>
    </BaseLayout>
  );
}
