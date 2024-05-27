import React, { useEffect, useState } from "react";
import { getUser } from "../../servers/api";
import { UpdateService } from "../../servers/users";
import { ToastContainer, toast } from "react-toastify";
import UserLayout from "../../layouts/UserLayout";
import Loading from "../../components/Loading";

const CovertDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1; // Month index starts from 0, so add 1
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

const Upgrade = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = JSON.parse(localStorage.getItem("user"))._id;
    const getUserData = async () => {
      try {
        const userData = await getUser(id, token);
        setUser(userData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, []);
  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  const Upgrade = async ({
    subscriptionPlan,
    subscriptionExpiration,
    points,
  }) => {
    const data = {
      subscriptionPlan,
      subscriptionExpiration,
      points,
    };

    const token = localStorage.getItem("token");
    try {
      const res = await UpdateService(token, data);
      if (res.status === "success") {
        toast.success("Nâng cấp thành công");
      } else {
        toast.error("Nâng cấp thất bại");
      }
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi nâng cấp");
    }

    const id = JSON.parse(localStorage.getItem("user"))._id;
    const updatedUserData = await getUser(id, token);
    setUser(updatedUserData);
  };
  if (user.subscriptionExpiration === null) {
    user.subscriptionExpiration = "Không có";
  } else {
    user.subscriptionExpiration = new Date(
      user.subscriptionExpiration
    ).toLocaleDateString();
  }

  return (
    <UserLayout>
      <div className="container member-container clearfix">
        <div className="member-right">
          <h2 className="member-title">Upgrade Service Package</h2>
          <form className="form-horizontal center-block">
            <div className="form-group">
              <label className="col-xs-4 col-sm-2 control-label">
                Current Membership Group
              </label>
              <div className="col-xs-8 col-sm-6">
                <p className="form-control-static pt-xs-0">
                  {user.package[0]?.subscriptionPlan}
                </p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4 col-sm-2 control-label">
                Remaining Points
              </label>
              <div className="col-xs-8 col-sm-6">
                <p className="form-control-static pt-xs-0">{user.points}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4 col-sm-2 control-label">
                Expiration Date
              </label>
              <div className="col-xs-8 col-sm-6">
                <p className="form-control-static pt-xs-0">
                  {CovertDate(user.package[0].subscriptionExpiration)}
                </p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4 col-sm-2 control-label" />
              <div className="col-xs-8 col-sm-6">
                <p className="form-control-static pt-xs-0">
                  <span className="text-red">
                    Click on the membership group and the duration you want to
                    purchase to upgrade
                  </span>
                </p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Upgrade Package</label>
              <div className="col-sm-10">
                <ul className="row member-upgrade">
                  <li className="col-xs-6 col-md-3 col-lg-6 col-xl-3">
                    <div
                      className="member-upgrade-item ewave-confirm btn member-btn btn-block btn-primary"
                      onClick={() => {
                        Upgrade({
                          subscriptionPlan: "Premium",
                          subscriptionExpiration: "7",
                        });
                      }}
                    >
                      Weekly: 7 points
                    </div>
                  </li>
                  <li className="col-xs-6 col-md-3 col-lg-6 col-xl-3">
                    <div
                      onClick={() => {
                        Upgrade({
                          subscriptionPlan: "Premium",
                          subscriptionExpiration: "30",
                        });
                      }}
                      className="member-upgrade-item ewave-confirm btn member-btn btn-block btn-danger"
                      data-tip="Confirm upgrade to 【{$vo.group_name}】? Costs 【{$vo.group_points_month}】 points"
                    >
                      Monthly: 30 points
                    </div>
                  </li>
                  <li className="col-xs-6 col-md-3 col-lg-6 col-xl-3">
                    <div
                      className="member-upgrade-item ewave-confirm btn member-btn btn-block btn-success"
                      onClick={() => {
                        Upgrade({
                          subscriptionPlan: "Premium",
                          subscriptionExpiration: "365",
                        });
                      }}
                    >
                      Yearly: 365 points
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </UserLayout>
  );
};

export default Upgrade;
