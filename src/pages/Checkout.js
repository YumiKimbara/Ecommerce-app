import { useLocation } from "react-router-dom";
import { GiPartyPopper } from "react-icons/gi";
import { FaRegSadCry } from "react-icons/fa";
import { useEffect } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Checkout = ({ setBag }) => {
  const params = useQuery();
  const success = params.get("success");
  const canceled = params.get("canceled");
  useEffect(() => {
    setTimeout(() => {
      if (success === "true") setBag([]);
    }, 100);
  }, []);
  return (
    <>
      {success && (
        <>
          <h3 className="text-center my-4">Checkout successful!</h3>
          <h1 className="text-center my-4">
            <GiPartyPopper />
          </h1>
        </>
      )}
      {canceled && (
        <>
          <h3 className="text-center my-4">Checkout failed!</h3>
          <h1 className="text-center my-4">
            <FaRegSadCry />
          </h1>
        </>
      )}
    </>
  );
};
export default Checkout;
