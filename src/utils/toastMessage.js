import { toast } from "react-toastify";
import { TOAST_TYPE } from "constants";

export function toastMessage(message, type = "default") {
  const commonStyle = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  };

  const { SUCCESS, WARM, ERROR, INFO } = TOAST_TYPE;

  switch (type) {
    case SUCCESS:
      return () => toast[SUCCESS](message, commonStyle);

    case WARM:
      return () => toast[WARM](message, commonStyle);

    case ERROR:
      return () => toast[ERROR](message, commonStyle);

    case INFO:
      return () => toast[INFO](message, commonStyle);

    default:
      return () => toast(message, commonStyle);
  }
}
