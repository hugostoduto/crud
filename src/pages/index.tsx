import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";
4;
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState<"table" | "form">("table");
  const [clients, setClients] = useState<Client>(Client.void());

  const clientes = [
    new Client("Hugo", 25, "1"),
    new Client("João", 25, "2"),
    new Client("Maria", 25, "3"),
    new Client("Pedro", 25, "4"),
  ];
  function clientSelected(client: Client) {
    setClients(client);
    setState("form");
  }
  function clientDeleted(client: Client) {
    console.log(client.name);
  }

  function toTable() {
    setState("table");
  }
  function toForm() {
    setClients(Client.void());
    setState("form");
  }
  function saveClient(client: Client) {
    setState("table");
    console.log({
      name: client.name,
      age: client.age,
    });
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
              clients={clientes}
            ></Table>
          </>
        ) : (
          <Form clientChanged={saveClient} cancel={toTable} client={clients} />
        )}
      </Layout>
    </div>
  );
}
