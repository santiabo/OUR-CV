import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeExperience } from '../../redux/actions/user';
import { Input, Button, Input2 } from './styled'
import useModal from '../ModalUser/useModal';

const UserForm = () => {

  const experiences = useSelector((state) => state.user.experiences)
  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {
    dispatch(changeExperience(formObj, id))
  }
  const { toggle } = useModal();

  return (
    <>
      {
        experiences.map((e) =>
          <Form
            onSubmit={formObj => {
              handleSubmit1(formObj, e.id);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name="position">
                  {({ input }) => (
                    <Input
                      placeholder={e.position}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <Field name="place">
                  {({ input }) => (
                    <Input
                      placeholder={e.place}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <Field name="date">
                  {({ input }) => (
                    <Input
                      placeholder={e.date}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <Field name="info">
                  {({ input }) => (
                    <Input2
                      placeholder={e.info}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <Button type="submit" onSubmit={toggle} >Save changes</Button>
              </form>
            )}
          </Form>
        )
      }
    </>
  );
};

export default UserForm;