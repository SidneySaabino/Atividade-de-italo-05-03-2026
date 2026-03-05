import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const projetos = [
    {
      nome: "Náutico nos Aflitos",
      img: "https://i.ytimg.com/vi/i-3ul_9d6do/hq720.jpg",
    },
    {
      nome: "Náutico fora de casa",
      img: "https://i.ytimg.com/vi/tztK-igtvnU/hq720.jpg",
    },
    {
      nome: "Náutico nos Aflitos 2",
      img: "https://i.ytimg.com/vi/qtBv6FztM-Q/hq720.jpg",
    },
  ];

  const projetosFiltrados = projetos.filter((projeto) =>
    projeto.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>Meu portifólio</h1>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.title}>Olá, Eu sou Sidney</h2>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Sobre Mim</h3>
        <p style={styles.text}>
          Aqui esta algumas imagens do nautico dando uma pisa no sport!!
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Projetos</h3>

        
        <input
          type="text"
          placeholder="Pesquisar projeto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <div style={styles.projects}>
          {projetosFiltrados.length > 0 ? (
            projetosFiltrados.map((projeto, index) => (
              <div key={index} style={styles.card}>
                <img src={projeto.img} alt={projeto.nome} style={styles.image} />
                <p style={{ color: "black", marginTop: "10px" }}>
                  {projeto.nome}
                </p>
              </div>
            ))
          ) : (
            <p>Nenhum projeto encontrado </p>
          )}
        </div>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Sidney Sabino
      </footer>
    </div>
  );
}

const styles: any = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "center",
    background: "linear-gradient(to right, #f50b0b, #ff0404)",
    minHeight: "100vh",
    color: "white",
  },
  header: {
    padding: "35px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  hero: {
    padding: "40px 20px",
  },
  title: {
    fontSize: "32px",
  },
  section: {
    padding: "40px 20px",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  text: {
    opacity: 0.85,
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "8px",
    border: "none",
    marginBottom: "30px",
    fontSize: "16px",
  },
  projects: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },
  card: {
    background: "white",
    padding: "10px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
  },
  image: {
    width: "260px",
    borderRadius: "8px",
  },
  footer: {
    marginTop: "50px",
    padding: "20px",
    background: "rgba(0,0,0,0.3)",
  },
};

export default App;
