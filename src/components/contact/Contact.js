import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";
import { Jumbotron } from "react-bootstrap";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please provide your first name")
    .min(2, "First name is too short"),
  lastName: yup
    .string()
    .required("Please provide your last name")
    .min(2, "Last name is too short"),
  email: yup
    .string()
    .required("An email address is required")
    .email("Enter a valid email address please"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(10, "Too short message")
    .max(200, "Too many characters")
});

function Contact() {
    const { register, handleSubmit, errors} = useForm({
        validationSchema: schema
    });

    function onSubmit (data) {
        console.log("data", data);
    }

    return (
      <Jumbotron>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              name="firstName"
              placeholder="First Name"
              ref={register}
            />
            {errors.firstName && (
              <ErrorMessage>{errors.firstName.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              name="lastName"
              placeholder="Last Name"
              ref={register}
            />
            {errors.lastName && (
              <ErrorMessage>{errors.lastName.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control name="email" placeholder="Email" ref={register} />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="message"
              placeholder="Enter your message here"
              ref={register}
            />
            {errors.message && (
              <ErrorMessage>{errors.message.message}</ErrorMessage>
            )}
          </Form.Group>

          <Button className="btn btn-lg" type="submit">Send</Button>
        </Form>
      </Jumbotron>
    );




}

export default Contact;
