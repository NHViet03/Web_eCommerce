import React from "react";
import Sidebar from "../../components/MyAccount/Sidebar";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDataAPIWithAuth } from "../../utils/fetchData";

function OrdersHistory() {
  const [orderItems, setOrderItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const token = useSelector((state) => state.auth.token);
  const id = useSelector((state) => state.auth.user?.id);

  const fetchUserInfoData = async () => {
    try {
      const res = await getDataAPIWithAuth(
        `User/GetCustomerDetail/${id}`,
        token
      );
      if (res.data.orders) {
        setOrderItems(res.data.orders);
      } else {
        console.error("No data received from the API");
      }
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  };

  const getOrderStatusLabel = (status) => {
    switch (status) {
      case 0:
        return "Đang vận chuyển";
      case 1:
        return "Đã hủy";
      case 2:
        return "Đã vận chuyển";
      default:
        return "Mới";
    }
  };

  useEffect(() => {
    fetchUserInfoData();
  }, [id, token]);

  const filteredOrders = orderItems.filter(
    (order) =>
      order.id.toString().includes(searchTerm) &&
      (selectedStatus === "all" ||
        order.orderStatus.toString() === selectedStatus)
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  return (
    <div>
      <div className="wrapbox-content-account">
        <div className="container-fluid max-w-screen-xl mx-auto px-2.5 pt-4 pb-2.5 pt-0 w-full block">
          <div className="row -mr-2 -ml-2 flex flex-wrap border-box text-left">
            <Sidebar activePage="orders-history" />
            <div className="order-2 mb-6 px-2 grow-0 shrink-0 w-3/4 relative p-0 box-border block text-left colright">
              <div className="right-main tab-content-container h-full m-0 p-0 text-left bg-white rounded box-border block">
                <div
                  class="right-main-box tab-content customers-orders-history"
                  id="orders-history"
                >
                  <div class="box-heading py-4 px-6 block">
                    <h2 className="text-2xl font-semibold">Quản lý đơn hàng</h2>
                  </div>
                  <div class="box-info-account pt-4 block">
                    <div class="history-status block">
                      <div class="status-list items-center justify-between flex">
                        <a
                          href="javascript:void(0);"
                          className={`status-item status-item px-1 pt-2 w-auto text-center relative pb-2 ${
                            selectedStatus === "all" ? "text-red-600" : ""
                          }`}
                          data-stt="all"
                          onClick={() => setSelectedStatus("all")}
                        >
                          <span class="text font-semibold inline-block text-center ml-8 pb-2">
                            TẤT CẢ
                          </span>
                          <span class="count"></span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          className={`status-item status-item px-1 pt-2 w-auto text-center relative pb-2 ${
                            selectedStatus === "0" ? "text-red-600" : ""
                          }`}
                          data-stt="processing"
                          onClick={() => setSelectedStatus("0")}
                        >
                          <span class="text font-semibold inline-block text-center">
                            ĐANG VẬN CHUYỂN
                          </span>
                          <span class="count d-none"></span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          className={`status-item status-item px-1 pt-2 w-auto text-center relative pb-2 ${
                            selectedStatus === "2" ? "text-red-600" : ""
                          }`}
                          data-stt="delivering"
                          onClick={() => setSelectedStatus("2")}
                        >
                          <span class="text font-semibold inline-block text-center">
                            HOÀN THÀNH
                          </span>
                          <span class="count d-none"></span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          className={`status-item status-item px-1 pt-2 w-auto text-center relative pb-2 ${
                            selectedStatus === "1" ? "text-red-600" : ""
                          }`}
                          data-stt="cancel"
                          onClick={() => setSelectedStatus("1")}
                        >
                          <span class="text font-semibold inline-block text-center mr-8">
                            ĐÃ HỦY
                          </span>
                          <span class="count d-none"></span>
                        </a>
                      </div>
                    </div>
                    <div class="history-search py-2 bgcolor-app-gray block">
                      <div class="box-history-search relative flex justify-between box-border bg-white rounded border">
                        <svg
                          className="absolute inset-y-0 left-4 m-auto"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                            stroke="#6D6E72"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M14.0001 13.9996L11.1001 11.0996"
                            stroke="#6D6E72"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <input
                          id="history-search"
                          class="input-search pl-10 pr-4 w-full h-10 bg-white outline-none rounded font-medium"
                          name="q"
                          maxlength="40"
                          autocomplete="off"
                          type="text"
                          size="20"
                          placeholder="Tìm đơn hàng theo Mã đơn hàng"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span class="line flex items-center w-0.5 h-5 bgcolor-app-gray-nd m-auto"></span>
                        <button
                          className="px-4 text-base whitespace-nowrap font-semibold color-app-blue-nd"
                          id="btn-history-search"
                        >
                          Tìm đơn hàng
                        </button>
                      </div>
                    </div>
                    <div className="history-table bg-white" data-table="all">
                      {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                          <div
                            key={order.id}
                            className="history-table__item"
                            data-search={`#${order.id}`}
                            data-stt="new"
                          >
                            <div className="history-table__item-head">
                              <div className="stt-order">
                                <span>
                                  {getOrderStatusLabel(order.orderStatus)}
                                </span>
                              </div>
                              <div className="code-order">#{order.id}</div>
                            </div>
                            <div className="history-table__item-body">
                              {order.orderDetails.map((orderDetail) => (
                                <div
                                  key={orderDetail.id}
                                  className="history-table__item-line"
                                >
                                  <div className="left">
                                    <div className="img-line">
                                      <img
                                        src={
                                          orderDetail.product.productImages[0]
                                            .imageUrl
                                        }
                                        alt="Product Image"
                                      />
                                      <div className="qty-line">
                                        x{orderDetail.qty}
                                      </div>
                                    </div>
                                    <div className="info-line">
                                      <div className="name-line">
                                        {orderDetail.product.name}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="right">
                                    <div className="text-right">
                                      <div className="price-line">
                                        {formatPrice(orderDetail.product.price)}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="history-table__item-foot">
                              <div className="total-order text-right">
                                <span className="font-medium text-emerald-500">
                                  {order.payments.status}
                                </span>
                                <br />
                                <span>
                                  Hình thức thanh toán: Thanh toán khi nhận hàng
                                </span>
                                <br />
                                <span>
                                  Tổng tiền: {formatPrice(order.totalAmount)}
                                </span>
                              </div>
                              <div className="view-order text-right">
                                <Link
                                  to={`/account/view-order-detail/${order.id}`}
                                  title="Xem chi tiết"
                                >
                                  Xem chi tiết
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div class="data-account__empty text-center w-full mt-8 mb-6 box-border block">
                          <div class="icon-empty box-border block text-center align-middle text-center">
                            <svg
                              className="block m-auto pr-2"
                              width="132"
                              height="170"
                              viewBox="0 0 132 170"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_6133_13905)">
                                <path
                                  d="M125.486 120.371H113.585V91.6562H132V113.845C132 117.451 129.086 120.371 125.486 120.371Z"
                                  fill="#A1AAAF"
                                ></path>
                                <path
                                  d="M99.3294 167.226C95.6392 170.922 89.6482 170.922 85.949 167.226L50.2828 131.497C46.5926 127.801 46.5926 121.799 50.2828 118.094C53.973 114.397 59.964 114.397 63.6633 118.094L99.3294 153.822C103.029 157.528 103.029 163.529 99.3294 167.226Z"
                                  fill="#E1E4E6"
                                ></path>
                                <path
                                  d="M128.553 117.208C126.649 117.208 125.107 115.662 125.107 113.755V91.9459C125.107 91.8465 125.125 91.7561 125.134 91.6567H125.107V6.06465C125.107 2.72051 122.4 0 119.052 0H42.7036C39.3652 0 36.6494 2.71147 36.6494 6.06465V114.315C36.6494 117.66 39.3562 120.38 42.7036 120.38H113.585H125.107H125.486C129.086 120.38 132 117.461 132 113.855V113.764C132 115.662 130.457 117.208 128.553 117.208Z"
                                  fill="#E1E4E6"
                                ></path>
                                <path
                                  d="M40.1233 148.932C62.2828 148.932 80.2466 130.937 80.2466 108.739C80.2466 86.5409 62.2828 68.5459 40.1233 68.5459C17.9638 68.5459 0 86.5409 0 108.739C0 130.937 17.9638 148.932 40.1233 148.932Z"
                                  fill="#CBD1D6"
                                ></path>
                                <path
                                  d="M40.1235 136.577C55.4712 136.577 67.9129 124.113 67.9129 108.739C67.9129 93.3647 55.4712 80.9014 40.1235 80.9014C24.7758 80.9014 12.334 93.3647 12.334 108.739C12.334 124.113 24.7758 136.577 40.1235 136.577Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M51.6001 97.2418C52.9084 98.5524 52.9084 100.676 51.6001 101.987L33.3836 120.226C32.0753 121.537 29.955 121.537 28.6467 120.226C27.3385 118.916 27.3385 116.792 28.6467 115.481L46.8633 97.2328C48.1715 95.9313 50.2918 95.9313 51.6001 97.2418Z"
                                  fill="#F56F65"
                                ></path>
                                <path
                                  d="M51.6001 120.226C50.2918 121.537 48.1715 121.537 46.8633 120.226L28.6467 101.978C27.3385 100.667 27.3385 98.5435 28.6467 97.2329C29.955 95.9224 32.0753 95.9224 33.3836 97.2329L51.6001 115.481C52.9084 116.792 52.9084 118.925 51.6001 120.226Z"
                                  fill="#F56F65"
                                ></path>
                                <path
                                  d="M55.9488 25.7136C59.7112 25.7136 63.3112 22.4056 63.1398 18.5101C62.9684 14.6056 59.9819 11.3066 55.9488 11.3066C52.1864 11.3066 48.5864 14.6146 48.7578 18.5101C48.9293 22.4146 51.9157 25.7136 55.9488 25.7136Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M80.1925 25.7136C83.9549 25.7136 87.5549 22.4056 87.3834 18.5101C87.212 14.6056 84.2255 11.3066 80.1925 11.3066C76.4301 11.3066 72.8301 14.6146 73.0015 18.5101C73.1819 22.4146 76.1684 25.7136 80.1925 25.7136Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M104.445 25.7136C108.207 25.7136 111.807 22.4056 111.636 18.5101C111.464 14.6056 108.478 11.3066 104.445 11.3066C100.683 11.3066 97.0825 14.6146 97.2539 18.5101C97.4344 22.4146 100.421 25.7136 104.445 25.7136Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M108.28 44.9557H51.1307C49.678 44.9557 48.4961 43.7717 48.4961 42.3165V40.8071C48.4961 39.352 49.678 38.168 51.1307 38.168H108.28C109.732 38.168 110.914 39.352 110.914 40.8071V42.3165C110.914 43.7717 109.732 44.9557 108.28 44.9557Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M108.343 61.6042H51.0585C49.642 61.6042 48.4961 60.4563 48.4961 59.0373V57.7358C48.4961 56.3168 49.642 55.1689 51.0585 55.1689H108.343C109.759 55.1689 110.905 56.3168 110.905 57.7358V59.0373C110.914 60.4473 109.759 61.6042 108.343 61.6042Z"
                                  fill="white"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_6133_13905">
                                  <rect
                                    width="132"
                                    height="170"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <p class="alert-empty text-base my-4 font-semibold mb-4">
                            Quý khách không có đơn hàng.
                          </p>
                          <NavLink to="/">
                            <button className="button relative px-7 py-2 font-semibold text-white bgcolor-app-primary rounded">
                              TIẾP TỤC MUA HÀNG
                            </button>
                          </NavLink>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersHistory;
