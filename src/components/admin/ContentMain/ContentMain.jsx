import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useSelector } from "react-redux";

function ContentMain(props) {
  const projectDetailById = useSelector((state) => state.project.projectDetailById);

  function renderCardList() {
    if (!projectDetailById) return;

    return projectDetailById.lstTask.map((task, idx) => (
      <div key={idx} className="card" style={{ width: "17rem", height: "25rem" }}>
        <div className="card-header text-sm">{task.statusName}</div>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            data-toggle="modal"
            data-target="#infoModal"
            style={{ cursor: "pointer" }}
          >
            <p>Each issue has a single reporter but can have multiple assignees</p>
            <div className="block" style={{ display: "flex" }}>
              <div className="block-left flex gap-1 items-center">
                <CheckBoxIcon sx={{ fontSize: "1.2rem", color: "blue" }} />
                <ArrowUpwardIcon sx={{ fontSize: "1.2rem", color: "red" }} />
              </div>
              <div className="block-right">
                <div className="avatar-group" style={{ display: "flex" }}>
                  <div className="avatar">
                    <img src="" alt="" />
                  </div>
                  <div className="avatar">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <p>Each issue has a single reporter but can have multiple assignees</p>
            <div className="block" style={{ display: "flex" }}>
              <div className="block-left flex gap-1 items-center">
                <CheckBoxIcon sx={{ fontSize: "1.2rem", color: "blue" }} />
                <ArrowUpwardIcon sx={{ fontSize: "1.2rem", color: "red" }} />
              </div>
              <div className="block-right">
                <div className="avatar-group" style={{ display: "flex" }}>
                  <div className="avatar">
                    <img src="" alt="" />
                  </div>
                  <div className="avatar">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    ));
  }

  return (
    <div className="content" style={{ display: "flex" }}>
      {renderCardList()}
    </div>
  );
}

export default ContentMain;

{
  /* <div className="card" style={{ width: "17rem", height: "25rem" }}>
<div className="card-header text-sm">BACKLOG 3</div>
<ul className="list-group list-group-flush">
  <li
    className="list-group-item"
    data-toggle="modal"
    data-target="#infoModal"
    style={{ cursor: "pointer" }}
  >
    <p>Each issue has a single reporter but can have multiple assignees</p>
    <div className="block" style={{ display: "flex" }}>
      <div className="block-left flex gap-1 items-center">
        <CheckBoxIcon sx={{ fontSize: "1.2rem", color: "blue" }} />
        <ArrowUpwardIcon sx={{ fontSize: "1.2rem", color: "red" }} />
      </div>
      <div className="block-right">
        <div className="avatar-group" style={{ display: "flex" }}>
          <div className="avatar">
            <img src="./assets/img/download (1).jfif" alt="" />
          </div>
          <div className="avatar">
            <img src="./assets/img/download (2).jfif" alt="" />
          </div>
        </div>
      </div>
    </div>
  </li>
  <li className="list-group-item">
    <p>Each issue has a single reporter but can have multiple assignees</p>
    <div className="block" style={{ display: "flex" }}>
      <div className="block-left flex gap-1 items-center">
        <CheckBoxIcon sx={{ fontSize: "1.2rem", color: "blue" }} />
        <ArrowUpwardIcon sx={{ fontSize: "1.2rem", color: "red" }} />
      </div>
      <div className="block-right">
        <div className="avatar-group" style={{ display: "flex" }}>
          <div className="avatar">
            <img src="./assets/img/download (1).jfif" alt="" />
          </div>
          <div className="avatar">
            <img src="./assets/img/download (2).jfif" alt="" />
          </div>
        </div>
      </div>
    </div>
  </li>
  <li className="list-group-item">Vestibulum at eros</li>
</ul>
</div>
<div className="card" style={{ width: "17rem", height: "25rem" }}>
<div className="card-header text-sm">SELECTED FOR DEVELOPMENT 2</div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">Cras justo odio</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
</ul>
</div>
<div className="card" style={{ width: "17rem", height: "25rem" }}>
<div className="card-header text-sm">IN PROGRESS 2</div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">Cras justo odio</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
</ul>
</div>
<div className="card" style={{ width: "17rem", height: "25rem" }}>
<div className="card-header text-sm">DONE 3</div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">Cras justo odio</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
  <li className="list-group-item">Vestibulum at eros</li>
</ul>
</div> */
}
