import React from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeName } from '../../redux/actions/user';
import { Input, Button } from './styled'

const UserForm = () => {

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj) => {
    console.log(formObj);
    dispatch(changeName(formObj))

  }

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
                placeholder="Name"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="title">
            {({ input }) => (
              <Input
                placeholder="Title"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="email">
            {({ input }) => (
              <Input
                placeholder="Email"
                type="email"
                {...input}
              />
            )}
          </Field>
          <Field name="mobile">
            {({ input }) => (
              <Input
                placeholder="Mobile"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="city">
            {({ input }) => (
              <Input
                placeholder="City"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Button type="submit">Submit</Button>
        </form>
      )}
    </Form>
  );
};

export default UserForm;