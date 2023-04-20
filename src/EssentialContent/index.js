import Form from "../Form";
import { LoadingAlert, ErrorAlert } from "../Alert";

const EssentialContent = ({ status }) => {
  switch (status) {
    case "loading":
      return <LoadingAlert />;

    case "error":
      return <ErrorAlert />;

    case "success":
      return <Form />;
  }
};

export default EssentialContent;
