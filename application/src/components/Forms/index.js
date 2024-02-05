import {useEffect, useState} from "react";
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./GetInTouchElements";
import { Button } from "../ButtonElements";
import Alert from "bootstrap/js/src/alert";

const Client = () => {

  const [client, setClient] = useState({
    firstName : "",
    lastName : "",
    email : "",
    message: ""
  });

  const [successful, setSuccessful] = useState(false);
  const formData = new FormData();
  formData.append('firstName',client.firstName);
  formData.append('lastName',client.lastName);
  formData.append('email', client.email);
  formData.append('message', client.message);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: formData
  };

  const onSubmit = (event) => {
    event.preventDefault();

    fetch('https://formsubmit.co/ajax/your@email.com', options)
        .then(response => response.json())
        .then(data => {console.log(data)
          setSuccessful(true)})
        .catch(error => console.error(error));

    event.target.reset()

    setEmployee({employeeName: "", imageData: "", message: ""});
  };

  useEffect(() => {
    if(successful)
      setInterval(() => setSuccessful(false), 500);
  }, [successful]);



  return (
    <SigninContainer>
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Get in Touch</h3>
          <form onSubmit={onSubmit}>
            <SigninP>First Name</SigninP>
            <SigninInput type="text" name="name" placeholder="Enter your First Name..." onChange={(event) => setClient({ ...client, firstName: event.target.value })}/>
            <SigninP>Last Name</SigninP>
            <SigninInput type="text" placeholder="Enter your Last Name..." onChange={(event) => setClient({ ...client, lastName: event.target.value })}/>
            <SigninP>Email</SigninP>
            <SigninInput type="email" name="email" placeholder="Enter your Email..." onChange={(event) => setClient({ ...client, email: event.target.value })}/>
            <SigninP>Message</SigninP>
            <textarea rows="5" cols="40" placeholder="Enter your Message..." onChange={(event) => setClient({ ...client, message: event.target.value })}/>
            <Button className="mt-5 mb-3">Submit</Button>
          </form>
          {successful && <Alert className="alert-success"> Message  posted successfully</Alert>}
        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Client;
