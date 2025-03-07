import React, { useEffect, useState } from "react";
import Styles from "./Index.module.css";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { useRef } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import InsertPageBreakOutlinedIcon from "@mui/icons-material/InsertPageBreakOutlined";
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';

const DcoumentsPage = () => {
  // tabledata
  const allData = [
    {
        fileName: <p><InsertPageBreakOutlinedIcon/> ABC Project Agr...</p>,
        createddate: "01/19/2025",
        updatedOn: "01/19/2025",
        reletedTo:"ABC Project",
        parentFlow:"Poject Ho..",
        action: (
        <div className={Styles.DcoumentsPageActionContainer}>
          <EditOutlinedIcon className={Styles.DcoumentsPageActionEditIcon} />
          <SaveAltOutlinedIcon
            className={Styles.DcoumentsPageActionDownloadIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.DcoumentsPageActionDeleteIcon}
          />
        </div>
      ),
      generate:<button className={Styles.DcoumentsPageGenerateButton}>Generate</button>,
    },
  
      {
        fileName: <p><InsertPageBreakOutlinedIcon/> ABC Project Agr...</p>,
        createddate: "01/19/2025",
        updatedOn: "01/19/2025",
        reletedTo:"ABC Project",
        parentFlow:"Poject Ho..",
        action: (
        <div className={Styles.DcoumentsPageActionContainer}>
          <EditOutlinedIcon className={Styles.DcoumentsPageActionEditIcon} />
          <SaveAltOutlinedIcon
            className={Styles.DcoumentsPageActionDownloadIcon}
          />
          <DeleteOutlineOutlinedIcon
            className={Styles.DcoumentsPageActionDeleteIcon}
          />
        </div>
      ),
      generate:<button className={Styles.DcoumentsPageGenerateButton}>Generate</button>,
    },
   
  ];

  const tableHead = {
    fileName: "File Name",
    createddate: "Created Date",
    updatedOn: "Updated On",
    reletedTo: "Releted To",
    parentFlow: "Parent fol...",
    action: "Actions",
    generate:"",
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
    <div>
      <div className={Styles.DcoumentsPagePageTabsContainerTable}>
       
        <div className={Styles.DcoumentsPagePageTableNavContent}>
        <div class="search">
          <input
            placeholder="Search Campaign"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button className={Styles.DcoumentsPagePageTableNavContentButton}>Upload Document</button>
        </div>
        <p className={Styles.DcoumentsPageTableTitleText}>Project Home</p>
        <table>
          <thead>
            <tr>{headRow()}</tr>
          </thead>
          <tbody className={Styles.TableBody}>{tableData()}</tbody>
        </table>
        <div className={Styles.DcoumentsPagePageTablePagination}>
          <Pagination
            pageSize={countPerPage}
            onChange={updatePage}
            current={currentPage}
            total={allData.length}
          />
        </div>
      </div>
    </div>
  );
};
export default DcoumentsPage;
