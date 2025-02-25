import "../../App.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    
      <div>
        <p className="read-the-docs">
          CONTATO
          <p>
            <Link to="/contact/1">forma de contato 1</Link>
          </p>
          <p>
            <Link to="/contact/2">forma de contato 2</Link>
          </p>
          <p>
            <Link to="/contact/3">forma de contato 3</Link>
          </p>
        </p>
      </div>
    
  );
}

export default Contact;
