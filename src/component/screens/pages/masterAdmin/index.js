import React, { useState } from "react";
import Styles from "./Index.module.css";
import HeaderPage from "../header/Header";
import AdminIcon from "../../../assets/images/AdminIcon.png";
import { useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { useRef } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";

const MasterAdmin = () => {
  const allData = [
    {
        no:"1",
        name: (
        <Link to="/admin_details" className="Link">
         Robin Pattison
        </Link>
      ),
      email: "robin@gmail.com",
      phone: "205-453-3736",
      role: "Master Admin",
      status: "Active",
      action: (
        <div className={Styles.MasterAdminActionContainer}>
          <EditOutlinedIcon className={Styles.MasterAdminActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.MasterAdminActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.MasterAdminActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"2",
        name: (
        <Link to="/admin_details" className="Link">
         Robin Pattison
        </Link>
      ),
      email: "robin@gmail.com",
      phone: "205-453-3736",
      role: "Admin",
      status: "Active",
      action: (
        <div className={Styles.MasterAdminActionContainer}>
          <EditOutlinedIcon className={Styles.MasterAdminActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.MasterAdminActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.MasterAdminActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"3",
        name: (
        <Link to="/admin_details" className="Link">
         Robin Pattison
        </Link>
      ),
      email: "robin@gmail.com",
      phone: "205-453-3736",
      role: "Admin",
      status: "Active",
      action: (
        <div className={Styles.MasterAdminActionContainer}>
          <EditOutlinedIcon className={Styles.MasterAdminActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.MasterAdminActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.MasterAdminActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"4",
        name: (
        <Link to="/admin_details" className="Link">
         Robin Pattison
        </Link>
      ),
      email: "robin@gmail.com",
      phone: "205-453-3736",
      role: "Admin",
      status: "Active",
      action: (
        <div className={Styles.MasterAdminActionContainer}>
          <EditOutlinedIcon className={Styles.MasterAdminActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.MasterAdminActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.MasterAdminActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"5",
        name: (
        <Link to="/admin_details" className="Link">
         Robin Pattison
        </Link>
      ),
      email: "robin@gmail.com",
      phone: "205-453-3736",
      role: "Admin",
      status: "Active",
      action: (
        <div className={Styles.MasterAdminActionContainer}>
          <EditOutlinedIcon className={Styles.MasterAdminActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.MasterAdminActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.MasterAdminActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"6",
        name: (
        <Link to="/admin_details" className="Link">
         Robin Pattison
        </Link>
      ),
      email: "robin@gmail.com",
      phone: "205-453-3736",
      role: "Admin",
      status: "Active",
      action: (
        <div className={Styles.MasterAdminActionContainer}>
          <EditOutlinedIcon className={Styles.MasterAdminActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.MasterAdminActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.MasterAdminActionDeleteIcon}
          />
        </div>
      ),
    },
    
  ];

  const tableHead = {
    no: "No",
    name: "Name",
    email: "Email",
    phone: "Phone",
    role: "Role",
    status:"Status",
    action: "Actions",
  };
  const countPerPage = 5;
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState(
    cloneDeep(allData.slice(0, countPerPage))
  );

  const searchData = useRef(
    throttle((val) => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        allData
          .filter((item) => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData.slice(from, to)));
  };

  const tableRows = (rowData) => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <div className={Styles.MasterAdminMainContainer}>
      <HeaderPage />
      <div className={Styles.MasterAdmin}>
        <div className={Styles.MasterAdminNavCantainer}>
          <div className={Styles.MasterAdminNavImageAndTextContent}>
            <img src={AdminIcon} alt="AdminIcon" />
            <p className={Styles.MasterAdminNavText}>Admin User</p>
          </div>
          <div className={Styles.MasterAdminNavButtonContent}>
            <button className={Styles.MasterAdminNavexportButton}>
              Export
            </button>
            <button className={Styles.MasterAdminNavAddUserButton}>
              Add User
            </button>
          </div>
        </div>

        <div className={Styles.MasterAdminTabsContainerTable}>
          <div class="search">
            <input
              placeholder="Search the list..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <table>
            <thead>
              <tr>{headRow()}</tr>
            </thead>
            <tbody className="trhover">{tableData()}</tbody>
          </table>
          <div className={Styles.MasterAdminTablePagination}>
            <Pagination
              pageSize={countPerPage}
              onChange={updatePage}
              current={currentPage}
              total={allData.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MasterAdmin;
