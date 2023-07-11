// stateless functional component
//Life cycle hooks can't be used in stateless fucntion
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge.badge-pill.badge-secondary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
