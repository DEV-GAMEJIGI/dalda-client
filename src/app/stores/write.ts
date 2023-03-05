import { PostCommentForm } from '~/libs/api/types';
import { CustomStateCreator } from '.';

export interface WriteState {
  form: PostCommentForm;
  changeForm: (key: keyof PostCommentForm, value: string) => void;
}

export const createWriteSlice: CustomStateCreator<WriteState> = (set) => ({
  form: {
    content: '',
    tags: [],
  },
  changeForm: (key, value) => set(({ form }) => ({ form: { ...form, [key]: value } })),
});
