import Form from "../Form";
import { LoadingAlert, ErrorAlert } from "../Alert";

const EssentialContent = ({ status }) => {
  switch (status) {
    case "waiting":
      return <LoadingAlert />;

    case "notOk":
      return <ErrorAlert />;

    case "ok":
      return <Form />;
  }
};

export default EssentialContent;
