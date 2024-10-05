import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Notification from "../Notification/Notification"; // Импортируем Notification
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setTimeout(() => {
          console.log(values); // Здесь можно сделать фактический запрос
          Notification.notify(); // Вызываем уведомление
          resetForm(); // Очищаем форму после отправки
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.formContainer}>
          <div>
            <Field
              type="text"
              name="name"
              placeholder="Your Name"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Your Email"
              className={styles.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>
          <div>
            <Field
              as="textarea"
              name="message"
              placeholder="Your Message"
              rows="4"
              className={styles.input}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={styles.error}
            />
          </div>
          <div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
