import { FC, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faPlus,
  faMinus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import PopupHierarchy from "../../components/popup.hierarchy/popup";

import "./Hierarchy.scss";

const groupIntoColumns = (arr: Array<any>, cols: number) => {
  const result = [];

  const arrCopy = [...arr];

  while (arrCopy.length >= 1) {
    result.push(
      arrCopy.splice(0, arrCopy.length >= cols ? cols : arrCopy.length)
    );
  }

  return result;
};

const Hierachy: FC = () => {
  const data = useMemo(
    () => ({
      companyName: "Test",
      employees: [
        {
          name: "querty@6",
          email: "querty@6",
        },
        {
          name: "querty@5",
          email: "querty@5",
        },
        {
          name: "querty@4",
          email: "querty@4",
        },
        {
          name: "querty@3",
          email: "querty@3",
        },
        {
          name: "querty@2.",
          email: "querty@2",
        },
      ],
    }),
    []
  );
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <BaseLayout>
      <div className="Hierarchy">
        <h1>Иерархия</h1>

        <div className="container custom-scroll">
          <div>
            <div className="company-details custom-scroll">
              <div>
                <div className="company-logo">
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                <div>
                  <h2>{data.companyName}</h2>
                  <p>Владелец</p>
                </div>
              </div>
            </div>

            {groupIntoColumns(data.employees, 4).map((e, i) => {
              return (
                <div
                  key={`employee-details-${i}`}
                  className="employee-details custom-scroll"
                >
                  {e.map((e, j) => (
                    <div
                      key={`employee-detail-${j}`}
                      className="employee-detail"
                    >
                      <div>
                        <div>
                          <div className="profile-image">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <div className="buttons">
                            <button className="remove">
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <button className="expand">
                              <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                          </div>
                        </div>
                        <div>
                          <p>{e.name}</p>
                          <p>{e.email}</p>
                          <p>{e.email}</p>
                        </div>
                      </div>
                      <div className="divide" />

                      {i * 4 + j === data.employees.length - 1 && (
                        <button className="add" onClick={toggleModal}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      )}
                      <PopupHierarchy modal={modal} toggleModal={toggleModal} />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Hierachy;
