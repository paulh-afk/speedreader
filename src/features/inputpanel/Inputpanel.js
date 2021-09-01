import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const TextareaSchema = Yup.object().shape({
  speedtext: Yup.string()
    .min(15, "Texte trop court !")
    .max(300, "Texte trop long !")
    .required("Requis !"),
});

const PanelError = ({ children }) => <p>{children}</p>;

// ajouter le mots sur lequel est actuellement le speedread en surbruillance ou le reste du texte

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <Formik
    initialValues={{
      speedtext: document.cookie.slice(10, document.cookie.length) || "",
    }}
    validationSchema={TextareaSchema}
    onSubmit={(value) => props.addText(value)}
    validateOnChange={false}
  >
    {({ values, handleChange, handleBlur, handleSubmit }) => {
      return (
        <form onSubmit={handleSubmit}>
          <textarea
            id="speedread-text"
            name="speedtext"
            placeholder="Entrer un texte ..."
            rows="8"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.speedtext}
          />
          <ErrorMessage name="speedtext" component={PanelError} />
          <button type="submit">Speedreader</button>
        </form>
      );
    }}
  </Formik>
);
