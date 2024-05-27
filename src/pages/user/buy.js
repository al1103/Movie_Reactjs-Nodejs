import React, { useEffect, useState, useRef } from "react";
import UserLayout from "../../layouts/UserLayout";
import { pointsPay as PointsPay, ApplyCode } from "../../servers/users";
import { getUser } from "../../servers/api";
import Loading from "../../components/Loading";

const Buy = () => {
  const right = useRef(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = localStorage.getItem("token");
  const [pointsPay, setPointsPay] = useState(0);
  const [code, setCode] = useState("");
  const [isIframeVisible, setIsIframeVisible] = useState(false); // New state variable

  const id = user._id;

  const fetchUser = async () => {
    try {
      const response = await getUser(id, token);
      setUser(response);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleApplyCode = async (e) => {
    e.preventDefault();
    if (code === "") {
      alert("Please enter code");
      return;
    }
    setLoading(true);

    try {
      const response = await ApplyCode(token, code);
      if (response.return_code === 1) {
        fetchUser();
        alert("Code applied successfully");
      } else {
        alert("Invalid code");
      }
    } catch (error) {
      console.error("Error applying code:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePointsPay = async (e) => {
    e.preventDefault();
    if (pointsPay < 1000) {
      alert("Minimum recharge amount is 1000 VND");
      return;
    }
    if (pointsPay > 1000000) {
      alert("Maximum recharge amount is 1,000,000 VND");
      return;
    }
    setLoading(true);

    const data = {
      pointsPay: pointsPay,
    };

    try {
      const response = await PointsPay(token, data);
      if (response.return_code === 1) {
        const iframe = document.createElement("iframe");
        iframe.src = response.order_url;
        iframe.width = "100%";
        iframe.height = "600";
        right.current.appendChild(iframe);
        setIsIframeVisible(true); // Set iframe visibility to true
      }
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserLayout>
      <div className="container member-container clearfix">
        <div className="member-right" ref={right}>
          {loading && <Loading />}
          {!loading && (
            <div>
              <h2 className="member-title">Recharge Points</h2>
              {!isIframeVisible && ( // Conditionally render the input forms
                <div>
                  <div className="member-tab-list">
                    <ul className="clearfix">
                      <li className="ewave-tab active" data-target="#member-buy-1">
                        Online Recharge
                      </li>
                      <li className="ewave-tab" data-target="#member-buy-2">
                        Recharge Card
                      </li>
                    </ul>
                  </div>
                  <form
                    className="form-horizontal center-block ewave-form ewave-tab-content mt-10"
                    id="member-buy-1"
                  >
                    <input type="hidden" name="flag" defaultValue="pay" />
                    <div className="form-group">
                      <label className="col-xs-4 col-sm-2 control-label">
                        Remaining Points
                      </label>
                      <div className="col-xs-8 col-sm-10">
                        <p className="form-control-static pt-xs-0 pt-sm-0">
                          <span className="text-red">{user.points}</span>
                        </p>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Recharge Amount</label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          name="price"
                          className="form-control"
                          onChange={(e) => setPointsPay(e.target.value)}
                          placeholder="Enter the amount to recharge"
                          autoComplete="off"
                        />
                        <span className="help-block">
                          The minimum recharge amount is 1000 VND, 1 VND can be exchanged for 1 point
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" />
                      <div className="col-sm-8">
                        <button
                          type="submit"
                          onClick={handlePointsPay}
                          className="btn member-btn btn-block btn-theme ewave-submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  <form
                    className="form-horizontal center-block ewave-form ewave-tab-content mt-10"
                    id="member-buy-2"
                  >
                    <input type="hidden" name="flag" defaultValue="pay" />
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Code</label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          name="code"
                          className="form-control"
                          onChange={(e) => setCode(e.target.value)}
                          placeholder="Enter code"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label" />
                      <div className="col-sm-8">
                        <button
                          type="submit"
                          onClick={handleApplyCode}
                          className="btn member-btn btn-block btn-theme ewave-submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </UserLayout>
  );
};

export default Buy;
