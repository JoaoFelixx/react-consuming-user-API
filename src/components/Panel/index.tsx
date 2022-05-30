import { SwitchButton } from '../buttons';
import { 
  Card, 
  SearchBar, 
  SearchButton 
} from './style';

export function Panel() {

  return (
    <Card>
      <div>
        <SearchBar />
        <SearchButton>Pesquisar</SearchButton>
      </div>
      <div>
        <select id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <select id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <input type="checkbox" value=""/>
        <label>Adultos</label>
        <span>
          <SwitchButton /> 
        </span>
        Lista
      </div>
    </Card>
  )
}