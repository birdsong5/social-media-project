import { useForm } from "react-hook-form";
import * as yup from "yup";

export const CreateForm = () => {
  return (
    <form action="">
      <input type="text" placeholder="Title..." />
      <input type="text" placeholder="Description..." />
      <input type="submit" />
    </form>
  );
};
