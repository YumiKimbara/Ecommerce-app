import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "../scss/SignIn.scss";

const CreateAccount = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sendNewsletter, setSendNewsletter] = useState(false);

  const validateForm = () => {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0
    );
  };

  const createAccount = async (e) => {
    e.preventDefault();

    resetForm();

    const url = "https://e-commerce-api.belzaondrej.com/users";

    const createFormData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      sendNewsletter: sendNewsletter,
    };

    try {
      var response = await axios.post(url, createFormData);
      alert("Your account was created." + response.data);
    } catch (error) {
      console.error(error);
      alert("Sorry, account was not created.");
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setSendNewsletter(false);
  };

  const content = (
    <div>
      <div className="newCustomerTitle">
        <h2>NEW CUSTOMER?</h2>
      </div>
      <div>
        <p className="required">Required*</p>
        <form onSubmit={createAccount}>
          <input
            className="forms"
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="forms"
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="forms"
            type="email"
            name="email"
            placeholder="Email Address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="forms"
            type="password"
            name="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="newsletter">
            <input
              style={{ display: "inline" }}
              type="checkbox"
              name="newsletter"
              value={sendNewsletter}
              onChange={(e) => setSendNewsletter(e.target.value)}
            />
            <label htmlFor="newsletter">Sign up for Newsletter</label>
          </div>
          <Button
            className="forms"
            variant="dark"
            type="submit"
            disabled={!validateForm()}
          >
            CREATE ACCOUNT
          </Button>
        </form>
      </div>
    </div>
  );
  return (
    <>
      <div onMouseOver={props.onMouseOver}>
        <div
          className={`signInWrapper ${
            props.isHovered ? "bgStyleHovered" : "bgStyle"
          }`}
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
