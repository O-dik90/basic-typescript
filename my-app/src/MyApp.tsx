import { useContext } from "react";
import { UserContext } from ".";

interface myAppProps {
  title?: string;
}
export const MyApp = ({ title = "Learn Typescript" }: myAppProps) => {
  const myContext = useContext(UserContext);

  return (
    <>
      <p>{title}</p> <p>{myContext.id}</p>
    </>
  );
};
