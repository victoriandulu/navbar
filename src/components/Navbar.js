
import image from "../images/image.jpeg";

export default function Navbar() {
  return (
    <nav className="Nav">
      <a href>
        <img src={image} alt='image' className='image' />
      </a>
      <a href="/" className="Sitetitle">Site Name</a>
      <ul>
        <li className="pricing">
          <a href="/pricing">Pricing</a>
        </li>
        <li className="about">
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
