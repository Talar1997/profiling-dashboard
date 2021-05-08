import {Button, Form, TextInput} from "carbon-components-react"
import {PasswordInput} from "carbon-components-react/lib/components/TextInput"

export default function LoginForm(props) {
  return (
    <Form style={{maxWidth: '400px'}}>
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
        style={{marginTop: '1.5rem'}}
      >
        Login
      </Button>
    </Form>
  );
}