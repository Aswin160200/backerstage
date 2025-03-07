import React, { useEffect, useState } from "react";
import Styles from "./Index.module.css";
import SuperAdminHeaderPage from "../superAdminHeader/Index";
import ProducersImageAdminView from "../../../../assets/images/ProducersImageAdminView.png";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { useRef } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800,
        height: "60vh",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: "10px",
        overflowY: "scroll",
      };
      
      export const InputStyled = styled(TextField)`
        & .MuiOutlinedInput-root {
          border-color: rgb(166, 167, 172);
          color: rgb(13, 13, 14);
          height: 46px;
          font-size: 14px;
      
          & fieldset {
            border-color: rgb(166, 167, 172);
          }
      
          &:hover fieldset {
            border-color: rgb(166, 167, 172);
          }
      
          &.Mui-focused fieldset {
            border-color: rgb(166, 167, 172);
            border: 1px solid rgb(166, 167, 172);
          }
      
          &.Mui-active fieldset {
            border-color: rgb(166, 167, 172);
          }
        }
      `;
      
      export const SelectStyled = styled(Select)`
      & .MuiOutlinedInput-root {
        height: 44px;
        font-size: 14px;
        color: rgb(13, 13, 14);
        border-radius: 6px;
        transition: border-color 0.2s ease-in-out;
      
        & fieldset {
           border-color: rgb(166, 167, 172);
           
        }
      
        &:hover fieldset {
          border-color: rgb(166, 167, 172);
          
        }
      
      
        &.Mui-disabled fieldset {
            border-color: rgb(166, 167, 172);
          
        }
      }
      `;


const Producers = () => {


          const [open, setOpen] = useState(false);
          const handleOpen = () => setOpen(true);
          const handleClose = () => setOpen(false);

          const [openEdit, setOpenEdit] = useState(false);
          const handleOpenEdit = () => setOpenEdit(true);
          const handleCloseEdit = () => setOpenEdit(false);

        const [role, setRole] = useState(10);

        const handleChangeRole = (event) => {
        setRole(event.target.value);
        };


  const allData = [
    {
        no:"1",
      name:"Robin Pattison",
      email: "robin@gmail.com",
      phone: "205-453-3736",
      state: "Alamaba",
      city: "Abbeville",
      zip:"70511",
      status:"Active",
      action: (
        <div className={Styles.ProducersPageActionContainer}>
          <EditOutlinedIcon className={Styles.ProducersPageTableActionEditIcon} onClick={()=> handleOpenEdit()}/>
          <Link to="/producers_details" className="Link"><RemoveRedEyeOutlinedIcon
            className={Styles.ProducersPageTableActionViewIcon}
          /></Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.ProducersPageTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"2",
      name: "Robin Pattison",
      email: "robin@gmail.com",
      phone: "205-453-3736",
      state: "Alamaba",
      city: "Abbeville",
      zip:"70511",
      status:"Active",
      action: (
        <div className={Styles.ProducersPageActionContainer}>
          <EditOutlinedIcon className={Styles.ProducersPageTableActionEditIcon} onClick={()=> handleOpenEdit()}/>
          <Link to="/producers_details" className="Link"><RemoveRedEyeOutlinedIcon
            className={Styles.ProducersPageTableActionViewIcon}
          /></Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.ProducersPageTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"3",
      name:"Robin Pattison",
      email: "robin@gmail.com",
      phone: "205-453-3736",
      state: "Alamaba",
      city: "Abbeville",
      zip:"70511",
      status:"Active",
      action: (
        <div className={Styles.ProducersPageActionContainer}>
          <EditOutlinedIcon className={Styles.ProducersPageTableActionEditIcon} onClick={()=> handleOpenEdit()}/>
          <Link to="/producers_details" className="Link"><RemoveRedEyeOutlinedIcon
            className={Styles.ProducersPageTableActionViewIcon}
          /></Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.ProducersPageTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"4",
      name: "Robin Pattison",
      email: "robin@gmail.com",
      phone: "205-453-3736",
      state: "Alamaba",
      city: "Abbeville",
      zip:"70511",
      status:"Active",
      action: (
        <div className={Styles.ProducersPageActionContainer}>
          <EditOutlinedIcon className={Styles.ProducersPageTableActionEditIcon} onClick={()=> handleOpenEdit()}/>
          <Link to="/producers_details" className="Link"><RemoveRedEyeOutlinedIcon
            className={Styles.ProducersPageTableActionViewIcon}
          /></Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.ProducersPageTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"5",
      name:"Robin Pattison",
      email: "robin@gmail.com",
      phone: "205-453-3736",
      state: "Alamaba",
      city: "Abbeville",
      zip:"70511",
      status:"Active",
      action: (
        <div className={Styles.ProducersPageActionContainer}>
          <EditOutlinedIcon className={Styles.ProducersPageTableActionEditIcon} onClick={()=> handleOpenEdit()}/>
          <Link to="/producers_details" className="Link"><RemoveRedEyeOutlinedIcon
            className={Styles.ProducersPageTableActionViewIcon}
          /></Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.ProducersPageTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"6",
      name:"Robin Pattison",
      email: "robin@gmail.com",
      phone: "205-453-3736",
      state: "Alamaba",
      city: "Abbeville",
      zip:"70511",
      status:"Active",
      action: (
        <div className={Styles.ProducersPageActionContainer}>
          <EditOutlinedIcon className={Styles.ProducersPageTableActionEditIcon} onClick={()=> handleOpenEdit()}/>
          <Link to="/producers_details" className="Link"><RemoveRedEyeOutlinedIcon
            className={Styles.ProducersPageTableActionViewIcon}
          /></Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.ProducersPageTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"7",
      name:"Robin Pattison",
      email: "robin@gmail.com",
      phone: "205-453-3736",
      state: "Alamaba",
      city: "Abbeville",
      zip:"70511",
      status:"Active",
      action: (
        <div className={Styles.ProducersPageActionContainer}>
          <EditOutlinedIcon className={Styles.ProducersPageTableActionEditIcon} onClick={()=> handleOpenEdit()}/>
          <Link to="/producers_details" className="Link"><RemoveRedEyeOutlinedIcon
            className={Styles.ProducersPageTableActionViewIcon}
          /></Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.ProducersPageTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
        no:"8",
      name:" Robin Pattison",
      email: "robin@gmail.com",
      phone: "205-453-3736",
      state: "Alamaba",
      city: "Abbeville",
      zip:"70511",
      status:"Active",
      action: (
        <div className={Styles.ProducersPageActionContainer}>
          <EditOutlinedIcon className={Styles.ProducersPageTableActionEditIcon} onClick={()=> handleOpenEdit()}/>
          <Link to="/producers_details" className="Link"><RemoveRedEyeOutlinedIcon
            className={Styles.ProducersPageTableActionViewIcon}
          /></Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.ProducersPageTableActionDeleteIcon}
          />
        </div>
      ),
    },

    
  ];

  const tableHead = {
    no: "No.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    state: "State",
    city:"City",
    zip:"Zip Code",
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
    <div className={Styles.ProducersMainContainer}>
      <SuperAdminHeaderPage />
      <div className={Styles.ProducersPage}>
        <div className={Styles.ProducersPageNav}>
          <p className={Styles.ProducersPageNavText}>
            <img src={ProducersImageAdminView} alt="ProducersImageAdminView" />
            Producers
          </p>
          <div className={Styles.ProducersPageNavButtonContainer}>
            <button className={Styles.ProducersPageNavExportButton}>
              Export
            </button>
            <button className={Styles.ProducersPageNavAddProducersButton} onClick={()=>handleOpen()}>
              Add Producer
            </button>
          </div>
        </div>

        <div className={Styles.ProducersPageTabsContainerTable}>
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
          <div className={Styles.ProducersPageTablePagination}>
            <Pagination
              pageSize={countPerPage}
              onChange={updatePage}
              current={currentPage}
              total={allData.length}
            />
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={Styles.ProducersPageModelPopupContainer}>
            <div className={Styles.ProducersPageModelPopupHeader}>
              <p className={Styles.ProducersPageModelPopupHeaderText}>
                Add Producers
              </p>
              <CloseOutlinedIcon
                onClick={() => handleClose()}
                className={Styles.ProducersPageModelPopupHeaderTextIcon}
              />
            </div>
            <div className={Styles.ProducersPageTitleContainer}>
              <p className={Styles.ProducersPageTitle}>Login Info</p>
            </div>
            <div className={Styles.ProducersPageInputContainer}>
              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Username
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Password
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="lastname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, lastname: e.target.value })}
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>

              <div className={Styles.ProducersPageTitleContainer}>
                <p className={Styles.ProducersPageTitle}>Producer Info</p>
              </div>
              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Fist Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Last Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Email
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Phone
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="lastname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, lastname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Legal Entity
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Street
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>

              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>City</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>State</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Zip Code
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>Status</p>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Acitve</MenuItem>
                    <MenuItem value={30}>Inactive</MenuItem>
                  </SelectStyled>
                </div>
             
              </div>
             
            </div>
            <div className={Styles.ProducersPageButtonContainer}>
              <button
                className={Styles.ProducersPageCancelButton}
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              <button
                className={Styles.ProducersPageSubmitButton}
                onClick={() => handleClose()}
              >
                Save
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={Styles.ProducersPageModelPopupContainer}>
            <div className={Styles.ProducersPageModelPopupHeader}>
              <p className={Styles.ProducersPageModelPopupHeaderText}>
                Edit Producers
              </p>
              <CloseOutlinedIcon
                onClick={() => handleCloseEdit()}
                className={Styles.ProducersPageModelPopupHeaderTextIcon}
              />
            </div>
            <div className={Styles.ProducersPageTitleContainer}>
              <p className={Styles.ProducersPageTitle}>Login Info</p>
            </div>
            <div className={Styles.ProducersPageInputContainer}>
              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Username
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Password
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="lastname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, lastname: e.target.value })}
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>

              <div className={Styles.ProducersPageTitleContainer}>
                <p className={Styles.ProducersPageTitle}>Producer Info</p>
              </div>
              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Fist Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Last Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Email
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Phone
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="lastname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, lastname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Legal Entity
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Street
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>

              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>City</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>State</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.ProducersPageInputContent}>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>
                    Zip Code
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                  />
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.ProducersPageInputCart}>
                  <p className={Styles.ProducersPageInputCartText}>Status</p>
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Acitve</MenuItem>
                    <MenuItem value={30}>Inactive</MenuItem>
                  </SelectStyled>
                </div>
             
              </div>
             
            </div>
            <div className={Styles.ProducersPageButtonContainer}>
              <button
                className={Styles.ProducersPageCancelButton}
                onClick={() => handleCloseEdit()}
              >
                Cancel
              </button>
              <button
                className={Styles.ProducersPageSubmitButton}
                onClick={() => handleCloseEdit()}
              >
                Save
              </button>
            </div>
          </div>
        </Box>
      </Modal>

    </div>
  );
};
export default Producers;
