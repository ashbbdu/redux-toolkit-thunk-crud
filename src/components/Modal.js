import CloseIcon from '@mui/icons-material/Close';
const Modal = ({selectedId , users , setOpenModal}) => {
   
    const filteredUser =  users.filter(ele => ele.id === selectedId)
    return (
        
        <div className="custom-modal">
            <button className='btn btn-secondary close-modal' onClick={() => setOpenModal(false)}><CloseIcon /></button>
            <h1>{filteredUser[0].name}</h1>
            <h1>{filteredUser[0].email}</h1>
            <h1>{filteredUser[0].age}</h1>
            <h1>{filteredUser[0].gender}</h1>
        </div>
    )   
}

export default Modal;