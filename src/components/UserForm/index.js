import React from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from 'react-redux';
import {changeName} from '../../redux/actions/user';




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
              <input
                placeholder="Name"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="title">
            {({ input }) => (
              <input
                placeholder="Title"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="email">
            {({ input }) => (
              <input
                placeholder="Email"
                type="email"
                {...input}
              />
            )}
          </Field>
          <Field name="mobile">
            {({ input }) => (
              <input
                placeholder="Mobile"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="city">
            {({ input }) => (
              <input
                placeholder="City"
                type="text"
                {...input}
              />
            )}
          </Field>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
};

export default UserForm;