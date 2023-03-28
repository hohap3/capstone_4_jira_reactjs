import HeaderMain from "components/admin/HeaderMain/HeaderMain";
import ModalEdit from "components/modalEdit/ModalEdit";

import ProjectManagerTable from "components/projectManagerTable/ProjectManagerTable";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAll } from "reduxs/Slice/projectSlice";
import { fetchAllProject } from "thunks/projectThunk";

function ProjectManager() {
  const selectedProject = useSelector((state) => state.project.selectedProject);

  const dispatch = useDispatch();

  const pathURL = window.location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(fetchAllProject());

    return () => {
      dispatch(resetAll());
    };
  }, []);

  return (
    <section className="projectManager flex-1 h-screen overflow-y-scroll">
      <div className="projectManager__content px-[2%] flex flex-col mx-auto">
        <HeaderMain currentPosition={pathURL} />

        <h2 className="text-[1.4rem] font-medium">Project Manager</h2>

        <ProjectManagerTable />
      </div>

      {selectedProject && (
        <ModalEdit openDrawer={!!selectedProject} projectDetail={selectedProject} />
      )}
    </section>
  );
}

export default ProjectManager;
