import React, { useEffect, useState } from "react";
import Styles from "./Index.module.css";
import SuperAdminHeaderPage from "../superAdminHeader/Index";
import SubscriptionIcon from "../../../../assets/images/SubscriptionIcon.png";
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

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 800,
//   height: "60vh",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: "10px",
//   overflowY: "scroll",
// };

export const InputStyled = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-color: rgb(166, 167, 172);
    color: rgb(13, 13, 14);
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

const Subscriptions = () => {
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
      no: "1",
      name: "Robin Pattison",
      subscriptionPlan: "Premium",
      from: "10/21/2024",
      to: "04/21/2025",
      amountPaid:"$2500.00",
      paymentMethod: "Credit Card",
      status: "Active",
      action: (
        <div className={Styles.SubscriptionsActionContainer}>
          <EditOutlinedIcon
            className={Styles.SubscriptionsTableActionEditIcon}
            onClick={() => handleOpenEdit()}
          />
          <Link to="/subscription_details" className="Link">
            <RemoveRedEyeOutlinedIcon
              className={Styles.SubscriptionsTableActionViewIcon}
            />
          </Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.SubscriptionsTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
      no: "2",
      name: "Robin Pattison",
      subscriptionPlan: "Trial",
      from: "03/01/2025",
      to: "03/14/2025",
      amountPaid:"$0",
      paymentMethod: "NIL",
      status: "Active",
      action: (
        <div className={Styles.SubscriptionsActionContainer}>
          <EditOutlinedIcon
            className={Styles.SubscriptionsTableActionEditIcon}
            onClick={() => handleOpenEdit()}
          />
          <Link to="/subscription_details" className="Link">
            <RemoveRedEyeOutlinedIcon
              className={Styles.SubscriptionsTableActionViewIcon}
            />
          </Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.SubscriptionsTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
      no: "3",
      name: "Robin Pattison",
      subscriptionPlan: "Premium",
      from: "10/21/2024",
      to: "04/21/2025",
      amountPaid:"$2500.00",
      paymentMethod: "Credit Card",
      status: "Active",
      action: (
        <div className={Styles.SubscriptionsActionContainer}>
          <EditOutlinedIcon
            className={Styles.SubscriptionsTableActionEditIcon}
            onClick={() => handleOpenEdit()}
          />
          <Link to="/subscription_details" className="Link">
            <RemoveRedEyeOutlinedIcon
              className={Styles.SubscriptionsTableActionViewIcon}
            />
          </Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.SubscriptionsTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
      no: "4",
      name: "Robin Pattison",
      subscriptionPlan: "Premium",
      from: "10/21/2024",
      to: "04/21/2025",
      amountPaid:"$2500.00",
      paymentMethod: "Credit Card",
      status: "Active",
      action: (
        <div className={Styles.SubscriptionsActionContainer}>
          <EditOutlinedIcon
            className={Styles.SubscriptionsTableActionEditIcon}
            onClick={() => handleOpenEdit()}
          />
          <Link to="/subscription_details" className="Link">
            <RemoveRedEyeOutlinedIcon
              className={Styles.SubscriptionsTableActionViewIcon}
            />
          </Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.SubscriptionsTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
      no: "5",
      name: "Robin Pattison",
      subscriptionPlan: "Premium",
      from: "10/21/2024",
      to: "04/21/2025",
      amountPaid:"$2500.00",
      paymentMethod: "Credit Card",
      status: "Active",
      action: (
        <div className={Styles.SubscriptionsActionContainer}>
          <EditOutlinedIcon
            className={Styles.SubscriptionsTableActionEditIcon}
            onClick={() => handleOpenEdit()}
          />
          <Link to="/subscription_details" className="Link">
            <RemoveRedEyeOutlinedIcon
              className={Styles.SubscriptionsTableActionViewIcon}
            />
          </Link>
          <DeleteOutlineOutlinedIcon
            className={Styles.SubscriptionsTableActionDeleteIcon}
          />
        </div>
      ),
    },
  ];

  const tableHead = {
    no: "No.",
    name: "Name",
    subscriptionPlan: "Subscription Plan",
    from: "From",
    to: "To",
    amountPaid:"Amount Paid",
    paymentMethod: "Payment Method",
    status: "Status",
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
    <div className={Styles.SubscriptionsMainContainer}>
      <SuperAdminHeaderPage />
      <div className={Styles.Subscriptions}>
        <div className={Styles.SubscriptionsNav}>
          <p className={Styles.SubscriptionsNavText}>
            <img src={SubscriptionIcon} alt="SubscriptionIcon" className={Styles.SubscriptionIconImage}/>
            Subscriptions
          </p>
          <div className={Styles.SubscriptionsNavButtonContainer}>
            <button className={Styles.SubscriptionsNavExportButton}>
              Export
            </button>
            <button
              className={Styles.SubscriptionsNavAddSubscriptionsButton}
              onClick={() => handleOpen()}
            >
              Add Subscriptions
            </button>
          </div>
        </div>

        <div className={Styles.SubscriptionsTabsContainerTable}>
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
          <div className={Styles.SubscriptionsTablePagination}>
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
        <Box className="modal">
          <div className={Styles.SubscriptionsModelPopupContainer}>
            <div className={Styles.SubscriptionsModelPopupHeader}>
              <p className={Styles.SubscriptionsModelPopupHeaderText}>
                Add Subscription
              </p>
              <CloseOutlinedIcon
                onClick={() => handleClose()}
                className={Styles.SubscriptionsModelPopupHeaderTextIcon}
              />
            </div>
            <div className={Styles.SubscriptionsTitleContainer}>
              <p className={Styles.SubscriptionsTitle}>Subscription Info</p>
            </div>
            <div className={Styles.SubscriptionsInputContainer}>
              <div className={Styles.SubscriptionsInputContent}>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>Producer</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Stew</MenuItem>
                    <MenuItem value={30}>Robbin</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>Subscription Plan</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Trial</MenuItem>
                    <MenuItem value={30}>Primium</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.SubscriptionsInputContent}>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>From</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }} // Increased max length for multiline
                    name="firstname"
                   
                    // onChange={(e) =>
                    //   setCreateInvestor({
                    //     ...createInvestor,
                    //     firstname: e.target.value,
                    //   })
                    // }
                  />
                </div>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>To</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
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
              <div className={Styles.SubscriptionsInputContent}>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>Payment Method</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Online</MenuItem>
                    <MenuItem value={30}>Direct Payment</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>Status</p>

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
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.SubscriptionsInputContent}>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>
                    Amount Paid
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
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>Date of Amount Paid</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
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
            </div>
            <div className={Styles.SubscriptionsButtonContainer}>
              <button
                className={Styles.SubscriptionsCancelButton}
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              <button
                className={Styles.SubscriptionsSubmitButton}
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
         <Box className="modal">
          <div className={Styles.SubscriptionsModelPopupContainer}>
            <div className={Styles.SubscriptionsModelPopupHeader}>
              <p className={Styles.SubscriptionsModelPopupHeaderText}>
                Edit Subscription
              </p>
              <CloseOutlinedIcon
                onClick={() => handleClose()}
                className={Styles.SubscriptionsModelPopupHeaderTextIcon}
              />
            </div>
            <div className={Styles.SubscriptionsTitleContainer}>
              <p className={Styles.SubscriptionsTitle}>Subscription Info</p>
            </div>
            <div className={Styles.SubscriptionsInputContainer}>
              <div className={Styles.SubscriptionsInputContent}>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>Producer</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Stew</MenuItem>
                    <MenuItem value={30}>Robbin</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>Subscription Plan</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Trial</MenuItem>
                    <MenuItem value={30}>Primium</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
                </div>
              </div>
              <div className={Styles.SubscriptionsInputContent}>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>From</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
                    className={Styles.LoginPageInputContainerInput}
                    inputProps={{ maxLength: 20 }} // Increased max length for multiline
                    name="firstname"
                   
                    // onChange={(e) =>
                    //   setCreateInvestor({
                    //     ...createInvestor,
                    //     firstname: e.target.value,
                    //   })
                    // }
                  />
                </div>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>To</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
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
              <div className={Styles.SubscriptionsInputContent}>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>Payment Method</p>

                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Online</MenuItem>
                    <MenuItem value={30}>Direct Payment</MenuItem>
                  </SelectStyled>
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>Status</p>

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
                  {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                </div>
              </div>
              <div className={Styles.SubscriptionsInputContent}>
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>
                    Amount Paid
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
                <div className={Styles.SubscriptionsInputCart}>
                  <p className={Styles.SubscriptionsInputCartText}>Date of Amount Paid</p>

                  <InputStyled
                    id="outlined-basic"
                    type="date"
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
            </div>
            <div className={Styles.SubscriptionsButtonContainer}>
              <button
                className={Styles.SubscriptionsCancelButton}
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              <button
                className={Styles.SubscriptionsSubmitButton}
                onClick={() => handleClose()}
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
export default Subscriptions;
