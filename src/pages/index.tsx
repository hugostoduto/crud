import Layout from "../components/Layout";

export default function Home() {
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
        <span>conteúdo</span>
      </Layout>
    </div>
  );
}
