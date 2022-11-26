import { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import EpigramsContext from '../../store/epigramsContext';
import Button from '../UI/Buttons/Button/Button';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';
import { AddNewEpigramFormWrapper, ButtonsWrapper } from './AddNewEpigramForm.styles';

const AddNewEpigramForm = () => {
  const [author, setAuthor] = useState('');
  const [epigram, setEpigram] = useState('');

  const FormRef = useRef<HTMLFormElement>(null);

  const { onCloseAddNewEpigramModal, onAddEpigram } = useContext(EpigramsContext);

  useOnClickOutside(FormRef, () => onCloseAddNewEpigramModal());

  const onAuthorChange = (evt: ChangeEvent<HTMLInputElement>) => setAuthor(evt.target.value);
  const onEpigramChange = (evt: ChangeEvent<HTMLTextAreaElement>) => setEpigram(evt.target.value);

  const onFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    onAddEpigram({ author, text: epigram });
  };

  return (
    <AddNewEpigramFormWrapper ref={FormRef} onSubmit={onFormSubmit}>
      <Input name="author" label=" *Author" value={author} required onChange={onAuthorChange} />
      <Textarea
        name="epigram"
        label="*Epigram"
        value={epigram}
        required
        onChange={onEpigramChange}
      />
      <ButtonsWrapper>
        <Button onClick={onCloseAddNewEpigramModal}>Cancel</Button>
        <Button type="submit">+ Add</Button>
      </ButtonsWrapper>
    </AddNewEpigramFormWrapper>
  );
};

export default AddNewEpigramForm;
