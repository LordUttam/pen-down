function Sidebar() {
  return (
    <aside className="filters flex flex__dir--col items--start p--x-2 p--y-2">
      <div>
        <h4 className="heading h--4 m__t-1">Categories</h4>

        <ul className="list--stacked items--start p--0">
          <li className="h--4">
            <i className="h--3 bx bxs-home"></i>
            <div className="p--1">Home</div>
          </li>
          <li className="h--4">
            <i className="h--3 bx bxs-archive"></i>
            <div className="p--1">Archive</div>
          </li>
          <li className="h--4">
            <i className="h--3 bx bxs-trash"></i>
            <div className="p--1">Trash</div>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="heading h--4 m__t-1">Labels</h4>

        <ul className="list--stacked items--start p--0">
          <li className="h--4">
            <i className="h--3 bx bx-list-plus"></i>
            <div className="p--1">Todos</div>
          </li>
          <li className="h--4">
            <i className="h--3 bx bxs-briefcase"></i>
            <div className="p--1">Work</div>
          </li>
          <li className="h--4">
            <i className="h--3 bx bxs-washer"></i>
            <div className="p--1">Chores</div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

function SidebarMobile() {
  return (
    <div className="filters--mobile flex flex__dir--col justify--center items--center p--x-1">
      <div>
        <h3 className="heading h--3 m__b-1 m__l-0">Home</h3>
        <h3 className="heading h--3 m__b-1 m__l-0">Archive</h3>
        <h3 className="heading h--3 m__b-1 m__l-0">Trash</h3>
      </div>

      <div>
        <h3 className="heading h--3 m__b-1 m__l-0">Todo</h3>
        <h3 className="heading h--3 m__b-1 m__l-0">Work</h3>
        <h3 className="heading h--3 m__b-1 m__l-0">Shopping</h3>
      </div>
    </div>
  );
}

export { Sidebar, SidebarMobile };
