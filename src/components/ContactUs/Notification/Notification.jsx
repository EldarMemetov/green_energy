import { ToastContainer, toast } from "react-toastify"; // Импортируем необходимые модули
import "react-toastify/dist/ReactToastify.css"; // Импортируем стили

const Notification = {
  notify: () => {
    toast.success(
      "Your application has been submitted! Thank you. We will contact you soon.",
      {
        position: "top-right", // Используем строковое значение
        autoClose: 5000,
      }
    );
  },
  Container: () => <ToastContainer position="top-right" autoClose={5000} />,
};

export default Notification; // Экспортируем Notification
