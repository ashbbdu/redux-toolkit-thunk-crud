import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { create, increment, readById, update } from "../redux/slices/userDetails";


const Update = () => {
   
    const {id} = useParams()
    console.log(id , "state")
    const dispatch = useDispatch();
   
    useEffect(() => {
       dispatch(readById(id))
    } ,[])

    const { userDetail , loading } = useSelector((state) => state.user);
console.log(userDetail , "dg")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });
  useEffect(() => {
setFormData({
    name: userDetail.name,
    email: userDetail.email,
    age: userDetail.age,
    gender: userDetail.gender,
})
  },[userDetail])


  const navigate = useNavigate()

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setFormData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault()
    dispatch(update({formData , id}))
    navigate("/read")
  }

  return (
    <div>
        {loading ? <Spinner /> :  <form className="container-fluid" onSubmit={submitFormHandler}>
      <div class="mb-3">
        <label for="name" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
        />
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">
          Age
        </label>
        <input
          type="number"
          class="form-control"
          name="age"
          value={formData.age}
          onChange={onChangeHandler}
        />
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          id="flexRadioDefault1"
          name="gender"
          value= "Male"
          checked={formData.gender === "Male"}
          onChange={onChangeHandler}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Male
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          id="flexRadioDefault2"
          name="gender"
          value= "Female"
          checked={formData.gender === "Female"}
          onChange={onChangeHandler}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Female
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>}
    </div>
   
  );
};

export default Update;
