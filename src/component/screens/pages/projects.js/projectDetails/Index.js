import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Styles from "./Index.module.css";
import { Box, Modal, Pagination, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import ProjectsImage from "../../../../assets/images/ProjectsImage.png";
import HeaderPage from "../../header/Header";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InsertPageBreakOutlinedIcon from "@mui/icons-material/InsertPageBreakOutlined";
import { Link } from "react-router-dom";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import "rc-pagination/assets/index.css";
import { useEffect } from "react";
import { useRef } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import styled from "styled-components";
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import CoProducersTable from "./CoProducers.js/Index";
import DcoumentsPage from "./Documents/Index";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PartiesImage from "../../../../assets/images/PartiesImage.png";
import NotesImage from "../../../../assets/images/NotesImage.png";
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,  
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  }

  const styleViewInvestorTable = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  }
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
const ProjectDetails = () => {
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [role, setRole] = useState("10");

const handleChangeRole = (event) => {
  setRole(event.target.value);
};

  //   add Party's Project start
  const [openPartysProject, setOpenPartysProject] = useState(false);
  const handleOpenPartysProject = () => setOpenPartysProject(true);
  const handleClosePartysProject = () => setOpenPartysProject(false);

   
//   add Party's Project end

//   Add Investor Docuents start
const [openInvestorDocument, setOpenInvestorDocument] = useState(false);
const handleOpenInvestorDocument = () => setOpenInvestorDocument(true);
const handleCloseInvestorDocument = () => setOpenInvestorDocument(false);
//   Add Investor Docuents end

//   Add New Distribution start
const [openNewDistribution, setOpenNewDistribution] = useState(false);
const handleOpenNewDistribution = () => setOpenNewDistribution(true);
const handleCloseNewDistribution = () => setOpenNewDistribution(false);
//   Add New Distribution end

//   Add New Project Cost start
const [openNewProjectCost, setOpenNewProjectCost] = useState(false);
const handleOpenNewProjectCost = () => setOpenNewProjectCost(true);
const handleCloseNewProjectCost = () => setOpenNewProjectCost(false);
//   Add New Distribution end

//   Generated Docs start
const [openGeneratedView, setOpenGeneratedView] = useState(false);
const handleOpenGeneratedView = () => setOpenGeneratedView(true);
const handleCloseGeneratedView = () => setOpenGeneratedView(false);
//   Generated Docs end


//   Investor View start
const [openInvestorView, setOpenInvestorView] = useState(false);
const handleOpenInvestorView = () => setOpenInvestorView(true);
const handleCloseInvestorView = () => setOpenInvestorView(false);
//   Investor Viww end

//   Investor Edit start
const [openInvestorEdit, setOpenInvestorEdit] = useState(false);
const handleOpenInvestorEdit = () => setOpenInvestorEdit(true);
const handleCloseInvestorEdit = () => setOpenInvestorEdit(false);
//   Investor Edit end

//   Notes start
const [openNotesDoc, setOpenNotesDoc] = useState(false);
const handleOpenNotesDoc = () => setOpenNotesDoc(true);
const handleCloseNotesDoc = () => setOpenNotesDoc(false);
//   Notes end

//   View Investor Docuents start
const [openViewInvestorDocument, setOpenViewInvestorDocument] = useState(false);
const handleOpenViewInvestorDocument = () => setOpenViewInvestorDocument(true);
const handleCloseViewInvestorDocument= () => setOpenViewInvestorDocument(false);

 const [partiesAndNotesOpen ,setPartiesAndNotesOpen]=useState(false);
 const [notesOpen ,setnotesOpen]=useState(false);


//   View Investor Docuents end

  //   tableData Start
  const allData = [
    {
        no: "33",
      investorname: "Mathew",
      finalAmount: "$50,974",
      status: "SPV",
      action: (
        <div className="TableActionContainer">
          <EditOutlinedIcon className="TableActionEditIcon"  onClick={()=> handleOpenInvestorEdit()}/>
          <RemoveRedEyeOutlinedIcon
            className="TableActionViewIcon" onClick={()=> handleOpenInvestorView()}
          />
          <DeleteOutlineOutlinedIcon
            className="TableActionDeleteIcon"
          />
        </div>
      ),
      investorsDoc:<div className={Styles.ProjectDetailsInvestorTableInvestorDocumentButtonContainer}><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentViewButton} onClick={()=> handleOpenViewInvestorDocument()}>View</button><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentUploadButton} onClick={()=> handleOpenInvestorDocument()}>Upload</button></div>,
      docs:<button className={Styles.ProjectDetailsInvestorTableInvestorDocumentGenerateButton} onClick={()=> handleOpenGeneratedView()}>View</button>,
    },
    {
        no: "33",
      investorname: "Mathew",
      finalAmount: "$50,974",
      status: "SPV",
      action: (
        <div className="TableActionContainer">
        <EditOutlinedIcon className="TableActionEditIcon" />
        <RemoveRedEyeOutlinedIcon
          className="TableActionViewIcon"
        />
        <DeleteOutlineOutlinedIcon
          className="TableActionDeleteIcon"
        />
      </div>
      ),
      investorsDoc:<div className={Styles.ProjectDetailsInvestorTableInvestorDocumentButtonContainer}><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentViewButton} onClick={()=> handleOpenViewInvestorDocument()}>View</button><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentUploadButton } onClick={()=> handleOpenInvestorDocument()}>Upload</button></div>,
      docs:<button className={Styles.ProjectDetailsInvestorTableInvestorDocumentGenerateButton}>View</button>,
    },
    {
        no: "33",
      investorname: "Mathew",
      finalAmount: "$50,974",
      status: "SPV",
      action: (
        <div className="TableActionContainer">
        <EditOutlinedIcon className="TableActionEditIcon" />
        <RemoveRedEyeOutlinedIcon
          className="TableActionViewIcon"
        />
        <DeleteOutlineOutlinedIcon
          className="TableActionDeleteIcon"
        />
      </div>
      ),
      investorsDoc:<div className={Styles.ProjectDetailsInvestorTableInvestorDocumentButtonContainer}><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentViewButton} onClick={()=> handleOpenViewInvestorDocument()}>View</button><button className={Styles.ProjectDetailsInvestorTableInvestorDocumentUploadButton} onClick={()=> handleOpenInvestorDocument()}>Upload</button></div>,
      docs:<button className={Styles.ProjectDetailsInvestorTableInvestorDocumentGenerateButton}>View</button>,
    },

  
  ];

  const tableHead = {
    no: "No",
    investorname: "Investor Name",
    finalAmount: "Final Amount ",
    status: "Status",
    action: "Actions",
    docs:"Generated Docs",
    investorsDoc:"Investor's Docs",
    
  };
  const countPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState(
    cloneDeep(allData.slice(0, countPerPage))
  );


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
      <th key={index}>{title}</th>
    ));
  };

  //   table data end

//   View investor Upload Document table data Start
  const allDataViewInvestorUpdatedDocument = [
    {
        fileName: <p><InsertPageBreakOutlinedIcon/> ABC Project Agr...</p>,
      investorname: "Mathew",
      projectName: "ABC Project",
      updatedOn: "01/19/2025",
      action: (
        <div className="TableActionContainer">
        
        <SaveAltOutlinedIcon
          className="TableActionViewIcon"
        />
        <DeleteOutlineOutlinedIcon
          className="TableActionDeleteIcon"
        />
      </div>
      ),
       },
   
   
  ];

  const tableHeadViewInvestorUpdatedDocument = {
    fileName: "File Name",
    investorname: "Investor Name",
    projectName: "Project Name",
    updatedOn: "Updated On",
    action: "Actions",
  };
 

  const countPerPageViewInvestorUpdatedDocument = 5;
  const [currentPageViewInvestorUpdatedDocument, setCurrentPageViewInvestorUpdatedDocument] = useState(1);
  const [collectionViewInvestorUpdatedDocument, setCollectionViewInvestorUpdatedDocument] = useState(
    cloneDeep(allDataViewInvestorUpdatedDocument.slice(0, countPerPageViewInvestorUpdatedDocument))
  );

  const tableRowsViewInvestorUpdatedDocument = (rowData) => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHeadViewInvestorUpdatedDocument);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableDataViewInvestorUpdatedDocument = () => {
    return collectionViewInvestorUpdatedDocument.map((key, index) => tableRowsViewInvestorUpdatedDocument({ key, index }));
  };

  const headRowViewInvestorUpdatedDocument = () => {
    return Object.values(tableHeadViewInvestorUpdatedDocument).map((title, index) => (
      <th key={index}>{title}</th>
    ));
  };

  //   View investor Upload Document table data  end

  const HandleCahngePatiesAndNotes=()=>{
        if(partiesAndNotesOpen === false){
            setPartiesAndNotesOpen(true)
        }
        else{
            setPartiesAndNotesOpen(false)
        }
  }

  const HandleCahngeNotes=()=>{
    if(notesOpen === false){
        setnotesOpen(true)
    }
    else{
        setnotesOpen(false)
    }
}

  return (
    <div className={Styles.ProjectDetailsMainContainer}>
      <HeaderPage />
      <div className={Styles.ProjectsDetailsNavContainer}>
        <div className={Styles.ProjectsDetailsNavContainerLeftSide}>
          <img
            src={ProjectsImage}
            alt=""
            className={Styles.ProjectsDetailsPagenavCartImg}
          />
          <p className={Styles.ProjectsDetailsPagenavCartText}>Projects</p>
        </div>
        <div className={Styles.ProjectDetailsPageNavCalenderIcon}>
          <CalendarMonthOutlinedIcon />
        </div>
      </div>
      <div className={Styles.ProjectDetailsNavCartContainer}>
        <div className={Styles.ProjectDetailsNavCartHeaderContent}>
          <p className={Styles.ProjectDetailsNavCartHeaderContentText}>
            ABC Project
          </p>
          <button className={Styles.ProjectDetailsNavCartHeaderContentButton}>
            Add Projects
          </button>
        </div>
        <div className={Styles.ProjectDetailsNavCartDetails}>
          <div className={Styles.ProjectDetailsNavCartDetailsCard}>
            <p className={Styles.ProjectDetailsNavCartDetailsCardText}>
              Start date
            </p>
            <p className={Styles.ProjectDetailsNavCartDetailsCardTextdata}>
              02/19/2025
            </p>
          </div>
          <div className={Styles.ProjectDetailsNavCartDetailsCard}>
            <p className={Styles.ProjectDetailsNavCartDetailsCardText}>
              Status
            </p>
            <p className={Styles.ProjectDetailsNavCartDetailsCardTextdata}>
              Actively Raising
            </p>
          </div>
          <div className={Styles.ProjectDetailsNavCartDetailsCard}>
            <p className={Styles.ProjectDetailsNavCartDetailsCardText}>
              Total Invested
            </p>
            <p className={Styles.ProjectDetailsNavCartDetailsCardTextdata}>
              $20,425
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.ProjectDetailsTabAndNotesContainer}>
        <div className={Styles.ProjectDetailsPageTabsContainer}>
          <Box >
            <AppBar
              position="static"
              sx={{ bgcolor: "#fff", borderRadius: "10px", boxShadow: "none !important" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                TabIndicatorProps={{
                  sx: {
                    backgroundColor: "#2f8cff",
                    height: "2px",
                    borderRadius: "2px",
                  },
                }}
              >
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Details</p>}
                  {...a11yProps(0)}
                />
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Investors</p>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Co-Producers</p>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Documents</p>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Distributions</p>}
                  {...a11yProps(1)}
                />
                <Tab
                  label={<p className={Styles.TabAddIconTExt}>Project Costs</p>}
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className={Styles.ProjectDetailsTabDetailsContainer}>
                <div className={Styles.ProjectDetailsTabDetailsHeader}>
                  <p className={Styles.ProjectDetailsTabDetailsHeaderText}>
                    Project Information
                  </p>
                  <EditOutlinedIcon
                    className={Styles.ProjectDetailsTabDetailsHeaderEditIcon}
                  />
                </div>
                <div className={Styles.ProjectDetailsInformationContianer}>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Project Name
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        ABC Project
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Status
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        Actively Raising
                      </p>
                    </div>
                  </div>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Start Date
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        02/19/2025
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Deadline
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        05/30/2026
                      </p>
                    </div>
                  </div>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Project Summary
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetuer ut adipiscing
                        elit, sed diam nonumm euismod tincidunt ut laoreet
                        dolore magna aliquam era volutpat.
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        OA & Subscription Documents
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        <InsertPageBreakOutlinedIcon
                          className={
                            Styles.ProjectDetailsPageInformationDocumentICon
                          }
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={Styles.ProjectDetailsTabDetailsHeader}>
                  <p className={Styles.ProjectDetailsTabDetailsHeaderText}>
                    Project Details
                  </p>
                </div>
                <div className={Styles.ProjectDetailsInformationContianer}>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Billed Name
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        Robin pattison
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Total Capitalization
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        $98,500
                      </p>
                    </div>
                  </div>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Total Allocation
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        $100,500
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        Total Raised
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        $60,000
                      </p>
                    </div>
                  </div>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        House Ticket Link
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        https://abc-project/production
                      </p>
                    </div>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        House Ticket Comments
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetuer ut{" "}
                      </p>
                    </div>
                  </div>
                  <div className={Styles.ProjectDetailsInformationContent}>
                    <div
                      className={Styles.ProjectDetailsInformationDetailsCard}
                    >
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardText
                        }
                      >
                        General Comments
                      </p>
                      <p
                        className={
                          Styles.ProjectDetailsInformationDetailsCardTextdata
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetuer ut{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div>
                <div className={Styles.ProjectDetailsPageInvestorTableHeaderButtonContainer}>
                        <button className={Styles.ProjectDetailsPageInvestorTableHeaderButton} onClick={()=> handleOpenPartysProject()}>Add New</button>
                </div>
                <div className={Styles.ProjectsDetailsPageInvestorTabsContainerTable}>
                  <table>
                    <thead>
                      <tr>{headRow()}</tr>
                    </thead>
                    <tbody className="trhover">{tableData()}</tbody>
                  </table>
                  <div className={Styles.ProjectDetailsPageInvesotrTablePagination}>
                    <Pagination
                      pageSize={countPerPage}
                      onChange={updatePage}
                      current={currentPage}
                      total={allData.length}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <CoProducersTable/>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
                <DcoumentsPage/>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>

            <div className="PageHeader">
            <p className="PageTableTitleText">Distributions</p>
            <button className="PageTableNavContentButton" onClick={()=> handleOpenNewDistribution()}>Add New</button>
            </div>
            
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
            <div className="PageHeader">
            <p className="PageTableTitleText">Project Cost</p>
            <button className="PageTableNavContentButton" onClick={()=> handleOpenNewProjectCost()}>Add New</button>
            </div>
            </TabPanel>
          </Box>
        </div>
        <div className={Styles.ProjectDetailsPartiesAndNotesContainer}>
                <div className={Styles.ProjectDetailsPartiesAndNotesContentMainContainer}> 
                    <div className={Styles.ProjectDetailsPartiesAndNotesContent}>
                    <div className={Styles.ProjectDetailsPartiesAndNotesContentHeader}>
                        <img src={PartiesImage} alt="PartiesImage"/>
                        <p className={Styles.ProjectDetailsPartiesAndNotesContentHeaderText}>Parties</p>
                    </div>
                    <ExpandMoreOutlinedIcon className={Styles.ProjectDetailsPAtiesAndNotesIcon} onClick={()=> HandleCahngePatiesAndNotes()}/>
                    </div>
                    {partiesAndNotesOpen === true ? <div className={Styles.ProjectDetailsPartiesContainer}>
                            <p className={Styles.ProjectDetailsPartiesContainerText}>Mathew   <span onClick={()=> handleOpenPartysProject()}><  AddBoxIcon /></span> </p>
                          
                            <div className={Styles.ProjectDetailsPartiesContent}>
                                <p className={Styles.ProjectDetailsPartiesContentTitle}>Status</p>
                                <p className={Styles.ProjectDetailsPartiesContentText}>Investing In Deal</p>
                            </div>
                            <div className={Styles.ProjectDetailsPartiesContent}>
                                <p className={Styles.ProjectDetailsPartiesContentTitle}>Interested Amount</p>
                                <p className={Styles.ProjectDetailsPartiesContentText}>General</p>
                            </div>
                            <div className={Styles.ProjectDetailsPartiesContent}>
                                <p className={Styles.ProjectDetailsPartiesContentTitle}>Final Amount</p>
                                <p className={Styles.ProjectDetailsPartiesContentText}>$50,974</p>
                            </div>
                    </div>:""}
                </div>
                <div className={Styles.ProjectDetailsPartiesAndNotesContentMainContainer}> 
                <div className={Styles.ProjectDetailsPartiesAndNotesContent}> 
                    <div className={Styles.ProjectDetailsPartiesAndNotesContentHeader}>
                        <img src={NotesImage} alt="NotesImage"/>
                        <p className={Styles.ProjectDetailsPartiesAndNotesContentHeaderText}>Notes </p>
                    </div>
                    <ExpandMoreOutlinedIcon  className={Styles.ProjectDetailsPAtiesAndNotesIcon} onClick={()=> HandleCahngeNotes()}/>
                </div>
                {notesOpen === true ? <div className={Styles.ProjectDetailsPartiesContainer}>
                            <p className={Styles.ProjectDetailsPartiesContainerText}>Call With Robin <span onClick={()=> handleOpenNotesDoc()}><  AddBoxIcon /></span></p>
                            <div className={Styles.ProjectDetailsPartiesContent}>
                                <p className={Styles.ProjectDetailsPartiesContentTitle}>Note </p>
                                <p className={Styles.ProjectDetailsPartiesContentText}>Spoke with Robin</p>
                            </div>
                    </div>:""}
                </div>
        </div>
      </div>

      <Modal
          open={openPartysProject}
          onClose={handleClosePartysProject}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box class="modal">
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
              <div className="ModelPopupHeader">
                <p className="ModelPopupHeaderText">
                  New Party's Projects
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleClosePartysProject()}
                  className="ModelPopupHeaderIcon"
                />
              </div>
              <div className="ModelPopupbody">
              <div className={Styles.CreateProjetsdetailsAddPartysProjectTitleContainer}>
                <p className={Styles.CreateProjetsdetailsAddPartysProjectTitle}>
                  Information
                </p>
              </div>
              <div className={Styles.CreateProjetsdetailsAddPartysInputContainer}>
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Investor
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      type="search"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      slotProps={{
                        input: {
                          endAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                        },
                      }}
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
                    {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
            <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Investing Entity Name
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 200 }}
                      name="lastname"
                      multiline
                      rows={4}
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
                    {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                     <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                    Status
                    </p>

                    <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                     <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Interested</MenuItem>
                    <MenuItem value={30}>Investing In Project</MenuItem>
                    <MenuItem value={40}>Passing On Project</MenuItem>
                  </SelectStyled>
                    {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                     Documents Received
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
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Funds Received
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
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Investment Round
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 200 }}
                      name="lastname"
                      multiline
                      rows={4}
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
                    {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                  </div>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Project
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
            <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Investment Method
                    </p>

                    <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>SPV</MenuItem>
                    <MenuItem value={30}>Direct to Production</MenuItem>
                  </SelectStyled>
                    {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Interested Amount
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
                     <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                    Final Amount
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
                     <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Investor Comments
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 200 }}
                      name="lastname"
                      multiline
                      rows={4}
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, lastname: e.target.value })}
                    />
                    {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                    Bonus/Perks
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
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                    Co-Producer
                    </p>

                    <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                     <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}></MenuItem>
                    <MenuItem value={30}></MenuItem>
                    <MenuItem value={40}></MenuItem>
                  </SelectStyled>
                    {/* {error?.username && (
                      <span className={Styles.registerErrormsg}>{error?.username}</span>
                    )} */}
                  </div>
                </div>
                
              
              </div>
              </div>
              <div className="ModelPopupfooter">
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsCancelButton} onClick={()=>handleClosePartysProject()}>
                Cancel
              </button>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsSubmitButton} onClick={()=>handleClosePartysProject()}>
                Save
              </button>
            </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={openInvestorDocument}
          onClose={handleCloseInvestorDocument}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal">
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
              <div className="ModelPopupHeader">
                <p className="ModelPopupHeaderText">
                 Upload Investor's Documents
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleCloseInvestorDocument()}
                  className="ModelPopupHeaderIcon"
                />
              </div>
              <div className="ModelPopupbody">
              <div className={Styles.CreateProjetsdetailsAddPartysProjectTitleContainer}>
                <p className={Styles.CreateProjetsdetailsAddPartysProjectTitle}>
                  Upload Summary
                </p>
                <p className={Styles.CreateProjetsdetailsAddPartysProjectText}>
                  You are going To Upload The File Named "ABC Project Agreement2.652.pdf"
                </p>
              </div>
              <div className={Styles.CreateProjetsdetailsAddPartysInputContainer}>
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      File Name
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
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Description
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
                <div className={Styles.CreateProjetsdetailsAddPartysInputContent}>
                  <div className={Styles.CreateProjetsdetailsAddPartysInputCart}>
                    <p className={Styles.CreateProjetsdetailsAddPartysInputCartText}>
                      Updated On   
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      type="date"
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
                    {/* {error?.username && (
                        <span className={Styles.registerErrormsg}>{error?.username}</span>
                        )} */}
                  </div>
                </div>
               
              </div>
              </div>
              <div className="ModelPopupfooter">
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsCancelButton} onClick={()=>handleCloseInvestorDocument()}>
                Cancel
              </button>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsSubmitButton} onClick={()=>handleCloseInvestorDocument()}>
                Upload
              </button>
            </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={openViewInvestorDocument}
          onClose={handleCloseViewInvestorDocument}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal">
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
              <div className="ModelPopupHeader">
                <p className="ModelPopupHeaderText">
                 View Investor's Documents
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleCloseViewInvestorDocument()}
                  className="ModelPopupHeaderIcon"
                />
              </div>           
              <div className="ModelPopupbody">
              <div className={Styles.ProjectsDetailsPageInvestorTabsContainerTable}>
                  <table>
                    <thead>
                      <tr>{headRowViewInvestorUpdatedDocument()}</tr>
                    </thead>
                    <tbody className="trhover">{tableDataViewInvestorUpdatedDocument()}</tbody>
                  </table>
                </div>
                </div>
              <div className="ModelPopupfooter">
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsCancelButton} onClick={()=>handleCloseViewInvestorDocument()}>
                Cancel
              </button>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsSubmitButton} onClick={()=>handleCloseViewInvestorDocument()}>
                Upload
              </button>
            </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={openNewDistribution}
          onClose={handleCloseNewDistribution}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal">
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
              <div className="ModelPopupHeader">
                <p className="ModelPopupHeaderText">
                New Distribution
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleCloseNewDistribution()}
                  className="ModelPopupHeaderIcon"
                />
              </div>           
              <div className="ModelPopupbody">
              <div className={Styles.CreateProjetsdetailsAddPartysProjectTitleContainer}>
                <p className={Styles.CreateProjetsdetailsAddPartysProjectTitle}>
                  Information
                </p>                
              </div>
              <div className="InputContainer">
                <div className="InputContent">
                  <div className="InputCart">
                    <p className="InputCartText">
                    Distribution Name/Number
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
             <p className="InputCartText">
                    Date of Distribution
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      type="date"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
                    <p className="InputCartText">
                    Total Recouped to Date
                    </p>

                    <InputStyled
                      id="outlined-basic"
                       type="text"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
            
                  </div>
                  <div className="InputCart">
                  <p className="InputCartText">
                    Project
                    </p>

                    <InputStyled
                      id="outlined-basic"
                       type="text"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />    
                    <p className="InputCartText">
                    Amount of Destribution
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      type="text"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />             
                  </div>
                </div>
               
               
              </div>
                </div>
              <div className="ModelPopupfooter">
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsCancelButton} onClick={()=>handleCloseNewDistribution()}>
                Cancel
              </button>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsSubmitButton} onClick={()=>handleCloseNewDistribution()}>
                Save
              </button>
            </div>
            </div>
          </Box>
        </Modal> 

         <Modal
          open={openNewProjectCost}
          onClose={handleCloseNewProjectCost}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal">
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
              <div className="ModelPopupHeader">
                <p className="ModelPopupHeaderText">
                New Project Cost
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleCloseNewProjectCost()}
                  className="ModelPopupHeaderIcon"
                />
              </div>           
              <div className="ModelPopupbody">
              <div className={Styles.CreateProjetsdetailsAddPartysProjectTitleContainer}>
                <p className={Styles.CreateProjetsdetailsAddPartysProjectTitle}>
                  Details
                </p>                
              </div>
              <div className="InputContainer">
                <div className="InputContent">
                  <div className="InputCart">
                    <p className="InputCartText">
                    Cost Destribution
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 200 }}
                      name="firstname"
                      multiline
                      rows={4}
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
                    {/* {error?.username && (
              <span className={Styles.registerErrormsg}>{error?.username}</span>
            )} */}
             
                  </div>
                  <div className="InputCart">
                  <p className="InputCartText">
                   Total Cost
                    </p>

                    <InputStyled
                      id="outlined-basic"
                       type="text"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />    
                    <p className="InputCartText">
                    Date of Cast
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      type="date"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />             
                  </div>
                </div>
                <div className={Styles.CreateProjetsdetailsAddPartysProjectTitleContainer}>
                <p className={Styles.CreateProjetsdetailsAddPartysProjectTitle}>
                  Additional Info
                </p>                
              </div>
              <div className="InputContent">
                <div className="InputCart">
                  <p className="InputCartText">
                    Status
                    </p>   
                  <SelectStyled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChangeRole}
                  >
                   <MenuItem value={10}>-None-</MenuItem>
                    <MenuItem value={20}>Unreimbursed</MenuItem>
                    <MenuItem value={30}>Reimbursed</MenuItem>
                  </SelectStyled>

                <p className="InputCartText">
                    Date of Reimbursement
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      type="date"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
                    <p className="InputCartText">
                    Expense Comments
                    </p>

                    <InputStyled
                      id="outlined-basic"
                       type="text"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 200 }}
                      name="firstname"
                      multiline
                      rows={4}
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
            
                </div>
                <div className="InputCart">
                  <p className="InputCartText">
                    Cost Incurred By
                  </p>
                  <InputStyled
                      id="outlined-basic"
                      type="search"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      slotProps={{
                        input: {
                          endAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                        },
                      }}
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
                  <p className="InputCartText">
                    Project
                  </p>
                  <InputStyled
                      id="outlined-basic"
                      type="text"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 20 }}
                      name="firstname"
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
                </div> 
              </div>
               
              </div>
                </div>
              <div className="ModelPopupfooter">
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsCancelButton} onClick={()=>handleCloseNewProjectCost()}>
                Cancel
              </button>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsSubmitButton} onClick={()=>handleCloseNewProjectCost()}>
                Save
              </button>
            </div>
            </div>
          </Box>
        </Modal> 

          <Modal
          open={openGeneratedView}
          onClose={handleCloseGeneratedView}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box className="modal">
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
                         
              <div className="ModelPopupbody GeneratedView">
                <h3>Do you want to send an email or download the file named “ABC Project Agreement2.652.pdf”?</h3>   
                <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsCancelButton} >
                Send Email
              </button>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsSubmitButton} >
                Download
              </button>     
              </div>
              
            </div>
          </Box>
        </Modal> 

        <Modal
          open={openInvestorView}
          onClose={handleCloseInvestorView}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box className="modal">
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
            <div className="ModelPopupHeader">
                <p className="ModelPopupHeaderText">
                View Investor
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleCloseInvestorView()}
                  className="ModelPopupHeaderIcon"
                />
              </div>                         
              <div className="ModelPopupbody">
                <div class={Styles.ProjectDetailsInformationContent}>
                  <div class={Styles.ProjectDetailsInformationDetailsCard}>
                    <p class={Styles.ProjectDetailsInformationDetailsCardText}>Investor Name</p>
                    <p class={Styles.ProjectDetailsInformationDetailsCardTextdata}>Mathew</p>
                  </div>
                  <div class={Styles.ProjectDetailsInformationDetailsCard}>
                    <p class={Styles.ProjectDetailsInformationDetailsCardText}>Final Amount</p>
                    <p class={Styles.ProjectDetailsInformationDetailsCardTextdata}>$50,974</p>
                  </div>
                </div>
                <div class={Styles.ProjectDetailsInformationContent}>
                  <div class={Styles.ProjectDetailsInformationDetailsCard}>
                    <p class={Styles.ProjectDetailsInformationDetailsCardText}>Status</p>
                    <p class={Styles.ProjectDetailsInformationDetailsCardTextdata}>SPV</p>
                  </div>                 
                </div>                 
              </div>              
            </div>
          </Box>
        </Modal>   

         <Modal
          open={openNotesDoc}
          onClose={handleCloseNotesDoc}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box className="modal">
            <div className={Styles.ProjectsDetailsPageAddPartysProjectModelPopupContainer}>
            <div className="ModelPopupHeader">
                <p className="ModelPopupHeaderText">
                Add Notes
                </p>
                <CloseOutlinedIcon
                  onClick={() => handleCloseNotesDoc()}
                  className="ModelPopupHeaderIcon"
                />
              </div>                         
              <div className="ModelPopupbody">
              <div className={Styles.CreateProjetsdetailsAddPartysProjectTitleContainer}>
                <p className={Styles.CreateProjetsdetailsAddPartysProjectTitle}>
                  Information
                </p>                
              </div>
              <div className="InputContainer">
                <div className="InputContent">
                  <div className="InputCart">
                    <p className="InputCartText">
                    Title
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
                  <div className="InputCart">
                  <p className="InputCartText">
                  Notes
                    </p>

                    <InputStyled
                      id="outlined-basic"
                      className={Styles.LoginPageInputContainerInput}
                      inputProps={{ maxLength: 200 }}
                      name="firstname"
                      multiline
                      rows={4}
                      // onChange={(e) => setCreateInvestor({ ...createInvestor, firstname: e.target.value })}
                    />
                    </div>
                  </div>
                  </div>

              </div>
              <div className="ModelPopupfooter">
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsCancelButton} onClick={()=>handleCloseNotesDoc()}>
                Cancel
              </button>
              <button className={Styles.CreateProjectDetailsInvestorTableAddPartsProjectsSubmitButton} onClick={()=>handleCloseNotesDoc()}>
                Save
              </button>
            </div>              
            </div>
          </Box>
        </Modal>            
        



    </div>
  );
};
export default ProjectDetails;
