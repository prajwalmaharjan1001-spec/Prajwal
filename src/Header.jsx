import { NavLink } from "react-router";
import Header from "../../components/Header.jsx";

export default function Home() {
  return (
    <div>

      <Header />

      <h1>This is Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aspernatur, iusto libero vel corporis est fugit commodi ratione deserunt corrupti? Labore nobis minima non ipsum quibusdam animi obcaecati magnam exercitationem.</p>

      <NavLink to={'/page-1'}>Page1</NavLink>
      <NavLink to={'/page-2'}>Page2</NavLink>



    </div>
  )
}
