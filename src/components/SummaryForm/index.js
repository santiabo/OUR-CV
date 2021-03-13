import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeSummary, putSummary } from '../../redux/actions/user';
import { Input2, Button } from '../styles/forms'
import useModal from '../ModalUser/useModal';

const SummaryForm = () => {
  //------Refactor------------------------------------------
  const loggedUser = useSelector((state) => state.user.loggedUser.id)
  const language = useSelector((state) => state.language.language);
  const curriculums = useSelector((state) => state.user.curriculums);

  const index = () => {
    let index = 0;
    for (var i = 0; i < curriculums.length; i++) {
      if (curriculums[i].language === language) index = i;
    }
    return index;
  };

  const loggedOutCurriculum = () => {
    if (language === "spanish") return { curriculumId: "b" };
    if (language === "english") return { curriculumId: "a" };
  }
  //-----------------------------------------------
  const summary = useSelector((state) => state.user.curriculums[index()].summary)

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {
    const loggedOutUser = () => {
      const newId = { id: id };
      return [{ ...formObj, ...loggedOutCurriculum(), ...newId }];
    }
    if (!loggedUser) return dispatch(putSummary(loggedOutUser()));
    dispatch(changeSummary(formObj, id))
  };

  const { toggle } = useModal();

  return (
    <>
          <Form
          initialValues={
                {
                  description: summary.description,
                }
              }
            onSubmit={formObj => {
              handleSubmit1(formObj,summary.id);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name="description">
                  {({ input }) => (
                    <Input2
                      placeholder={summary.description}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <Button type="submit" onSubmit={toggle} >{language === "spanish" ? "Guardar cambios" : "Save changes"}</Button>
              </form>
            )}
          </Form>
    </>
  );
};

export default SummaryForm;