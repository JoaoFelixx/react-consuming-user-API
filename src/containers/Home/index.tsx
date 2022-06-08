import { useSelectorApp } from 'Context/ApplicationProvider';
import { 
  Panel,
  Spinner,
  Jumbotron,
  ListUserCard, 
  ListUserTable 
} from 'components';
import { Flex, Container } from './style';

export function Home() {
  const { formatList, isLoading } = useSelectorApp();

  const Lists = (): JSX.Element => ({
    'Card': <ListUserCard />,
  }[formatList] || <ListUserTable />)

  return (
    <Flex>
      <Panel /><br />
      <Container>
        <Jumbotron title="Lista de usuários" /><br />
        {isLoading ? <Spinner /> : <Lists />}
      </Container>
    </Flex>
  )
}