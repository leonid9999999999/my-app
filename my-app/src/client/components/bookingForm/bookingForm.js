import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Component } from 'react';
import './bookingForm.css';


import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
// import { WrapperPicker } from '../dateTimePicker/dateTimePicker.js';
import withRouter from '../navigate/navigate.js';

import axios from 'axios';
import * as Yup from 'yup';
import Button from '../Tools/button/button.js';
import Modal from '../modal/modal.js';

class BookingForm extends Component {
    
    constructor(props) {
    super(props);
        this.state = {
            
            title: "",
            desc: "",
            buttonTitle:"",
            availableTimes:[],
            success: null,
            date: "",
            content: "",
            update: false,
            dateSelectedByUser: false,
            errorMessage: '',
        }
    }


    
    componentDidMount() {

            
    
    let now = new Date();
    let day = String(now.getDate()).padStart(2, "0");
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let currentDate = `${year}-${month}-${day}`;

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let timeNow = `${hours}:${minutes}`

        if (this.props.initialData?.date) {
            const date = this.props.initialData.date;
            const time1 = this.props.initialData.time
            date === currentDate && time1 < timeNow ? this.setState({ 
                // date: date,
                selectedTime: ""
            }) : this.setState({ 
                date: date,
                selectedTime: this.props.initialData.time 
            });
            this.getTime(date)
        }
    }

    getTime = async (date) => {
        console.log(this.state.selectedTime)
            const bookedTime = this.props.initialData?.time
            const isUpdate = this.props.initialData?.update === true;
        try{
           
            const res = await fetch(`/api/available?date=${encodeURIComponent(date)}&update=${isUpdate}&bookedTime=${bookedTime}`, {
                method: "GET",
                headers: {"Content-Type": "applicaiton/json"},
                
            })

            const data = await res.json();
            this.setState({availableTimes:data})
            return data;

        }catch(error){
            console.log(error)
        }
        
    }


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
    handleSubmit = async (values, { setSubmitting, setStatus, resetForm}) => {
        console.log("Booking Submited Try:");
        try {
            //send value to bakend via router link + passing token 
            const res = await axios.post(`/api/createBooking`, values);
            
            console.log("Booking Submited:", res.data);
            console.log(res.data.message)
            // reseting states
                this.setState({
                    success: true,
                })
                        //clear form
                resetForm({values: {
                        fullName: "",
                        email:'',
                        companyName: '',
                        phoneNumber: "",
                        bookingMessage: ""
                    }
                });
        } catch (error) {

            let message = "Something went wrong. Please try again.";
            if (error.response && error.response.status === 409) {
                this.setState({
                    success: false,
                    errorMessage: error.message,
                });
            }
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx (e.g. 400, 404, 500)
                // We try to grab the message sent from your backend controller
                message = error.response.data.message || error.response.data.error || error.response.status || "Server Error";
                console.log("Server responded with error:", error.response.status);
            } else if (error.request) {
                message = "Server is not responding. Please check your connection.";
                console.log("No response received from server");
            } else {
                // Something happened in setting up the request that triggered an Error
                message = error.message;
            }
            this.setState({
                success: false,
                errorMessage: message,
            });
            console.error(error);

            } finally {
                setSubmitting(false);
        }
    };
    render (){

    // transforming data into date and time 

    const nationalNumberRegex = /^[1-9](?:\s?\d){8,9}$/;
  

        return(
            <div className="bookingFormWrapper" style={this.props.style}>
                {this.state.success === true && (
                    <Modal
                        onClose={() => this.setState({ success: null, errorMessage: null })}
                    />
                )}

                {/* If unseccess it will throw 409 error and set state to false and print this */}
                {this.state.success === false && this.state.errorMessage && (
                    <div className="modal-overlay">
                        <div className="modal">
                            {/* Generic Header */}
                            <h3 style={{ color: 'red' }}>Submission Failed</h3>

                            {/* The dynamic message from the catch block above */}
                            <p>Server Resonse // error - {this.state.errorMessage}</p>

                            <button onClick={() => this.setState({ success: null, errorMessage: null })}>
                                Close & Try Again
                            </button>
                        </div>
                    </div>
                )}
                <div className='bookingFormInner'>
                    <Formik
                    
                        initialValues={{ 
                            _id: this.props.initialData?._id,
                            serviceTitle: this.props.serviceTitle || this.props.initialData?.serviceTitle,
                            // dateTime: null,
                            fullName: this.props.initialData?.Name || '',
                            email: this.props.initialData?.email || '',
                            companyName: this.props.initialData?.companyName || '',
                            // address: this.props.initialData?.address || '',
                            phoneNumber: this.props.initialData?.phoneNumber || '',
                            bookingMessage: this.props.initialData?.bookingMessage || ''
                        }}
                        enableReinitialize={this.props.initialData?.update === true}
                        
                            validationSchema = {Yup.object({
                                fullName: Yup.string()
                                            .required('Required Field'),

                                companyName: Yup.string()
                                                .min(1, "Min 1 characters")
                                                .required('Required Field'), 
                                                
                                email: Yup.string()
                                        .email('Wrong Email address')
                                        .required('Required Field'),
                                phoneNumber: Yup.string()
                                            .min(2, "Min 2 characters")
                                            .matches(nationalNumberRegex, "input 9 or 10 numbers(DO NOT include 0 or +44)")
                                            .required('Phone Number is Required '),
                                bookingMessage: Yup.string()
                            })}
                            onSubmit={this.handleFinalSubmit }
                            
                    >

                         {({ values, isSubmitting, status, setFieldValue}) => (
                            

                        <Form className='bookingForm'>
                        
                            <div className='wrapperDesc'>

                                <div className='BookingDesc'>
                                    <h3>Get In Touch With Us</h3>
                                        <p>Describe your project and leave us your contact information, we’ll get back to you soon.</p>
                                    
                                </div>
                                <div className='closeImg'>
                                    {this.props.content}
                                </div>

                            </div>
                           
                            {status && status.error && (
                                <div style={{ color: 'red', marginBottom: '10px' }}>
                                    {status.error}
                                </div>
                            )}
                            <div className='bookingFields'>
                                <div className='leftBookingBlock'>
                                    {/* Name Field */}
                                    <label htmlFor="fullName" className="field-label">Full Name*</label>
                                    <Field type="text" name="fullName" id="fullName" placeHolder="Your Full Name" />
                                    <ErrorMessage className="error" name="fullName" component="div" />

                                    {/* Company Field */}
                                    <label htmlFor="companyName" className="field-label">Company Name*</label>
                                    <Field type="text" name="companyName" id="companyName" placeHolder="Company/Startup Name" />
                                    <ErrorMessage className="error" name="companyName" component="div" />

                                    {/* Email Field */}
                                    <label htmlFor="email" className="field-label">Email Address*</label>
                                    <Field type="text" name="email" id="email" placeHolder="Your Email" />
                                    <ErrorMessage className="error" name="email" component="div" />

                                    {/* Phone Field */}
                                    <label htmlFor="phoneNumber2" className="field-label">Phone Number*</label>
                                    <div className='phoneNumBlock'>
                                        <span className="phone-prefix">+44</span>
                                        {/* Note: htmlFor above matches this ID */}
                                        <Field type="text" name="phoneNumber" id="phoneNumber2" placeHolder="+44 Phone Number" />
                                    </div>
                                    <ErrorMessage className="error" name="phoneNumber" component="div" />

                                    {/* Booking Note Field */}
                                    <label htmlFor="bookingMessage" className="field-label">Message</label>
                                    <Field as="textarea" name="bookingMessage" id="bookingMessage" placeHolder="Booking Message" />
                                    <ErrorMessage className="error" name="bookingMessage" component="div" />
                                        
                                    <Button type="submit" text={this.props.buttonTitle} disabled={isSubmitting} style={{backgroundColor:"#56D55D", color: "white", width: "100%"}}/>
                                </div>
                                
                            </div>
                        </Form>
                         )}
                    </Formik>
                </div>
            </div>
        )
    }
}
export default withRouter(BookingForm);