import { useNavigate, useParams } from "react-router-dom";
const ContactDetails = () => {
  const { id } = useParams();
  //6- redirect
  const navigate = useNavigate()
  const handleContact = ()=>{
    console.log('contato enviado')
    return navigate("/")
  }
  return (
    <div>
      <h1>contactDetails :{id}</h1>
  
      <button onClick={handleContact}>enviar mensagem</button>
    </div>
  );
};
export default ContactDetails;
