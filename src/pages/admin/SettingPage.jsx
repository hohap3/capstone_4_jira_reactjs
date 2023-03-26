import FormSetting from "components/form/FormCreate";
import React from "react";

function SettingPage() {
  return (
    <section className="setting flex-1 h-screen overflow-y-scroll">
      <div className="setting__content px-[2%] flex flex-col mx-auto">
        <div className="header">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
              <li className="breadcrumb-item">Project</li>
              <li className="breadcrumb-item">CyberLearn</li>
              <li className="breadcrumb-item active" aria-current="page">
                Project Details
              </li>
            </ol>
          </nav>
        </div>

        <h2 className="px-[1rem] text-[1.4rem] font-medium">Project Details</h2>

        <div className="setting__form px-[1rem]">
          <FormSetting />
        </div>
      </div>
    </section>
  );
}

export default SettingPage;
