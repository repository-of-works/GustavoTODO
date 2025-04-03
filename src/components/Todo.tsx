import { type Todo as TodoType } from "../types"

type Props = TodoType

//lo que le va llegar al (export const Todo) es simplemente el id, title, completed
export const Todo: React.FC<Props> = ({ id, title, completed }) => {

    return (
        <div className=" view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={()=>{}}    
            />
            <label>title</label>
            <button 
                className="destroy"
                onClick={()=>{}}
            />
        </div>
    )
}