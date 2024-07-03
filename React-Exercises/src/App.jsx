import './App.css';
import { AddAndChange } from './components/AddAndChange';
import { BorderChange } from './components/Border';
import { ChangeLastName } from './components/ChangeLast';
import { ChangeSize } from './components/ChangeSize';
import { ChangingColor } from './components/Color';
import { UserEmail } from './components/Email';
import { FontSize } from './components/FontSize';
import { FontWeight } from './components/FontWeigth';
import { Form } from './components/Form';
import { Info } from './components/Info';
import { Numbers } from './components/Numbers';
import { ChangeOpacity } from './components/Opacity';
import { ReplaceInfo } from './components/ReplaceInfo';
import { TextStyle } from './components/TextStyle';
import { Role } from './components/Role';

function App() {
  return (
    <div className="App">
      <AddAndChange />
      <BorderChange />
      <ChangeLastName />
      <ChangeSize />
      <ChangeLastName />
      <UserEmail />
      <FontSize />
      <FontWeight />
      <Form />
      <Info />
      <Numbers />
      <ChangeOpacity />
      <ReplaceInfo />
      <Role />
      <TextStyle />
      <ChangingColor />
    </div>
  );
}

export default App;
