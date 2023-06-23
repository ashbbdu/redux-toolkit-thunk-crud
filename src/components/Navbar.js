import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand flex align-items-center justify-content-between">RTK</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page" href="#">Create</Link>
              </li>
              <li class="nav-item">
                <Link to="/read" class="nav-link" href="#">All Users</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar