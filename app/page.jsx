import Link from 'next/link'
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
    </main>
  )
}
