import { Switch } from './style';
import { useSelectorApp } from 'Context/ApplicationProvider';

export function SwitchButton() {
  const { formatList, setFormatList } = useSelectorApp();

  const changeFormat = () => setFormatList?.(formatList === 'Card' ? 'Table' : 'Card');

  return (
    <Switch className="switch__container">
      <input id="switch-shadow" className="switch switch--shadow" type="checkbox" onClick={changeFormat} />
      <label htmlFor="switch-shadow"></label>
    </Switch>
  )
}