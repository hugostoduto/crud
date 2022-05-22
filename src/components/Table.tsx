import Client from "../core/Client";

interface TableProps {
  clients: Client[];
}

export default function Table(props: TableProps) {
  function Header() {
    return (
      <tr>
        <th className="text-left p-4">Código </th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">idade</th>
      </tr>
    );
  }
  function Data() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`
          ${i % 2 === 0 ? "bg-blue-300" : "bg-blue-200"}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
        </tr>
      );
    });
  }

  return (
    <table className="w-full rounded-xl overflow-hidden ">
      <thead
        className={`
        bg-gradient-to-r from-blue-500 to-blue-700
        text-gray-100

        `}
      >
        {Header()}
      </thead>
      <tbody>{Data()}</tbody>
    </table>
  );
}
