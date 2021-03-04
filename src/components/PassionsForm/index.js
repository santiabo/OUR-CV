import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changePassion } from '../../redux/actions/user';
import { Input, Button } from './styled'
import useModal from '../ModalUser/useModal';

const PassionsForm = (props) => {

  const passions = useSelector((state) => state.user.passions)

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {
    dispatch(changePassion(formObj, id))
  }

  const { toggle } = useModal();
  /* const { handleClose } = props; */


  return (
    <>
      {
        passions.map((e) =>
          <Form
            onSubmit={formObj => {
              handleSubmit1(formObj, e.id);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
            
                <Field name="description">
                  {({ input }) => (
                    <Input
                      placeholder={e.description}
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

export default PassionsForm;