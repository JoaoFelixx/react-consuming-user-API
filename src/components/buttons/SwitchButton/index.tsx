import { Switch } from './style';
import { useSelectorFormat } from 'Context/FormatPresentationProvider';

export function SwitchButton() {
  const { format, setFormat } = useSelectorFormat();

  const changeFormat = () => setFormat?.(format === 'Card' ? 'Table' : 'Card');

  return (
    <Switch className="switch__container">
      <input id="switch-shadow" className="switch switch--shadow" type="checkbox" onClick={changeFormat} />
      <label htmlFor="switch-shadow"></label>
    </Switch>
  )
}