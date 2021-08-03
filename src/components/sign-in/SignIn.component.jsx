import React, { useState } from "react";
import CustomButton from "../custon-buttom/CustomButton.component";
import FormInput from "../form-input/FormInput.component";

export default function SignIn() {
  const [state, setState] = useState({ email: "", password: "" });

  function handleSubmit(event = new Event()) {
    event.preventDefault();

    setState({ email: "", password: "" });
  }

  function handleChange(event = new Event()) {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  }

  return (
    <div className="sign-in flex flex-col w-1/3-vw ">
      <h2 className="my-3 text-2xl font-extrabold">I already have a account</h2>
      <span className="">Sign in with your email and password</span>
      <form action="" className="" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
}
