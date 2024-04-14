import fetchApi from "@/actions/fetchapi";

export default async function Home() {

  const data = await fetchApi('http://127.0.0.1:8000/projects/?format=Encrypted')

  return (
    <main className="">
      <div>
        <h2>Decrypt Data</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  );
}
