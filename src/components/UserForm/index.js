import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeName } from '../../redux/actions/user';
import { Input, Button } from './styled'
import useModal from '../ModalUser/useModal';

const UserForm = () => {

  const name = useSelector((state) => state.user.name);
  const title = useSelector((state) => state.user.title);
  const email = useSelector((state) => state.user.email);
  const mobile = useSelector((state) => state.user.mobile);
  const city = useSelector((state) => state.user.city);

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj) => {
    dispatch(changeName(formObj))
  }

  const { toggle } = useModal();

  return (
    <Form
      onSubmit={formObj => {
        handleSubmit1(formObj);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name">
            {({ input }) => (
              <Input
                placeholder={name}
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="title">
            {({ input }) => (
              <Input
                placeholder={title}
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="email">
            {({ input }) => (
              <Input
                placeholder={email}
                type="email"
                {...input}
              />
            )}
          </Field>
          <Field name="mobile">
            {({ input }) => (
              <Input
                placeholder={mobile}
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="city">
            {({ input }) => (
              <Input
                placeholder={city}
                type="text"
                {...input}
              />
            )}
          </Field>
          <Button type="submit" onSubmit={toggle}>Submit</Button>
        </form>
      )}
    </Form>
  );
};

export default UserForm;