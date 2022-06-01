import React from "react";
import ReactDOM from "react-dom";
import { Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
          <input
            {...register("firstName", { required: true, maxLength: 10 })}
            placeholder="First Name"
            type="text"
          />
          {errors.firstName && <p>Please check the First Name</p>}
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            {...register("lastName")}
            placeholder="Last Name"
            type="text"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input {...register("email")} placeholder="Email" type="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
