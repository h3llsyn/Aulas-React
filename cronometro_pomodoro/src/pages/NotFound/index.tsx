import { Container } from '../../components/Container';
import {MainTemplates} from '../../templates/MainTemplates';

export function NotFound(){
    return(
        <MainTemplates>
            <Container>
                <h1>404 - Página Não Encontrada</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </Container>
        </MainTemplates>
    );
}