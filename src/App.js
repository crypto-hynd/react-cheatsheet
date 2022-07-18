import './App.css';
import Input from "./components/Input";
import Alert from "./components/Alert";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className={'column is-half is-offset-3'}>
        <>
          <Input
            label={'Text'}
            type="text"
            size="is-large"
            placeholder={'Enter Text'}
          />
          <br/>
          <Input
            label={'Number'}
            type="number"
            size="is-normal"
            isError={true}
            placeholder={'Enter Number'}
          />
          <br/>
          <Input
            label={'Password'}
            type="password"
            size="is-normal"
            placeholder={'Enter Password'}
          />
        </>
        <br/>
        <>
          <Alert type={'is-primary'} msg={'Operation Successfully!'}/>
          <Alert type={'is-danger'} msg={'Operation Failed!'}/>
        </>
        <br/>
        <>
          <Card>Simple Card</Card>
          <br/>
          <Card image={'https://bulma.io/images/placeholders/128x128.png'} alt={'Card Image'}>
            Card with image
          </Card>
        </>
      </div>
    </div>
  );
}

export default App;
