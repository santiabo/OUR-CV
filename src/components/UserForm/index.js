import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeName } from '../../redux/actions/user';
import { Input, Button, H2 } from './styled'
import useModal from '../ModalUser/useModal';

const UserForm = (props) => {

  
  const language = useSelector((state) => state.language.language);
  const id = useSelector((state) => state.user.id)
  const name = useSelector((state) => state.user.name);
  const title = useSelector((state) => state.user.title);
  const email = useSelector((state) => state.user.email);
  const mobile = useSelector((state) => state.user.mobile);
  const city = useSelector((state) => state.user.city);

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {
    dispatch(changeName(formObj, id))
  };

  const { toggle } = useModal();

  /* const title = () => {
    if (language === "spanish") return "Educación";
    if (language === "english") return "Education";
  } */




  return (
    <Form
      onSubmit={formObj => {
        handleSubmit1(formObj, id);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
        <H2>{language === "spanish" ? "Nombre completo": "Full name"}</H2>
          <Field key="0" name="name">
            {({ input }) => (
              <Input
                placeholder={name}
                type="text"
                {...input}
              />
            )}
          </Field>
          <H2>{language === "spanish" ? "Título": "Title"}</H2>
          <Field key="1" name="title">
            {({ input }) => (
              <Input
                placeholder={title}
                type="text"
                {...input}
              />
            )}
          </Field>
          <H2>{language === "spanish" ? "Correo electrónico": "Email"}</H2>
          <Field key="2" name="email">
            {({ input }) => (
              <Input
                placeholder={email}
                type="email"
                {...input}
              />
            )}
          </Field>
          <H2>{language === "spanish" ? "Telefono movil": "Mobile number"}</H2>
          <Field key="3" name="mobile">
            {({ input }) => (
              <Input
                placeholder={mobile}
                type="tel"
                {...input}
              />
            )}
          </Field>
          <H2>{language === "spanish" ? "Ciudad": "City"}</H2>
          <Field key="4" name="city">
            {({ input }) => (
              <Input
                placeholder={city}
                type="text"
                {...input}
              />
            )}
          </Field>
          <Button type="submit" onSubmit={toggle} >Save changes</Button>
        </form>
      )}
    </Form>
  );
};

export default UserForm;