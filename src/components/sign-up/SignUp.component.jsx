import React, { useState } from "react";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custon-buttom/CustomButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function SignUp() {
  const [state, setState] = useState({ ...initialState });

  const handleSubmit = async (e = new Event()) => {
    console.log("Is sumbiting");
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      alert("Password don't match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        state.email,
        state.password
      );
      const { displayName } = state;
      await createUserProfileDocument(user, { displayName });
      setState({ ...initialState });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e = new Event()) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="flex flex-col sign-up w-1/3-vw ">
      <h2 className="my-3 text-2xl font-extrabold">I do not have a account</h2>
      <span className="">Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={state.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
}
