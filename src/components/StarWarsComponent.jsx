export default function StarWarsComponent({data}){
    return(
    <section>
    {(!data || data.length == 0) && <p>não há resultados ou a carregar</p>}

    {(data && data.length >0) && (
        <ul className="places">
        {data.map((item) => (
            item.name ? 
            <li className="place-item" key={item.name}>
                <p><b>{item.name}</b>{item.birth_year},  {item.gender}</p>
            </li>
            :
            <li className="place-item" key={item.title}>
            <p><b>{item.title}</b>{item.opening_crawl},  {item.release_date}</p>
            </li>
       
        )
        )}
        </ul>
    )}

    
</section>)
}