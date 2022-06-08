import { Jumbo } from './style';

interface Title {
	title: string;
}

export function Jumbotron({ title }: Title) {
	return (
		<Jumbo>
			<h2>{title}</h2>
		</Jumbo>
	)
}