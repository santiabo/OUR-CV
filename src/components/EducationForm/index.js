import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeEducation } from '../../redux/actions/user';
import { Input, Button } from './styled'
import useModal from '../ModalUser/useModal';

const EducationForm = (props) => {

  const education = useSelector((state) => state.user.education)

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {
    console.log("OBJ", formObj, "ID", id)
    dispatch(changeEducation(formObj, id))
  }

  const { toggle } = useModal();
  /* const { handleClose } = props; */


  return (
    <>
      {
        education.map((e) =>
          <Form
            onSubmit={formObj => {
              handleSubmit1(formObj, e.id);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name="title">
                  {({ input }) => (
                    <Input
                      placeholder={e.title}
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
                <Button type="submit" onSubmit={toggle} >Save changes</Button>
              </form>
            )}
          </Form>
        )
      }
    </>
  );
};

export default EducationForm;