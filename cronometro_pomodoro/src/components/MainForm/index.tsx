import { Formulario } from '../Formulario';
import { Cycles } from '../Cycles'
import { Button } from '../Button'
import { CirclePlay } from 'lucide-react'

export function MainForm() {
    return (
        <form className="form" action="">
            <div className="formRow">
                <Formulario
                labelText='task'
                id='meuInput'
                type='text'
                placeholder='Digite algo...' />
            </div>
            <div className='formRow'>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='formRow'>
                <Cycles />
            </div>
            <div className='formRow'>
                <Button icon={<CirclePlay />} />
            </div>
        </form>
    )
}