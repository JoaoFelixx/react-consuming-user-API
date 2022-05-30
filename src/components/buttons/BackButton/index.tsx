import { localizedStrings } from 'constants/localizedStrings';
import { Link } from 'react-router-dom';
import { Button } from './style';

export function BackButton() {
  return (
    <Link to='/'>
      <Button>{localizedStrings.back}</Button>
    </Link>
  )
}