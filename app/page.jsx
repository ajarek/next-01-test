import Link from 'next/link'
// npx json-server --watch  ./_data/db.json --port 4000 
export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsa corporis dolorum adipisci aut omnis voluptatum aperiam recusandae dolor eligendi ad facilis est, eos ab maiores assumenda, veniam in consequuntur placeat fugiat itaque. Odit delectus nulla accusamus qui sit error aut quibusdam consequatur quidem, vitae consequuntur voluptatem commodi voluptas minus!</p>
      <div className="flex justify-center my-8" >
       <Link href='/tickets'>
        <button className='btn-primary'>View Tickets</button>
       </Link>
      </div>
      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div>
    </main>
    
  )
}
