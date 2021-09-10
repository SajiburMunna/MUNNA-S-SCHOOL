import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, removeToDo } from "../actions";

import "../App.css";

import "antd/dist/antd.css";
import "./Home.css";

import { Table } from "antd";
import "../Image/Header.png";
import "../Image/im.gif";

import { SearchOutlined } from "@ant-design/icons";
import { Input, Button, Space } from "antd";
import swal from "@sweetalert/with-react";
import passedstd from "../Image/passedstd.png";
import students from "../Image/students.png";
import fail from "../Image/fail.png";
import bng from "../Image/bng.png";
import eng from "../Image/eng.png";
import mat from "../Image/math.png";
import clear from "../Image/clear.png";
import plus from "../Image/plus.png";

const Home = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(" ");
  const [bangla, setBangla] = useState(" ");
  const [english, setEnglish] = useState(" ");
  const [math, setMath] = useState(" ");
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  console.log(searchText);
  console.log(searchedColumn);

  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search Student By  ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",

      ...getColumnSearchProps("id"),
    },
    {
      title: "Student Name",
      dataIndex: "std_name",
    },
    {
      title: "Bangla Score",
      dataIndex: "bangla",
      sorter: {
        compare: (a, b) => a.bangla - b.bangla,
        multiple: 3,
      },
      render(text, record) {
        return {
          props: {
            style: {
              color: parseInt(text) < 40 ? "red" : null,
              fontWeight: parseInt(text) < 40 ? "bold" : "",
            },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "English Score",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },

      render(text, record) {
        return {
          props: {
            style: {
              color: parseInt(text) < 40 ? "red" : null,
              fontWeight: parseInt(text) < 40 ? "bold" : "",
            },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "Math Score",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },

      render(text, record) {
        return {
          props: {
            style: {
              color: parseInt(text) < 40 ? "red" : null,
              fontWeight: parseInt(text) < 40 ? "bold" : "",
            },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "Result",
      dataIndex: "result",
      render(text, record) {
        return {
          props: {
            style: {
              color: text === "PASSED" ? "green" : "red",
              fontWeight: text === "PASSED" ? "bold" : "bold",
            },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (id) => (
        <button
          onClick={() =>
            dispatch(
              deleteToDo(id),
              swal("Success!", "Your Data Is Deleted!", "success")
            )
          }
        >
          ✂
        </button>
      ),
    },
  ];

  const resetInput = () => {
    setId("");
    setName("");
    setBangla("");
    setEnglish("");
    setMath("");
  };

  const banglaSub = list.filter((b) => b.bangla >= 40);
  const englishSub = list.filter((e) => e.english >= 40);
  const mathSub = list.filter((m) => m.math >= 40);
  const totalPassed = list.filter(
    (p) => p.bangla >= 40 && p.english >= 40 && p.math >= 40
  );
  const totalfail = list.filter(
    (p) => p.bangla <= 40 || p.english <= 40 || p.math <= 40
  );

  const passed = totalPassed.map((obj) => ({ ...obj, result: "PASSED" }));
  const failed = totalfail.map((obj) => ({ ...obj, result: "FAILED" }));

  const total = [...passed, ...failed];
  console.log(total);

  const total_A_Plus = list.filter(
    (p) => p.bangla >= 80 && p.english >= 80 && p.math >= 80
  );

  return (
    <>
      <div>
        <div className="header">
          <div className="input">
            <h1>Enter Student's Information</h1>
            <input
              type="number"
              className="name-input"
              placeholder="Enter Student ID"
              value={id}
              onChange={(evant) => setId(evant.target.value)}
            />
            <br />
            <input
              type="email"
              className="name-input"
              placeholder="Enter Student Name"
              value={name}
              onChange={(evant) => setName(evant.target.value)}
            />
            <br />

            <input
              className="bangla-input"
              type="number"
              placeholder="Enter Bangla Score"
              value={bangla}
              onChange={(evant) => setBangla(evant.target.value)}
            />
            <br />
            <input
              className="english-input"
              type="number"
              placeholder="Enter English Score"
              value={english}
              onChange={(evant) => setEnglish(evant.target.value)}
            />
            <br />
            <input
              className="math-input"
              type="number"
              placeholder="Enter Mathematics Score"
              value={math}
              onChange={(evant) => setMath(evant.target.value)}
            />
            <br />

            <button
              className="button-input"
              onClick={() =>
                id && name && bangla && english && math
                  ? dispatch(
                      addToDo(id, name, bangla, english, math),
                      resetInput()
                    )
                  : swal("Enter All Information")
              }
            >
              SUBMIT INFO
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1>ALL STUDENT'S SCORE BOARD</h1>
        <div className="details-div">
          <div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <img className="logo-img" src={students} alt=""></img>
              <h5>TOTAL STUDENTS : {list.length}</h5>
            </div>

            <div style={{ display: "flex", marginBottom: "20px" }}>
              <img className="logo-img" src={passedstd} alt=""></img>
              <h5> TOTAL PASSED STUDENTS : {totalPassed.length}</h5>
            </div>

            <div style={{ display: "flex", marginBottom: "20px" }}>
              <img className="logo-img" src={fail} alt=""></img>

              <h5 className="fail-h5 ">
                TOTAL FAILED STUDENTS [ Less 40% Marks ] :{" "}
                {list.length - totalPassed.length}
              </h5>
            </div>
          </div>
          <div style={{ marginLeft: "50px" }}>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <img className="logo-img" src={bng} alt=""></img>
              <h5> BENGALI-TOTAL PASSED STUDENTS : {banglaSub.length}</h5>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <img className="logo-img" src={eng} alt=""></img>
              <h5> ENGLISH-TOTAL PASSED STUDENTS : {englishSub.length}</h5>
            </div>

            <div style={{ display: "flex", marginBottom: "20px" }}>
              <img className="logo-img" src={mat} alt=""></img>
              <h5> MATHEMATICS-TOTAL PASSED STUDENTS : {mathSub.length}</h5>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
              marginLeft: "10px",
            }}
          >
            <img className="logo-img" src={plus} alt=""></img>
            <h5 className="plus-h5">
              Total A+ [ 80% Marks ] : {total_A_Plus.length}{" "}
            </h5>
          </div>
          <div style={{ display: "flex" }}>
            <button
              className="clear-button"
              onClick={() => dispatch(removeToDo())}
            >
              <img className="logo-img" src={clear} alt=""></img>
              ClearBoard
            </button>
          </div>
        </div>
      </div>

      <div>
        <Table columns={columns} dataSource={total} />
      </div>
    </>
  );
};

export default Home;
