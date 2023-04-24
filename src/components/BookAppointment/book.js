import React from "react";
import pic1 from "../../assets/rectangle-1@3x.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  salon: "",
  date: "",
  service: "",
};

const BookSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string()
    .min(11, "Phone No. must be of 11 characters")
    .required("Phone No. is required"),
  salon: Yup.string().required("Salon Name is required"),
  service: Yup.string().required("Services is required"),
  date: Yup.string().required("Date is required"),
});

const Desktop2 = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: BookSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  return (
    <div className="desktop-2">
      <div className="booking2">
        <div className="booking">
          <div className="image1">
            <img className="image1-child" alt="" src={pic1} />
          </div>
          <b className="book-your-appointment">Book your Appointment</b>

            <form onSubmit={handleSubmit}>
                <div>
                  <input
                    className="email-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="error">{errors.email}</p>
                  ) : null}
                </div>

                <div>  
                  <input
                    className="name1"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <p className="error1">{errors.name}</p>
                  ) : null}
                </div>
                  
                <div>
                  <input 
                    className="phone" 
                    type="tel"
                    name="phone" 
                    placeholder="Phone No." 
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone ? (
                    <p className="error2">{errors.phone}</p>
                  ) : null}
                </div>

                <div>
                  <input
                    className="service"
                    type="search"
                    name="service"
                    placeholder="Services you want to avail"
                    value={values.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.service && touched.service ? (
                    <p className="error3">{errors.service}</p>
                  ) : null}
                </div>

                <div>
                  <input
                    className="salon-names"
                    type="search"
                    name="salon"
                    placeholder="Salon Name"
                    value={values.salon}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.salon && touched.salon ? (
                    <p className="error4">{errors.salon}</p>
                  ) : null}
                </div>

                <div>
                  <input 
                    className="date" 
                    type="text" 
                    name="date"
                    placeholder="Date" 
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.date && touched.date ? (
                    <p className="error5">{errors.date}</p>
                  ) : null}
                </div>

              <button className="book">
                <b className="book1">{`Book `}</b>
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;