import { Person } from "./Person";


export const List = ({ people }) => {
    console.log(people);
    return (
        <section>
            {people.map((person) => {
                return <Person {...person} />
            })}
        </section>
    );
}
