import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const clientes = [
    new Client("Hugo", 25, "1"),
    new Client("João", 25, "2"),
    new Client("Maria", 25, "3"),
    new Client("Pedro", 25, "4"),
  ];
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
        <Table clients={clientes}></Table>
      </Layout>
    </div>
  );
}
