import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Home() {
  const {
    client,
    state,
    clients,
    saveClient,
    clientSelected,
    clientDeleted,
    toTable,
    toForm,
    getAll,
  } = useClients();
  return (
    <div
      className={`
      flex h-screen
      justify-center
      items-center
      bg-gradient-to-r from-blue-500 to-blue-700
      text-white

    `}
    >
      <Layout title="Cadastro Simples">
        {state === "table" ? (
          <>
            <div className="flex justify-end">
              <Button onClick={toForm} className="mb-4" color="green">
                Novo Cliente
              </Button>
            </div>
            <Table
              clientDeleted={clientDeleted}
              clientSelected={clientSelected}
              clients={clients}
            ></Table>
          </>
        ) : (
          <Form clientChanged={saveClient} cancel={toTable} client={client} />
        )}
      </Layout>
    </div>
  );
}
