import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { deleteUser, read } from "../redux/slices/userDetails";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const Read = () => {
const [openModal , setOpenModal] = useState(false)
const [selectedId , setSelectedId] = useState(null)
  const { users, loading } = useSelector((state) => state.user);
  console.log(users , "users")
  const dispatch = useDispatch();
  useEffect(() => {
   if(users.length <= 0 ){
    dispatch(read());
   }
  }, []);

  const navigate = useNavigate()
  
  return (
    <div className="container-fluid">
       {openModal &&  <Modal selectedId={selectedId} users={users} setOpenModal={setOpenModal} />}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        {loading ? (
          <Spinner />
        ) : (
          <tbody>
            {users.length < 0 ? "No record found" : users.map((res) => {
                
              return (
                <tr key={res.id}>
                  <th scope="row">{res.id}</th>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.age}</td>
                  <td>{res.gender}</td>
                  <td>
                    <button onClick={() => {
                    setSelectedId(res.id)
                     setOpenModal(true)
                  }} className="btn btn-primary"> <RemoveRedEyeIcon /></button>
                   
                  </td>
                  <td >
                    <button onClick={() => navigate(`/update/${res.id}`)} className="btn btn-success"> <EditIcon /></button>
                   
                  </td>
                  <td >
                    <button className="btn btn-danger" onClick={() => dispatch(deleteUser(res.id))}><DeleteIcon /></button>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Read;
