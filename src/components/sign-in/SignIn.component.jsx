import React, { useState } from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { googleSigInStart } from "../../redux/user/user.actions";
import CustomButton from "../custon-buttom/CustomButton.component";
import FormInput from "../form-input/FormInput.component";

const initialState = {
  email: "",
  password: "",
};

function SignIn(props) {
  const { googleSigInStart } = props;
  const [state, setState] = useState({ ...initialState });

  const handleSubmit = async (event = new Event()) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(state.email, state.password);
      setState({ ...initialState });
    } catch (error) {
      console.log(error);
    }
    setState({ email: "", password: "" });
  };

  function handleChange(event = new Event()) {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  }

  return (
    <div className="flex flex-col sign-in w-1/3-vw ">
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
        <div className="flex justify-between">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            onClick={googleSigInStart}
            type="button"
            isGoogleSignIn={true}
          >
            Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSigInStart: () => dispatch(googleSigInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
