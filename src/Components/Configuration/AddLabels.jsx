import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import { Dots } from "loading-animations-react";
import { toast } from "react-toastify";

function AddLabels({ togle }) {
  const [comData, setcomData] = useState([]);

  const [currentId, setCurrentId] = useState(null);
  const [isFormValidate, setisFormValidate] = useState(true);

  const [loading, setLoading] = useState(true);
  const [inpVal, setinpVal] = useState({
    lable_id: 0,
    lable1: "",
    lable_colour: "",
  });

  //! model states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //! model states end
  const notify = () => toast.success("Data added SuccessFully!");
  const updated = () => toast.success("Data updated SuccessFully!");
  const addData = async () => {
    if (inpVal.lable1 === "" || inpVal.lable_colour === "") {
      setisFormValidate(false);
    } else {
      handleClose();

      const res = await fetch(
        "http://usman1206-001-site1.btempurl.com/api/Lables",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer 1DKy2hsnj8KKWTeVaFWYmh-WmAfKqNCrQ3jZoheLbU8ps_qk6ZRlMV0cpn-sIXxK_GdZuEbLQlE23KggzmDfEYhiFDz9U-3l9zlYUbY-AYJcesk5iXzOE8IJsdQNSCF1HPthA09GSC8vfZJAijwKe5y3VeiMlNB6Tvx7ZV4c2U3QwI9SgsZXqX0J8vIxv-adApqkv8TZAJma5AVPaGPVhjNxmv-PVFYnKYZBniA5H6VxXrVr0m3g0un3PQy4ZfDFDbfhKYbWxeP5v-JQY4b94vh4lwSLVAN81b6hRU2xEKLg6pPDXJVIRZP2e_0Wd9bWJbI4BQBzMU27qaCtHyOilsUaoX-VyloD33SW5fS9WD7o_893eo7-6TYtQEzMwhBHbi1w-zGMYZ8LBoe6ogWq5UmPZAbvll35eaa2lswjtL02n9TBdd92CeUcZqlJ_JgjdDWri84xpSOvWWkQ8W7JfTg3ivspKBaERRKulz9h34mAMIPOrUD7_xaaQ5RaWaqq",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inpVal),
        }
      );

      const data = await res.json();
      console.log(data);
      getData();
      setinpVal({ lable1: "", lable_colour: "" });
      notify();
    }
  };
  const getData = async () => {
    const res = await fetch(
      "http://usman1206-001-site1.btempurl.com/api/Lables",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer 1DKy2hsnj8KKWTeVaFWYmh-WmAfKqNCrQ3jZoheLbU8ps_qk6ZRlMV0cpn-sIXxK_GdZuEbLQlE23KggzmDfEYhiFDz9U-3l9zlYUbY-AYJcesk5iXzOE8IJsdQNSCF1HPthA09GSC8vfZJAijwKe5y3VeiMlNB6Tvx7ZV4c2U3QwI9SgsZXqX0J8vIxv-adApqkv8TZAJma5AVPaGPVhjNxmv-PVFYnKYZBniA5H6VxXrVr0m3g0un3PQy4ZfDFDbfhKYbWxeP5v-JQY4b94vh4lwSLVAN81b6hRU2xEKLg6pPDXJVIRZP2e_0Wd9bWJbI4BQBzMU27qaCtHyOilsUaoX-VyloD33SW5fS9WD7o_893eo7-6TYtQEzMwhBHbi1w-zGMYZ8LBoe6ogWq5UmPZAbvll35eaa2lswjtL02n9TBdd92CeUcZqlJ_JgjdDWri84xpSOvWWkQ8W7JfTg3ivspKBaERRKulz9h34mAMIPOrUD7_xaaQ5RaWaqq",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);

    setcomData(data);
  };

  const deleteData = async (id) => {
    const dltres = await fetch(
      `http://usman1206-001-site1.btempurl.com/api/Lables/${id}
`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer 1DKy2hsnj8KKWTeVaFWYmh-WmAfKqNCrQ3jZoheLbU8ps_qk6ZRlMV0cpn-sIXxK_GdZuEbLQlE23KggzmDfEYhiFDz9U-3l9zlYUbY-AYJcesk5iXzOE8IJsdQNSCF1HPthA09GSC8vfZJAijwKe5y3VeiMlNB6Tvx7ZV4c2U3QwI9SgsZXqX0J8vIxv-adApqkv8TZAJma5AVPaGPVhjNxmv-PVFYnKYZBniA5H6VxXrVr0m3g0un3PQy4ZfDFDbfhKYbWxeP5v-JQY4b94vh4lwSLVAN81b6hRU2xEKLg6pPDXJVIRZP2e_0Wd9bWJbI4BQBzMU27qaCtHyOilsUaoX-VyloD33SW5fS9WD7o_893eo7-6TYtQEzMwhBHbi1w-zGMYZ8LBoe6ogWq5UmPZAbvll35eaa2lswjtL02n9TBdd92CeUcZqlJ_JgjdDWri84xpSOvWWkQ8W7JfTg3ivspKBaERRKulz9h34mAMIPOrUD7_xaaQ5RaWaqq",
          "Content-Type": "application/json",
        },
      }
    );
    await dltres.json();
    // if (dltres.status === 422 || !deleteData) {
    //   alert("error");
    // } else {

    getData();
    // }
  };
  const updateData = async (id) => {
    if (inpVal.lable1 === "" || inpVal.lable_colour === "") {
      setisFormValidate(false);
    } else {
      handleClose();

      await fetch(`http://usman1206-001-site1.btempurl.com/api/Lables/${id}`, {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer 1DKy2hsnj8KKWTeVaFWYmh-WmAfKqNCrQ3jZoheLbU8ps_qk6ZRlMV0cpn-sIXxK_GdZuEbLQlE23KggzmDfEYhiFDz9U-3l9zlYUbY-AYJcesk5iXzOE8IJsdQNSCF1HPthA09GSC8vfZJAijwKe5y3VeiMlNB6Tvx7ZV4c2U3QwI9SgsZXqX0J8vIxv-adApqkv8TZAJma5AVPaGPVhjNxmv-PVFYnKYZBniA5H6VxXrVr0m3g0un3PQy4ZfDFDbfhKYbWxeP5v-JQY4b94vh4lwSLVAN81b6hRU2xEKLg6pPDXJVIRZP2e_0Wd9bWJbI4BQBzMU27qaCtHyOilsUaoX-VyloD33SW5fS9WD7o_893eo7-6TYtQEzMwhBHbi1w-zGMYZ8LBoe6ogWq5UmPZAbvll35eaa2lswjtL02n9TBdd92CeUcZqlJ_JgjdDWri84xpSOvWWkQ8W7JfTg3ivspKBaERRKulz9h34mAMIPOrUD7_xaaQ5RaWaqq",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inpVal),
      })
        .then((response) => response)
        .then((data) => {
          console.log(data);
          getData();
          setinpVal({
            lable1: "",
            lable_colour: "",
          });
        });

      // setupdateVal(data2);
      setCurrentId(null);
      updated();
    }
  };
  useEffect(() => {
    getData();
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div>
      {" "}
      {/* {loading == false ? (
        <> */}
          {/* //*Model */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>Add Labels</Modal.Title>
              <CloseIcon
                onClick={() => {
                  handleClose();
                  setinpVal({ lable1: "", lable_colour: "" });
                  setCurrentId(null);
                }}
              />
            </Modal.Header>
            <Modal.Body>
              <div className="field item form-group">
                <label className="col-form-label col-md-4 col-sm-4  label-align">
                  Label <span className="imp">*</span>
                </label>
                <div className="col-md-8 col-sm-8">
                  <input
                    className={`form-control ${
                      !isFormValidate && inpVal.lable1 === "" && "border_colr"
                    }`}
                    type="text"
                    placeholder=" Enter Issues"
                    value={inpVal.lable1}
                    onChange={(e) => {
                      setinpVal({
                        ...inpVal,
                        lable1: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="field item form-group">
                <label className="col-form-label col-md-4 col-sm-4  label-align">
                  Label Color <span className="imp">*</span>
                </label>
                <div className="col-md-8 col-sm-8">
                  <input
                    className={`form-control ${
                      !isFormValidate &&
                      inpVal.lable_colour === "" &&
                      "border_colr"
                    }`}
                    type="text"
                    placeholder=" Enter Color"
                    value={inpVal.lable_colour}
                    onChange={(e) => {
                      setinpVal({
                        ...inpVal,
                        lable_colour: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {currentId == null ? (
                <>
                  <Button
                    style={{ backgroundColor: "#1a5089" }}
                    className="btn-sm px-3 ModalButtonPositionAdjectment"
                    onClick={() => {
                      addData();
                    }}
                  >
                    Submit
                  </Button>
                </>
              ) : (
                <Button
                  variant="success"
                  onClick={() => {
                    updateData(inpVal.lable_id);
                  }}
                >
                  Update
                </Button>
              )}
            </Modal.Footer>
          </Modal>

          <div id="main_content">
            <div
              className="section-body"
              style={{ display: togle === 3 ? "block" : "none" }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="tab-content">
                          <div className="d-md-flex justify-content-between mb-4">
                            <ul className="nav nav-tabs b-none">
                              <li className="nav-item">
                                <Button
                                  sx={{ backgroundColor: "#1a5089" }}
                                  onClick={() => {
                                    handleShow();
                                  }}
                                >
                                  <i className="fa fa-plus"></i>
                                  Add Label
                                </Button>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade show active"
                            id="list"
                            role="tabpanel"
                          >
                            <div className="row clearfix">
                              <div className="col-lg-12">
                                <div className="table-responsive" id="users">
                                  <table className="table table-hover">
                                    <thead className="table-dark">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Color</th>
                                        <th scope="col">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {comData.map((ele, ind) => {
                                        return (
                                          <>
                                            <tr>
                                              <th scope="row">{ind + 1}</th>
                                              <td
                                              >
                                                {ele.lable1}
                                              </td>
                                              <td>{ele.lable_colour}</td>

                                              <td className="cuser">
                                                <DeleteOutlineIcon
                                                  sx={{ color: "red" }}
                                                  onClick={() => {
                                                    Swal.fire({
                                                      title: "Are you sure?",
                                                      text: "You won't be able to revert this company info!",
                                                      icon: "warning",
                                                      width: "27em",
                                                      allowOutsideClick: false,
                                                      showCancelButton: true,
                                                      confirmButtonColor:
                                                        "#000",
                                                      cancelButtonColor: "#d33",
                                                      confirmButtonText:
                                                        "Yes, delete it!",
                                                    }).then((result) => {
                                                      if (result.isConfirmed) {
                                                        deleteData(
                                                          ele.lable_id
                                                        );
                                                        Swal.fire({
                                                          width: "27em",
                                                          title: "Deleted!",
                                                          text: "Your file has been deleted.",
                                                          confirmButtonColor:
                                                            "#000",
                                                          icon: "success",
                                                          allowOutsideClick: false,
                                                        });
                                                      } else if (
                                                        result.dismiss ===
                                                        Swal.DismissReason
                                                          .cancel
                                                      ) {
                                                        Swal.fire({
                                                          width: "27em",
                                                          title: "Cancelled",
                                                          text: "Your data is safe :)",
                                                          icon: "error",
                                                          confirmButtonColor:
                                                            "#000",
                                                          allowOutsideClick: false,
                                                        });
                                                      }
                                                    });
                                                  }}
                                                />
                                                <EditIcon
                                                  style={{ color: "green" }}
                                                  onClick={() => {
                                                    handleShow();
                                                    setCurrentId(ele.lable_id);
                                                    setinpVal({
                                                      lable_id: ele.lable_id,
                                                      lable1: ele.lable1,
                                                      lable_colour:
                                                        ele.lable_colour,
                                                    });
                                                  }}
                                                />
                                              </td>
                                            </tr>
                                          </>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </>
      ) : (
        <Dots className="componentClass" text="" />
      )} */}
    </div>
  );
}

export default AddLabels;
