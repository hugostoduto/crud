import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";
4;
import { useEffect, useState } from "react";
import ClientInterface from "../core/ClientInterface";
import CollectionClients from "../backend/db/CollectionClients";

export default function Home() {
  const repo: ClientInterface = new CollectionClients();

  const [state, setState] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(Client.void());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAllClients().then((clients) => {
      setClients(clients);
      setState("table");
    });
  }
  function clientSelected(client: Client) {
    setClient(client);
    setState("form");
  }
  async function clientDeleted(client: Client) {
    await repo.deleteClient(client);
    getAll();
  }

  function toTable() {
    setState("table");
  }
  function toForm() {
    setClient(Client.void());
    setState("form");
  }
  async function saveClient(client: Client) {
    await repo.saveClient(client);
    getAll();
  }

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
