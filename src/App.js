import './App.css';
import Input from "./components/Input";
import {useRef} from "react";
import {useForm} from "react-hook-form";
import Alert from "./components/Alert";

function App() {
  const nameRef = useRef();
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  const {ref, ...rest} = register("name", {
    required: {
      value: true,
      message: "This field is required"
    },
    minLength: {
      value: 5,
      message: "Should be greater than 5 characters"
    },
    maxLength: {
      value: 10,
      message: "Should be smaller that 10 characters"
    }
  });

  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <div className={'column is-half is-offset-3'}>
        {
          errors.name && (
            <div>
              <Alert color={'is-danger mb-3'}>{errors.name.message}</Alert>
            </div>
          )
        }
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            ref={(e) => {
              ref(e);
              nameRef.current = e
            }}
            label={'Name'}
            type="text"
            size={'is-large'}
            placeholder={'Enter Name'}
            {...rest}
          />
          <br/>
          <button className={'button has-text-centered'} onClick={onSubmit}>Click</button>
        </form>
      </div>
    </div>
  );
}

export default App;
