import React, { useEffect, useState, useRef } from "react";
import HeaderPage from "../header/Header";
import Styles from "./Index.module.css";
import InvestorsImage from "../../../assets/images/InvestorsImage.png";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import {
  addInvestors,
  editInvestors,
  getAllInvestors,
} from "../../../redux/viewInvestors/Action.js";
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
const InvestorPage = () => {
  const theme = useTheme();
  let dispatch = useDispatch();
  const countPerPage = 5;

  const investorsList = useSelector(
    (state) => state.investors.getAllInvestorSuccessfull
  );

  const EditinvestorsList = useSelector(
    (state) => state.investors.getEditInvestorsDetails
  );

  const [allData, setAllData] = useState([]);
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

  const [createInvestor, setCreateInvestor] = useState({
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
    investor_probability: "",
    investor_projects: "",
    projectname: "",
    status: "",
    final_amount: "",
    invesment_method: "",
  });

  console.log(createInvestor, "createInvestor");
  useEffect(() => {
    dispatch(getAllInvestors());
  }, []);

  const addNewInvestor = () => {
    dispatch(addInvestors(createInvestor));
    handleClose();
  };

  const tableHead = {
    S_no: "S.no",
    investor_Name: "Investor Name",
    email: "Email",
    state: "State",
    status: "Status",
    final_Amount: "Final Amount",
    invesment_Method: "Investment Method",
    action: "Actions",
  };

  useEffect(() => {
    if (investorsList?.data) {
      const mappedData = investorsList.data.map((item, index) => ({
        S_no: index + 1,
        investor_Name: <Link to="/investors_details" className="Link">{item.firstname} {item.lastname}</Link>,
        email: item.emailid,
        state: item.state,
        status: item.status,
        final_Amount: item.final_amount,
        invesment_Method: item.invesment_method,
        action: (
          <div className={Styles.ViewTableActionContainer}>
            <EditOutlinedIcon
              className={Styles.ViewTableActionEditIcon}
              onClick={() => handleEdit(item.investorid)}
            />
            <RemoveRedEyeOutlinedIcon
              className={Styles.ViewTableActionViewIcon}
              onClick={() => handleView(item.investorid)}
            />
            <DeleteOutlineOutlinedIcon
              className={Styles.ViewTableActionDeleteIcon}
            />
          </div>
        ),
      }));

      setAllData(mappedData);
    }
  }, [investorsList]);

  useEffect(() => {
    updatePage(1);
  }, [allData]);

  const handleEdit = (id) => {
    dispatch(editInvestors(id));
    editHandleOpen();
  };

  const handleView = (id) => {
    dispatch(editInvestors(id));
    viewHandleOpen();
  };
  const searchData = useRef(
    throttle((val) => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const filteredData = cloneDeep(
        allData
          .filter((item) => item.investor_Name.toLowerCase().includes(query))
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
    <div className={Styles.InvestorPageMainContainer}>
      <HeaderPage />
      <div className={Styles.InvestorPageMainContent}>
        <div className={Styles.InvestorPageMainNavContainer}>
          <div className={Styles.InvestorPagenavCart}>
            <img
              src={InvestorsImage}
              alt=""
              className={Styles.InvestorPagenavCartImg}
            />
            <p className={Styles.InvestorPagenavCartText}>Investor</p>
          </div>
          <div className={Styles.CreateInvestorButtonContent}>
            <button className={Styles.CreateInvestorButtonContentExportButton}>
              Export
            </button>
            <button
              className={Styles.ViewInvestorPageNavContainerButton}
              onClick={handleOpen}
            >
              Add Investor
            </button>
          </div>
        </div>
        {/* <div className={Styles.InvestorPageTabsContainer}>
          <Box sx={{ bgcolor: "background.paper" }}>
            <AppBar position="static" sx={{ bgcolor: "#fff", borderRadius: "10px" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "#3719a3", height: "2px", borderRadius: "2px" } }} 
              >
                <Tab label={<div className={Styles.TabHeader}><img src={addIcon} alt="" className={Styles.TabAddIcon}/><p className={Styles.TabAddIconTExt}>Create New Investor</p></div>} {...a11yProps(0)} />
                <Tab label={<div className={Styles.TabHeader}><img src={addIcon} alt="" className={Styles.TabAddIcon}/><p className={Styles.TabAddIconTExt}>View All Investor</p></div>} {...a11yProps(1)} />
               
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <CreateInvestor/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <ViewInvestor/>
            </TabPanel>
          </Box>
        </div> */}
        <div className={Styles.InvestorPageTabsContainerTable}>
          <div className="search">
            <input
              placeholder="Search Investor"
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
          <div className={Styles.InvestorPageTablePagination}>
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
          <div className={Styles.CreateInvestorMainContainer}>
            <div className={Styles.CreateInvestorTitleContainer}>
              <p className={Styles.CreateInvestorTitle}>Invester Details</p>
            </div>
            <div className={Styles.CreateInvestorInputContainer}>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    First Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="firstname"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        firstname: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Last Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="lastname"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        lastname: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>Email</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="emailid"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        emailid: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>Phone</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="mobilenumber"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        mobilenumber: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Street Address
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="addtess"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        addtess: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>City</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="city"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        city: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>State</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="state"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        state: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>Zip Code</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="zipcode"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        zipcode: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Accredited?
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="accredited"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        accredited: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Refferral Source
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    // onChange={(e) => setCreateInvestor({ ...createInvestor,: e.target.value })}
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Date Added
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="date_added"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        date_added: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Investor Probability
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="investor_probability"
                    onChange={(e) =>
                      setCreateInvestor({
                        ...createInvestor,
                        investor_probability: e.target.value,
                      })
                    }
                  />
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.CreateInvestorInputCartSingleInput}>
                <p className={Styles.CreateInvestorInputCartText}>
                  General Comments
                </p>
                <InputStyled
                  id="outlined-basic"
                  className={Styles.LoginPageInputContainerInput}
                  inputProps={{ maxLength: 200 }}
                  name="username"
                  onChange={(e) =>
                    setCreateInvestor({
                      ...createInvestor,
                      general_comments: e.target.value,
                    })
                  }
                />
                {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
              </div>
            </div>
            <div className={Styles.CreateInvestorButtonContainer}>
              <button
                className={Styles.CreateInvestorCancelButton}
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              <button
                className={Styles.CreateInvestorSubmitButton}
                onClick={() => addNewInvestor()}
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
          <div className={Styles.CreateInvestorMainContainer}>
            <div className={Styles.CreateInvestorTitleContainer}>
              <p className={Styles.CreateInvestorTitle}>
                Edit Invester Details
              </p>
            </div>
            <div className={Styles.CreateInvestorInputContainer}>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    First Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    defaultValue={EditinvestorsList?.firstname}
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Last Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    defaultValue={EditinvestorsList?.lastname}
                    name="username"
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>Email</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    defaultValue={EditinvestorsList?.emailid}
                    name="username"
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>Phone</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    defaultValue={EditinvestorsList?.mobilenumber}
                    name="username"
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Street Address
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    defaultValue={EditinvestorsList?.addtess}
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>City</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    defaultValue={EditinvestorsList?.city}
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>State</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    defaultValue={EditinvestorsList?.state}
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>Zip Code</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    defaultValue={EditinvestorsList?.zipcode}
                    name="username"
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Accredited?
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    defaultValue={EditinvestorsList?.accredited}
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
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
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Date Added
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    defaultValue={EditinvestorsList?.date_added}
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Investor Probability
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    name="username"
                    defaultValue={EditinvestorsList?.investor_probability}
                    //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                  />
                </div>
              </div>
              <div className={Styles.CreateInvestorInputCartSingleInput}>
                <p className={Styles.CreateInvestorInputCartText}>
                  General Comments
                </p>
                <InputStyled
                  id="outlined-basic"
                  className={Styles.LoginPageInputContainerInput}
                  inputProps={{ maxLength: 200 }}
                  name="username"
                  defaultValue={EditinvestorsList?.general_comments}
                  //   onChange={(e) => setLogin({ ...login, username: e.target.value })}
                />
              </div>
            </div>
            <div className={Styles.CreateInvestorButtonContainer}>
              <button
                className={Styles.CreateInvestorCancelButton}
                onClick={() => editHandleClose()}
              >
                Cancel
              </button>
              <button
                className={Styles.CreateInvestorSubmitButton}
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
          <div className={Styles.CreateInvestorMainContainer}>
            <div className={Styles.CreateInvestorTitleContainer}>
              <p className={Styles.CreateInvestorTitle}>
                View Invester Details
              </p>
            </div>
            <div className={Styles.CreateInvestorInputContainer}>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    First Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    value={EditinvestorsList?.firstname}
                    disabled
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Last Name
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    value={EditinvestorsList?.lastname}
                    disabled
                  />
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>Email</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    value={EditinvestorsList?.emailid}
                    disabled
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>Phone</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    value={EditinvestorsList?.mobilenumber}
                    disabled
                  />
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Street Address
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                    value={EditinvestorsList?.addtess}
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>City</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                    value={EditinvestorsList?.city}
                  />
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>State</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                    value={EditinvestorsList?.state}
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>Zip Code</p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    value={EditinvestorsList?.zipcode}
                    disabled
                  />
                </div>
              </div>
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Accredited?
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                    value={EditinvestorsList?.accredited}
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
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
              <div className={Styles.CreateInvestorInputContent}>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Date Added
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                    value={EditinvestorsList?.date_added}
                  />
                </div>
                <div className={Styles.CreateInvestorInputCart}>
                  <p className={Styles.CreateInvestorInputCartText}>
                    Investor Probability
                  </p>

                  <InputStyled
                    id="outlined-basic"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }}
                    disabled
                    value={EditinvestorsList?.investor_probability}
                  />
                </div>
              </div>
              <div className={Styles.CreateInvestorInputCartSingleInput}>
                <p className={Styles.CreateInvestorInputCartText}>
                  General Comments
                </p>
                <InputStyled
                  id="outlined-basic"
                  className={Styles.LoginPageInputContainerInput}
                  inputProps={{ maxLength: 200 }}
                  disabled
                  value={EditinvestorsList?.general_comments}
                />
              </div>
            </div>
            <div className={Styles.CreateInvestorButtonContainer}>
              <button
                className={Styles.CreateInvestorCancelButton}
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
export default InvestorPage;
