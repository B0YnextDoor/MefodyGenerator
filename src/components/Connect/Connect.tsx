import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import "./Connect-module.css";

interface IFormInput {
  firstName: string;
  phoneNumber: string;
  email: string;
  msg: string;
}
// ${process.env.REACT_APP_BASE_URL}

export const Connect = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post(
        `https://mefodiy.net/api/main/send_mail/`,
        {
          name: data.firstName,
          phone: data.phoneNumber,
          email: data.email,
          message: data.msg,
        }
      );
      // console.log(response);
    } catch (error: any) {
      console.log(error);
    }
    reset({
      firstName: "",
      phoneNumber: "",
      email: "",
      msg: "",
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        paddingTop: "0px",
        color: "black",
        zIndex: 999999,
      }}
    >
      <h1>Связаться с нами</h1>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <label>Имя:</label>
        <input
          type="text"
          {...register("firstName", {
            required: { value: true, message: "Заполните это поле!" },
          })}
          placeholder="Введите имя"
        />
        {errors?.firstName?.type === "required" && (
          <p>{errors.firstName.message}</p>
        )}
        <label>Номер телефона:</label>
        <input
          type="text"
          {...register("phoneNumber", {
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
              message: "Неверный номер телефона!",
            },
          })}
          placeholder="Введите ваш номер телефона"
        />
        {errors?.phoneNumber?.type == "pattern" && (
          <p>{errors.phoneNumber.message}</p>
        )}
        <label>Адрес электронной почты:</label>
        <input
          type="text"
          {...register("email", {
            required: { value: true, message: "Заполните это поле!" },
          })}
          placeholder="Введите адрес электронной почты для связи"
        />
        {errors?.firstName?.type === "required" && (
          <p>{errors.firstName.message}</p>
        )}
        <label>Сообщение:</label>
        <input
          type="text"
          {...register("msg")}
          placeholder="Введите ваше сообщение"
        />
        <input type="submit" value="Связаться с нами" />
      </form>
    </div>
  );
};
