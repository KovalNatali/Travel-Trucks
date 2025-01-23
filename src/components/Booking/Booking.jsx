import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import css from "./Booking.module.css";

const BookingForm = () => {
  const [notification, setNotification] = useState(""); // Стан для відображення повідомлення

  // Використовуємо Formik для керування формою
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      day: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      day: Yup.date().required("Day is required"),
      comment: Yup.string().optional(),
    }),
    onSubmit: (values) => {
      // Відправка форми (наприклад, до сервера)
      // Тут просто показуємо повідомлення про успішне бронювання
      console.log("Booking successful with values:", values);

      setNotification("Your booking was successful!"); // Показуємо повідомлення
      formik.resetForm(); // Очищаємо форму після успішної відправки
    },
  });

  return (
    <div className={css.bookingForm}>
      <div className={css.textare}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.txt}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      {notification && <div className={css.notification}>{notification}</div>}{" "}
      {/* Відображаємо нотифікацію */}
      <form onSubmit={formik.handleSubmit} className={css.form}>
        {/* Поле Name */}
        <div className={css.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name*"
            className={formik.touched.name && formik.errors.name ? "error" : ""}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error-message">{formik.errors.name}</div>
          )}
        </div>

        {/* Поле Email */}
        <div className={css.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email*"
            className={
              formik.touched.email && formik.errors.email ? "error" : ""
            }
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </div>

        {/* Поле Day (Дата) */}
        <div className={css.formGroup}>
          <input
            type="date"
            id="day"
            name="day"
            placeholder="Booking date*"
            value={formik.values.day}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.day && formik.errors.day ? "error" : ""}
          />
          {formik.touched.day && formik.errors.day && (
            <div className="error-message">{formik.errors.day}</div>
          )}
        </div>

        {/* Поле Comment (Коментар) */}
        <div className={css.formGrou}>
          <textarea
            id="comment"
            name="comment"
            placeholder="Comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* Кнопка відправки форми */}
        <div className={css.buttonsubmit}>
          <button type="submit" className={css.butto}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
