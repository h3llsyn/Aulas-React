import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm} from '../../components/MainForm';
import {MainTemplates} from '../../templates/MainTemplates';
import { TaskStateModel } from '../../models/TaskStateModel';

export function Home(props: HomeProps){
    const {state, setState} = props;
    return(
        <MainTemplates>
            <Container>
                <CountDown />
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTemplates>
    );
}