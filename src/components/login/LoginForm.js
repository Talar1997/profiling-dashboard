import {Button, Form, TextInput} from "carbon-components-react"
import {PasswordInput} from "carbon-components-react/lib/components/TextInput"
import ArrowRight16 from "@carbon/icons-react/lib/arrow--right/16"

export default function LoginForm(props) {
  return (
    <Form style={{width: '100%'}}>
      <TextInput
        id="one"
        labelText="Email"
        style={{marginBottom: '1rem'}}
      />
      <PasswordInput
        id="two"
        labelText="Password"
      />
      <Button
        className="loginButton"
        renderIcon={ArrowRight16}
        iconDescription="Icon Description"
      >
        Login
      </Button>
    </Form>
  );
}