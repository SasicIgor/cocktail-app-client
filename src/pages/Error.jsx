import { useSelector } from "react-redux";

const Error = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      {user ? (
        <h1 style={{ color: "white" }}>
          Im sorry but the error occured. Please try again later!
        </h1>
      ) : (
        <h1 style={{ color: "white" }}>
          Im sorry, but you cant access this page if you are not sign in!
        </h1>
      )}
    </>
  );
};

export default Error;
