import styles from "../styles/Filters.module.css";

export default function Filters({
    handleFilterOrigen,
    handleFilterGenre,
    genres,
    handleOrdered,
}) {

    return(
        <div className={styles.filterBox}>
            <select onChange={handleFilterOrigen}>
                <option value='All'>Origin</option>
                <option value='created'>Community</option>
                <option value='api'>Web</option>
            </select>

            <select onChange={handleFilterGenre}>
                <option value='All'>Genres</option>
                {genres?.map((gen) => {
                    return (
                    <option key={gen.id} value={gen.name}>
                        {gen.name}
                    </option>
                );
                })}
            </select>   
            
            <select onChange={handleOrdered}>
                <option hidden>Order</option>
                <option value='Asc'>Name Asc.</option>
                <option value='Desc'>Name Desc.</option>
                <option value='Min'>Rating Asc.</option>
                <option value='Max'>Rating Desc.</option>
            </select>
        </div>
    );
}