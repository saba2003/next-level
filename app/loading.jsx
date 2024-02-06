async function getFacts() {
  const res = await fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
      headers: {
        'X-Api-Key': 'Y4dtSPaGHzleoh69H9Pihg==nWxGT5Xt0jkQRZxm'
      },
      next: {
        revalidate: 0 //revalidate waits a certain time before re-renders updated data
      }
  })

  return res.json()
}

export default async function Loading() {
  const facts = await getFacts()

  return (
    <main className="text-center">
        <h2 className="text-primary">Loading...</h2>
        {facts.length === 1 && facts.map(fact => (
          <p>fun fact: {fact.fact}</p> 
        ))}
    </main>
  )
}
