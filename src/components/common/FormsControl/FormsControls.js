import s from '../../../components/common/FormsControl/FormsControls.module.css';
import { Field } from 'redux-form';

// export const TextArea = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return <div className={s.formControl + " " + (hasError ? s.error : "")}>
//         <div>
//             <textarea {...input} {...props}></textarea>
//         </div>
//         {hasError && <span>{meta.error}</span>}
//     </div>
// }

// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return <div className={s.formControl + " " + (hasError ? s.error : "")}>
//         <div>
//             <input {...input} {...props}></input>
//         </div>
//         {hasError && <span>{meta.error}</span>}
//     </div>
// }


const Element = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <Element {...input} {...props} />
      {hasError && <span> {meta.error} </span>}
    </div>
  );
};

export const TextArea = Element("textarea");

export const Input = Element("input");

export const createField = (placeholder, name, component, validate, props = {}, text = "") => {
  return (<div>
    <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props} />
    {text}
  </div>)
}