import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeSummary } from '../../redux/actions/user';
import { Input, Button } from './styled'
import useModal from '../ModalUser/useModal';

const SummaryForm = (props) => {
  //------Refactor------------------------------------------
  const language = useSelector((state) => state.language.language);
  const curriculums = useSelector((state) => state.user.curriculums);

  const index = () => {
    let index = 0;
    for (var i = 0; i < curriculums.length; i++) {
      if (curriculums[i].language === language) index = i;
    }
    return index;
  };
/* 
  const title = () => {
    if (language === "spanish") return "Experiencia";
    if (language === "english") return "Experience";
  } */
  //-----------------------------------------------
  const summary = useSelector((state) => state.user.curriculums[index()].summary)

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {
    dispatch(changeSummary(formObj, id))
  }

  const { toggle } = useModal();
  /* const { handleClose } = props; */


  return (
    <>
          <Form
            onSubmit={formObj => {
              handleSubmit1(formObj,summary.id);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name="description">
                  {({ input }) => (
                    <Input
                      placeholder={summary.description}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <Button type="submit" onSubmit={toggle} >Save changes</Button>
              </form>
            )}
          </Form>
    </>
  );
};

export default SummaryForm;