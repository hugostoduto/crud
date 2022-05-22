import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Home() {
  const clientes = [
    new Client("Hugo", 25, "1"),
    new Client("João", 25, "2"),
    new Client("Maria", 25, "3"),
    new Client("Pedro", 25, "4"),
  ];
  function clientSelected(client: Client) {
    console.log(client.name);
  }
  function clientDeleted(client: Client) {
    console.log(client.name);
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
        <div className="flex justify-end">
          <Button className="mb-4" color="green">
            Novo Cliente
          </Button>
        </div>
        {/* <Table
          clientDeleted={clientDeleted}
          clientSelected={clientSelected}
          clients={clientes}
        ></Table> */}
        <Form />
      </Layout>
    </div>
  );
}
