import ContentMain from "components/admin/ContentMain/ContentMain";
import HeaderMain from "components/admin/HeaderMain/HeaderMain";
import InfoMain from "components/admin/InfoMain/InfoMain";
import React from "react";
import "../styles/adminHome.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingCircle from "components/loadingCircle/LoadingCircle";
import { useEffect } from "react";
import { fetchProjectDetail } from "thunks/projectThunk";

function AdminHome(props) {
  const pathURL = window.location.pathname.split("/")[2];
  const isLoading = useSelector((state) => state.project.isLoading);
  const dispatch = useDispatch();

  const params = useParams();

  const { projectId } = params;

  useEffect(() => {
    dispatch(fetchProjectDetail(projectId));
  }, []);

  return (
    <div className="main">
      <HeaderMain currentPosition={pathURL} />

      {projectId === "empty" && (
        <div>
          <h2>Project board is empty! Please select one of projects from Project Manager</h2>
        </div>
      )}

      {projectId !== "empty" && !isLoading && (
        <>
          <InfoMain />
          <ContentMain />
        </>
      )}
    </div>
  );
}

export default AdminHome;
