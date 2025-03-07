import React, { useEffect, useState, useRef } from "react";
import HeaderPage from "../header/Header";
import Styles from "./Index.module.css";
import CoProducerssImage from "../../../assets/images/CoProducersImege.png";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

import styled from "styled-components";
import TextField from "@mui/material/TextField";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

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
const CoProducers = () => {
  const theme = useTheme();
  let dispatch = useDispatch();
  const countPerPage = 5;


  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState([]);
  const [value, setValue] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [editModel, setEditModel] = useState(false);
  const editHandleOpen = () => setEditModel(true);
  const editHandleClose = () => setEditModel(false);

  const [viewModel, setViewModel] = useState(false);
  const viewHandleOpen = () => setViewModel(true);
  const viewHandleClose = () => setViewModel(false);

  const [createCoProducers, setCreateCoProducers] = useState({
    firstname: "",
    lastname: "",
    emailid: "",
    addtess: "",
    mobilenumber: "",
    city: "",
    state: "",
    zipcode: "",
    county: "",
    accredited: "",
    date_added: "",
    general_comments: "",
    CoProducers_probability: "",
    CoProducers_projects: "",
    projectname: "",
    status: "",
    final_amount: "",
    invesment_method: "",
  });

  console.log(createCoProducers, "createCoProducers");

  const addNewCoProducers = () => {
    handleClose();
  };

  const tableHead = {
    S_no: "S.no",
    CoProducers_Name: "CoProducers Name",
    email: "Email",
    state: "State",
    status: "Status",
    final_Amount: "Final Amount",
    action: "Actions",
  };

  const allData = [
    {
      S_no: "33",
      CoProducers_Name: <Link to="/co_producers_details" className="Link">Robin pattison</Link>,
      email: "email ",
      state: "state",
      status:"02/19/2025",
      final_Amount:"$45,000",
    action: (
      <div className={Styles.CoProducersDetailsTableActionContainer}>
        <EditOutlinedIcon className={Styles.CoProducersDetailsTableActionEditIcon} />
        <RemoveRedEyeOutlinedIcon
          className={Styles.CoProducersDetailsTableActionViewIcon}
        />
        <DeleteOutlineOutlinedIcon
          className={Styles.CoProducersDetailsTableActionDeleteIcon}
        />
      </div>
    ),
  
  },
  {
    S_no: "33",
    CoProducers_Name: <Link to="/co_producers_details" className="Link">Robin pattison</Link>,
    email: "email ",
    state: "state",
    status:"02/19/2025",
    final_Amount:"$45,000",
  action: (
    <div className={Styles.CoProducersDetailsTableActionContainer}>
      <EditOutlinedIcon className={Styles.CoProducersDetailsTableActionEditIcon} />
      <RemoveRedEyeOutlinedIcon
        className={Styles.CoProducersDetailsTableActionViewIcon}
      />
      <DeleteOutlineOutlinedIcon
        className={Styles.CoProducersDetailsTableActionDeleteIcon}
      />
    </div>
  ),

},
{
  S_no: "33",
  CoProducers_Name: <Link to="/co_producers_details" className="Link">Robin pattison</Link>,
  email: "email ",
  state: "state",
  status:"02/19/2025",
  final_Amount:"$45,000",
action: (
  <div className={Styles.CoProducersDetailsTableActionContainer}>
    <EditOutlinedIcon className={Styles.CoProducersDetailsTableActionEditIcon} />
    <RemoveRedEyeOutlinedIcon
      className={Styles.CoProducersDetailsTableActionViewIcon}
    />
    <DeleteOutlineOutlinedIcon
      className={Styles.CoProducersDetailsTableActionDeleteIcon}
    />
  </div>
),

},
     
     
    ];

  useEffect(() => {
    updatePage(1);
  }, [allData]);

  const handleEdit = (id) => {
  
    editHandleOpen();
  };

  const handleView = (id) => {
    viewHandleOpen();
  };
  const searchData = useRef(
    throttle((val) => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const filteredData = cloneDeep(
        allData
          .filter((item) => item.CoProducers_Name.toLowerCase().includes(query))
          .slice(0, countPerPage)
      );
      setCollection(filteredData);
    }, 400)
  );

  useEffect(() => {
    if (!searchValue) {
      updatePage(1);
    } else {
      searchData.current(searchValue);
    }
  }, [searchValue]);

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData.slice(from, to)));
  };

  const tableRows = (rowData) => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => <td key={i}>{key[keyD]}</td>);

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () =>
    collection.map((key, index) => tableRows({ key, index }));

  const headRow = () =>
    Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));

  return (
    <div className={Styles.CoProducersPageMainContainer}>
      <HeaderPage />
      <div className={Styles.CoProducersPageMainContent}>
        <div className={Styles.CoProducersPageMainNavContainer}>
          <div className={Styles.CoProducersPagenavCart}>
            <img
              src={CoProducerssImage}
              alt=""
              className={Styles.CoProducersPagenavCartImg}
            />
            <p className={Styles.CoProducersPagenavCartText}>CoProducers</p>
          </div>
          <div className={Styles.CreateCoProducersButtonContent}>
            <button className={Styles.CreateCoProducersButtonContentExportButton}>
              Export
            </button>
            <button
              className={Styles.ViewCoProducersPageNavContainerButton}
              onClick={handleOpen}
            >
              Add CoProducers
            </button>
          </div>
        </div>
        <div className={Styles.CoProducersPageTabsContainerTable}>
          <div className="search">
            <input
              placeholder="Search CoProducers"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <table>
            <thead>
              <tr>{headRow()}</tr>
            </thead>
            <tbody className="trhover">{tableData()}</tbody>
          </table>
          <div className={Styles.CoProducersPageTablePagination}>
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
          <div className={Styles.CreateCoProducersMainContainer}>
            <div className={Styles.CreateCoProducersTitleContainer}>
              <p className={Styles.CreateCoProducersTitle}>Invester Details</p>
            </div>
            <div className={Styles.CreateCoProducersInputContainer}>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    First Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        firstname: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Last Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="lastname"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        lastname: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>Email</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="emailid"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        emailid: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>Phone</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="mobilenumber"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        mobilenumber: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Street Address
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="addtess"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        addtess: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>City</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="city"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        city: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>State</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="state"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        state: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>Zip Code</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="zipcode"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        zipcode: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Accredited?
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="accredited"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        accredited: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Refferral Source
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    // onChange={(e) => setCreateCoProducers({ ...createCoProducers,: e.target.value })}
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Date Added
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="date_added"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        date_added: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    CoProducers Probability
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="CoProducers_probability"
                    onChange={(e) =>
                      setCreateCoProducers({
                        ...createCoProducers,
                        CoProducers_probability: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputCartSingleInput}>
                <p className={Styles.CreateCoProducersInputCartText}>
                  General Comments
                </p>
                <InputStyled
                  id="outlined-basic"
                  className={Styles.LoginPageInputContainerInput}
                  inputProps={{ maxLength: 200 }}
                  name="username"
                  onChange={(e) =>
                    setCreateCoProducers({
                      ...createCoProducers,
                      general_comments: e.target.value,
                    })
                  }
                />
                {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
              </div>
            </div>
            <div className={Styles.CreateCoProducersButtonContainer}>
              <button
                className={Styles.CreateCoProducersCancelButton}
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              <button
                className={Styles.CreateCoProducersSubmitButton}
                onClick={() => addNewCoProducers()}
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={editModel}
        onClose={editHandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={Styles.CreateCoProducersMainContainer}>
            <div className={Styles.CreateCoProducersTitleContainer}>
              <p className={Styles.CreateCoProducersTitle}>
                Edit Invester Details
              </p>
            </div>
            <div className={Styles.CreateCoProducersInputContainer}>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    First Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                   
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Last Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                 
                    name="username"
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>Email</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
             
                    name="username"
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>Phone</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                
                    name="username"
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Street Address
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>City</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
               
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>State</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
              
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>Zip Code</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
               
                    name="username"
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Accredited?
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
              
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Refferral Source
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    defaultValue=""
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Date Added
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                 
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    CoProducers Probability
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                   
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputCartSingleInput}>
                <p className={Styles.CreateCoProducersInputCartText}>
                  General Comments
                </p>
                <InputStyled
                  id="outlined-basic"
                  className={Styles.LoginPageInputContainerInput}
                  inputProps={{ maxLength: 200 }}
                  name="username"
              
                />
              </div>
            </div>
            <div className={Styles.CreateCoProducersButtonContainer}>
              <button
                className={Styles.CreateCoProducersCancelButton}
                onClick={() => editHandleClose()}
              >
                Cancel
              </button>
              <button
                className={Styles.CreateCoProducersSubmitButton}
                onClick={() => editHandleClose()}
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={viewModel}
        onClose={viewHandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={Styles.CreateCoProducersMainContainer}>
            <div className={Styles.CreateCoProducersTitleContainer}>
              <p className={Styles.CreateCoProducersTitle}>
                View Invester Details
              </p>
            </div>
            <div className={Styles.CreateCoProducersInputContainer}>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    First Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                   
                    disabled
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Last Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                 
                    disabled
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>Email</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                 
                    disabled
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>Phone</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                   
                    disabled
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Street Address
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                  
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>City</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                    
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>State</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                   
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>Zip Code</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                  
                    disabled
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Accredited?
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                  
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Refferral Source
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                    value=""
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputContent}>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    Date Added
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                   
                  />
                </div>
                <div className={Styles.CreateCoProducersInputCart}>
                  <p className={Styles.CreateCoProducersInputCartText}>
                    CoProducers Probability
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                  
                  />
                </div>
              </div>
              <div className={Styles.CreateCoProducersInputCartSingleInput}>
                <p className={Styles.CreateCoProducersInputCartText}>
                  General Comments
                </p>
                <InputStyled
                  id="outlined-basic"
                  className={Styles.LoginPageInputContainerInput}
                  inputProps={{ maxLength: 200 }}
                  disabled
                
                />
              </div>
            </div>
            <div className={Styles.CreateCoProducersButtonContainer}>
              <button
                className={Styles.CreateCoProducersCancelButton}
                onClick={() => viewHandleClose()}
              >
                Close
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default CoProducers;
