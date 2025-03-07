import React from "react";
import Styles from "./Index.module.css";
import HeaderPage from "../header/Header";
import ProjectsImage from "../../../assets/images/ProjectsImage.png";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CgOverflow } from "react-icons/cg";
import { Height } from "@mui/icons-material";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { useEffect } from "react";
import { useRef } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

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

const ProjectsPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // tabledata
  const allData = [
    {
      name:  <Link to="/project_details" className="Link">ABC Project </Link>,
      parentId: "12",
      campaignType: "Push",
      status: "Failed",
      channel: "android",
      action: (
        <div className={Styles.projectTableActionContainer}>
          <EditOutlinedIcon className={Styles.ProjectTableActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.ProjectsTableActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.ProjectsTableActionDeleteIcon}
          />
        </div>
      ),
    },
    {
      name: <Link to="/project_details" className="Link">ABCD Project </Link>,
      parentId: "123",
      campaignType: "Inapp",
      status: "Failed",
      channel: "iOS",
      action: (
        <div className={Styles.projectTableActionContainer}>
          <EditOutlinedIcon className={Styles.ProjectTableActionEditIcon} />
          <RemoveRedEyeOutlinedIcon
            className={Styles.ProjectsTableActionViewIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.ProjectsTableActionDeleteIcon}
          />
        </div>
      ),
    },
  ];

  const tableHead = {
    name:"Campaign Name",
    parentId: "Campaign Id",
    campaignType: "Type",
    status: "Status",
    channel: "Channel",
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
    <div className={Styles.ProjectsPageMainContainer}>
      <HeaderPage />
      <div className={Styles.ProjectsPageContent}>
        <div className={Styles.ProjectsPageNavContainer}>
          <div className={Styles.ProjectsPageNavContainerLeftSide}>
            <img
              src={ProjectsImage}
              alt=""
              className={Styles.ProjectsPagenavCartImg}
            />
            <p className={Styles.ProjectsPagenavCartText}>Projects</p>
          </div>
          <div>
            <button
              className={Styles.ProjectsPageNavContainerExportButton}
              onClick={handleOpen}
            >
              Export
            </button>
            <button
              className={Styles.ProjectsPageNavContainerButton}
              onClick={handleOpen}
            >
              Add Projects
            </button>
          </div>
        </div>
        <div className={Styles.ProjectsPageTabsContainerTable}>
          <div class="search">
            <input
              placeholder="Search Campaign"
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
          <div className={Styles.ProjectPageTablePagination}>
            <Pagination
              pageSize={countPerPage}
              onChange={updatePage}
              current={currentPage}
              total={allData.length}
            />
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={Styles.ProjectsPageModelPopupContainer}>
              <div className={Styles.ProjectsPageModelPopupHeader}>
                <p className={Styles.ProjectsPageModelPopupHeaderText}>
                  New Projects
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleClose()}
                  className={Styles.ProjectsPageModelPopupHeaderTextIcon}
                />
              </div>
              <div className={Styles.CreateProjetsTitleContainer}>
                <p className={Styles.CreateProjetsTitle}>
                  Projects Information
                </p>
              </div>
              <div className={Styles.CreateProjectsInputContainer}>
                <div className={Styles.CreateProjectsInputContent}>
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                      Project Name
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
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                      Project summary
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
                <div className={Styles.CreateProjectsInputContent}>
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                      Status
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
                <div className={Styles.CreateProjectsInputContent}>
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                     Start Date
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
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                      Deadline
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
                <div className={Styles.CreateProjectsInputContent}>
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                    Upload OA & Subscription Documents as one file
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
                <div className={Styles.CreateProjetsTitleContainer}>
                <p className={Styles.CreateProjetsTitle}>
                  Projects Details
                </p>
              </div>
              <div className={Styles.CreateProjectsInputContent}>
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                      Billed Name
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
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                      Total Capitalization
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
                <div className={Styles.CreateProjectsInputContent}>
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                      Total Allocation 
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
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                      Total Raised
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
                <div className={Styles.CreateProjectsInputContent}>
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                      House Ticket Link
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
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                    House Ticket Comments
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
                <div className={Styles.CreateProjectsInputContent}>
                  <div className={Styles.CreateProjcetsInputCart}>
                    <p className={Styles.CreateProjectsInputCartText}>
                    General Comments
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
              </div>
              <div className={Styles.CreateProjectsButtonContainer}>
              <button className={Styles.CreateProjectsCancelButton} onClick={()=>handleClose()}>
                Cancel
              </button>
              <button className={Styles.CreateProjectsSubmitButton} onClick={()=>handleClose()}>
                Save
              </button>
            </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
export default ProjectsPage;
