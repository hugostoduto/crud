interface InputsProps {
  text: string;
  type?: "text" | "number";
  value: any;
  readOnly?: boolean;
}
export default function Inputs(props: InputsProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-4">{props.text}</label>
      <input
        className={`
          border border-blue-500 rounded-lg focus:outline-none
          bg-gray-100 px-4 py-2
         ${props.readOnly ? "" : "focus:bg-white"}

        `}
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readOnly}
      />
    </div>
  );
}
