import { useSelectorApp } from 'Context/ApplicationProvider';
import { 
  Panel,
  ListUserCard, 
  ListUserTable 
} from 'components';

export function Home() {
  const { formatList } = useSelectorApp();

  return (
    <div>
      <Panel />
      {formatList === 'Card' ? <ListUserCard /> : <ListUserTable />}
    </div>
  )
}