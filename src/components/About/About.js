import { Formik, Form, Field } from "formik"
import { useId } from "react"
import * as Yup from 'yup'

export default function About() {

    const id = useId();

    const contactFormSchema = Yup.object().shape({
        firstname: Yup.string().required('Required !'),
        lastname: Yup.string().required('Required !'),
        email: Yup.string().email('Invalid Email input !').required('Required !'),
        message: Yup.string().max(50, 'Too long!')
    });

    const handleSubmitForm = (value) => {
        console.log(value);
    }

    return(
        <div>
            <h1>Welcome on About Page !</h1>
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    email: '',
                    message: ''
                }}
                onSubmit={handleSubmitForm}
                validationSchema={contactFormSchema}
            >
                {({errors, touched}) => (
                    <Form>

                        <div>
                            <label htmlFor={`${id}-firstname`}>Firstname</label>
                            <Field type='text' id={`${id}-firstname`} name='firstname' placeholder='Ex: John' />
                            {errors.firstname && touched.firstname ? (
                                <p style={{color: 'red'}}>{errors.firstname}</p>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor={`${id}-lastname`}>Lastname</label>
                            <Field type='text' id={`${id}-lastname`} name='lastname' placeholder='Ex: DOE' />
                            {errors.lastname && touched.lastname ? (
                                <p style={{color: 'red'}}>{errors.lastname}</p>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor={`${id}-email`}>Email</label>
                            <Field type='email' id={`${id}-email`} name='email' placeholder='example@example.com' />
                            {errors.email && touched.email ? (
                                <p style={{color: 'red'}}>{errors.email}</p>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor={`${id}-message`}>Message</label>
                            <Field component='textarea' id={`${id}-message`} name='message' placeholder='Write your message here' />
                            {errors.message && touched.message ? (
                                <p style={{color: 'red'}}>{errors.message}</p>
                            ) : null}
                        </div>

                        <button type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}