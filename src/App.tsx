import { Nav } from './tsxhome/nav'
import { Home } from './tsxhome/home'
import { Comunicacao } from './tsxhome/comunicacao'
import { Consultoria } from './tsxhome/consultoria'
import { Servicos } from './tsxhome/servicos'
import { Contato } from './tsxhome/contato'
import { Footer } from './tsxhome/footer'
import { Mobile } from './tsxhome/mobile'
import './index.css'
export default function App() {
  return (

    <main>
      <header>
        <Nav />
      </header>
      <Home />
      <Comunicacao />
      <Consultoria />
      <Mobile />
      <Servicos />
      <Contato />
      <Footer />
    </main>

  )
}