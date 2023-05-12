import { Name } from "./Person.types";
type NamesProps = {
    name: Name[]
}

const PersonList = (props: NamesProps) => {
    return (
        <>
            <ul>
               {
                props.name.map(person => (
                    <li key={person.first}>{person.first} {person.last}</li>
                ))
               }
            </ul>
        </>
    )
}
 
export default PersonList;