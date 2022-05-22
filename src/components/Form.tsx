import Input from "./Input";
import Client from "../core/Client";
import { useState } from "react";

interface FormProps {
  client: Client;
}
export default function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setage] = useState(props.client?.age ?? 0);
  return (
    <div>
      {id ? <Input text="Id" value="Id" /> : false}
      <Input text="Nome" value="Nome" />
      <Input text="Idade" type="number" value="Idade" />
    </div>
  );
}
