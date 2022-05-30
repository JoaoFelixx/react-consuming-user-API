import { useSelectorFormat } from 'Context/FormatPresentationProvider';
import { 
  Panel,
  ListUserCard, 
  ListUserTable 
} from 'components';

export function Home() {
  const { format } = useSelectorFormat();

  return (
    <div>
      <Panel />
      {format === 'Card' ? <ListUserCard /> : <ListUserTable />}
    </div>
  )
}