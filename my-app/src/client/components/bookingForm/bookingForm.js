import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Component } from 'react';
import './bookingForm.css';

import withRouter from '../navigate/navigate.js';
import * as Yup from 'yup';
import Button from '../Tools/button/button.js';
import Modal from '../modal/modal.js';

class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: null,
            errorMessage: '',
            loading: false
        };
    }

   handleSubmit = async (values, { resetForm }) => {
    this.setState({ loading: true, success: null, errorMessage: '' });

    console.log("🚀 SUBMIT STARTED");
console.log("values:", values);

    try {
        const payload = {
            fullName: values.fullName,
            email: values.email,
            companyName: values.companyName,
            phoneNumber: values.phoneNumber,
            bookingMessage: values.bookingMessage,
            serviceTitle: values.serviceTitle,
        };

        const apiUrl = process.env.REACT_APP_API_URL || '/api/send-booking';

        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        console.log('📡 RESPONSE STATUS:', res.status);

        const text = await res.text();
        let data = {};


    handleUpdateSubmit = (values) => {

        this.props.onDataFromChild(values);
    }

    handleFinalSubmit = async (values, tools) => {
        const isUpdate = this.props.initialData?.update === true;
        if(isUpdate){
            return this.handleUpdateSubmit(values)
           
        }else{
            return this.handleSubmit(values, tools)
        }
    }
    handleSubmit = async (values, { setSubmitting, setStatus, resetForm }) => {
        console.log("Booking Submited Try:");

        // Grab the base URL from your environment variables
        const baseUrl = process.env.REACT_APP_API_URL || "";

        try {
            // Prepend the baseUrl to your routes
            const res = await axios.post(`${baseUrl}/api/createBooking`, values);
            await axios.post(`${baseUrl}/api/sendMail`, values);

            console.log("Booking Submited:", res.data);
            console.log(res.data.message)

            // reseting states
            this.setState({
                success: true,
            })
            //clear form
            resetForm({
                values: {
                    fullName: "",
                    email: '',
                    companyName: '',
                    phoneNumber: "",
                    bookingMessage: ""
                }
            });
        } catch (error) {

        console.log('📨 JSON RESPONSE:', data);

        if (!res.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        this.setState({
            success: true,
            loading: false
        });

        resetForm();
    } catch (error) {
        this.setState({
            success: false,
            loading: false,
            errorMessage: error.message
        });
    }
};
    render() {
        const nationalNumberRegex = /^[1-9](?:\s?\d){8,9}$/;

        return (
            <div className="bookingFormWrapper" style={this.props.style}>

                {/* SUCCESS MODAL */}
                {this.state.success === true && (
                    <Modal
                        onClose={() =>
                            this.setState({ success: null, errorMessage: '' })
                        }
                    />
                )}

                {/* ERROR MODAL */}
                {this.state.success === false && this.state.errorMessage && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h3 style={{ color: 'red' }}>Submission Failed</h3>
                            <p>{this.state.errorMessage}</p>

                            <button
                                onClick={() =>
                                    this.setState({ success: null, errorMessage: '' })
                                }
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                <div className="bookingFormInner">

                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            companyName: '',
                            phoneNumber: '',
                            bookingMessage: '',
                            serviceTitle: this.props.serviceTitle || ''
                        }}
                        validationSchema={Yup.object({
                            fullName: Yup.string().required('Required Field'),
                            companyName: Yup.string().required('Required Field'),
                            email: Yup.string()
                                .email('Wrong Email address')
                                .required('Required Field'),
                            phoneNumber: Yup.string()
                                .matches(
                                    nationalNumberRegex,
                                    'Enter 9–10 digits (no +44 or 0)'
                                )
                                .required('Required Field'),
                            bookingMessage: Yup.string()
                        })}
                        onSubmit={this.handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="bookingForm">

                                <div className="BookingDesc">
                                    <h3>Get In Touch With Us</h3>
                                    <p>
                                        Describe your project and leave your contact
                                        information, we’ll get back to you soon.
                                    </p>
                                </div>

                                <label className="field-label">Full Name*</label>
                                <Field name="fullName" />
                                <ErrorMessage name="fullName" component="div" className="error" />

                                <label className="field-label">Company Name*</label>
                                <Field name="companyName" />
                                <ErrorMessage name="companyName" component="div" className="error" />

                                <label className="field-label">Email*</label>
                                <Field name="email" />
                                <ErrorMessage name="email" component="div" className="error" />

                                <label className="field-label">Phone*</label>
                                <div className="phoneNumBlock">
                                    <span className="phone-prefix">+44</span>
                                    <Field name="phoneNumber" id="phoneNumber2" />
                                </div>
                                <ErrorMessage name="phoneNumber" component="div" className="error" />

                                <label className="field-label">Message</label>
                                <Field as="textarea" name="bookingMessage" id="bookingMessage" />
                                <ErrorMessage name="bookingMessage" component="div" className="error" />

                                <Button
                                    type="submit"
                                    text={this.props.buttonTitle || 'Submit'}
                                    disabled={isSubmitting || this.state.loading}
                                    style={{
                                        backgroundColor: '#56D55D',
                                        color: 'white',
                                        width: '100%'
                                    }}
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default withRouter(BookingForm);