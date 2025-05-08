export default async function Page({
  params
}: {
  params: Promise<{ user: string[] }>
}) {
  const { user } = await params

  return (
    <div>
      {user.map((id) => (
        <p key={id}>{id}</p>
      ))}
    </div>
  )
}
