export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return (
    <main>
      <section>
        <h1>Test</h1>
      </section>
    </main>
  )
}
