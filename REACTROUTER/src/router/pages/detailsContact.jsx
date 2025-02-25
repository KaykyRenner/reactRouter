import { useParams } from "react-router-dom";
const ContactDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>contactDetails :{id}</h1>
    </div>
  );
};
export default ContactDetails;
