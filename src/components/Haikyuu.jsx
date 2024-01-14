import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "./Nav";

const Haikyuu = () => {
  return (
    <div>
      <Nav />
      <div className="row mt-5">
        <div className="col-5">
          <motion.div animate={{ y: 30 }} transition={{ duration: 0.4 }}>
            <h2
              className="text-white font-semibold"
              style={{ marginTop: "90px", marginLeft: "150px" }}
            >
              {" "}
              Haikyuu{" "}
            </h2>
          </motion.div>

          <motion.div animate={{ y: -30 }} transition={{ duration: 0.4 }}>
            <h5
              className="text-white font-semibold"
              style={{ marginTop: "90px", marginLeft: "150px" }}
            >
              {" "}
              Written By -{" "}
              <span className="text-danger fs-5">Haruichi Furudate</span>
            </h5>
          </motion.div>
        </div>

        <div className="col-7 border-start">
          <div className="d-flex gap-4" style={{ marginLeft: "60px" }}>
            <motion.div
              animate={{ opacity: 1, scale: 1, x: -30 }}
              transition={{ duration: 3, type: "spring", stiffness: 100 }}
            >
              <img
                className="card shadow"
                style={{ height: "300px", width: "230px" }}
                src="/img/haikyuu.jpg"
                alt=""
              />
            </motion.div>
            <motion.div
              animate={{ opacity: 1, scale: 1, x: -10 }}
              transition={{ duration: 3, type: "spring", stiffness: 100 }}
            >
              <img
                className="card shadow mt-4"
                style={{ height: "240px", width: "150px" }}
                src="/img/jujutsu.jpg"
                alt=""
              />
            </motion.div>
            <motion.div
              animate={{ opacity: 1, scale: 1, x: -5 }}
              transition={{ duration: 3, type: "spring", stiffness: 100 }}
            >
              <img
                className="card shadow mt-4"
                style={{ height: "240px", width: "150px" }}
                src="/img/kamisama-kiss.jpg"
                alt=""
              />
            </motion.div>
          </div>

          <NavLink to="/jujutsu">
            <button type="button" className="btn btn-danger mt-11 ml-7">
              {" "}
              Next
            </button>
          </NavLink>
          <NavLink to="/demon">
            <button type="button" className="btn btn-danger mt-11 ml-2">
              {" "}
              Prev
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Haikyuu;
