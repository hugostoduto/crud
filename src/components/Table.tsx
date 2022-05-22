import Client from "../core/Client";

interface TableProps {
  clients: Client[];
}

export default function Table(props: TableProps) {
  function Header() {
    return (
      <tr>
        <th>Código </th>
        <th>Nome</th>
        <th>idade</th>
      </tr>
    );
  }
  function Data() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
        </tr>
      );
    });
  }

  return (
    <table>
      <thead>{Header()}</thead>
      <tbody>{Data()}</tbody>
    </table>
  );
}
