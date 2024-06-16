
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from 'react';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

export default function ContactForm() {

    const dispatch = useDispatch();

      const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
    
const nameId = useId();
const phoneId = useId(); 
    
    const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^[0-9\+\-\(\)]{3,}$/, 'Invalid phone number').required('Phone number is required'),
    });

  return (
    
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      >
      <Form className={css.form}>
        <label htmlFor={`${nameId}-name`}>Name</label>
        <Field id={`${nameId}-name`} className={css.input} name="name" type="text" />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={`${phoneId}-number`}>Number</label>
        <Field id={`${phoneId}-number`} className={css.input} name="number" type="tel" />
        <ErrorMessage className={css.error} name="number" component="span" />
        
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}