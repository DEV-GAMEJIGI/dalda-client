import BaseLayout from '~/components/layout/BaseLayout';
import Editor from '~/components/write/Editor';
import WriteFormTemplate from '~/components/write/WriteFormTemplate';
import { useRootStore } from '~/stores';

export default function WritePage() {
  const { form, changeForm } = useRootStore();

  const onChangeContent = (value: string) => {
    changeForm('content', value);
  };

  return (
    <BaseLayout>
      <WriteFormTemplate>
        <div>Tags Component</div>
        <Editor onChange={onChangeContent} />
      </WriteFormTemplate>
    </BaseLayout>
  );
}
