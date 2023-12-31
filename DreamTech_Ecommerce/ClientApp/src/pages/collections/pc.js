import React, {useEffect, useState} from "react";
import CardItem from "../../components/Home/CardItem";
import ModalHangPC from "../../components/collections/pc/ModalHangPC";
import ModalGiaPC from "../../components/collections/pc/ModalGiaPC";
import ModalLocPC from "../../components/collections/pc/ModalLocPC";
import { getAllPC } from "../../redux/actions/pcAction";
import { useDispatch, useSelector } from "react-redux";
import { sapxep } from "../../redux/actions/filterAction";
const PCPage = () => {

  // console.log(Sapxep, Hang, Gia)
  const [sortBy, setSortBy] = useState("featured"); //State cho thanh sắp xếp
  const [showMenuItem, setShowMenuItem] = useState(false); // 
  const [showHang, setShowHang] = useState(false); 
  const [showGia, setShowGia] = useState(false); 
  const [showLoc, setShowLoc] = useState(false); 

  
  const details = ["i7 9700", "GTX 1660", "32GB RAM", "1TB HDD"]
  const handleSortChange = (value) => {
     setSortBy(value);
  };
  useEffect(()=>{
    dispatch(sapxep(sortBy))
  },[sortBy])
  const [pcdata, setPCData] = useState([]);
  const {pc} = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllPC());
  },[ dispatch])
  // Lọc data
  const {Sapxep, Hang, Gia } = useSelector(state => state.filter);

 

  useEffect(()=>{
    let datasort = [...pc]
    if (Sapxep === "ascending") {
      datasort.sort((a, b) => a.salePrice - b.salePrice);
    }else if (Sapxep === "descending"){
      datasort.sort((a, b) => b.salePrice - a.salePrice);
    }
    if( Gia.length > 0){
       datasort = datasort.filter(item => item.salePrice >= Gia[0] && item.salePrice <= Gia[1])
    } 
    if (Hang.length > 0) {
      datasort = datasort.filter(item => Hang.includes(item.brand))
    }

    setPCData(datasort)
  },[pc, Sapxep, Gia, Hang])
  
  return (
    <div className="container mb-4">
      <div className="product_link mt-4 flex gap-3 align-items-center">
        <div className="product_link_home align-items-center">
        <i className="fa-solid fa-house mr-2 align-items-center"></i>
          <a href="#">Trang chủ</a>
        </div>
        <div className="product_link_laptop align-items-center">/</div>
        <div className="product_link_laptop align-items-center">PC</div>
      </div>
      <div className="row my-4">
        <img
          className="w-100 p-0"
          src="https://file.hstatic.net/200000722513/file/pc_header_0a49b02cdad8445fa7202d20da421d01.png"
         />
      </div>
      <div className="row main-content ">
        {/* Bộ lọc */}
        <div className="product_filter flex gap-3 mt-3 ml-3">
            {/* Bộ lọc chính */}
            <div className="flex justify-content-center align-items-center gap-2 product_filter_boloc">
              <i class="fa-solid fa-filter" onClick={()=> setShowLoc(!showLoc)}></i>
              <div onClick={()=> setShowLoc(!showLoc)}>Bộ lọc</div>
              {
              showLoc && <ModalLocPC showLoc={showLoc} setShowLoc={setShowLoc}/>
              }
            </div>
            {/* Hãng */}
            <div className="flex justify-content-center align-items-center gap-2 product_filter_hang"
           
            >
              <div  onClick={() => setShowHang(!showHang)}>Hãng</div>
              <i class="fa-solid fa-caret-down"  onClick={() => setShowHang(!showHang)}></i>
            {
              showHang && <ModalHangPC setShowHang={setShowHang}/>
            }
            </div>
           
            {/* Thanh kéo tiền */}
            <div className="flex justify-content-center align-items-center gap-2 product_filter_gia">
              <div onClick={()=> setShowGia(!showGia)}>Giá</div>
              <i class="fa-solid fa-caret-down" onClick={()=> setShowGia(!showGia)}></i>
              {
              showGia && <ModalGiaPC/>
            }
            </div>
        </div>
        {/* Sắp xếp theo */}
        <div className="product_arrange ">
        <div className="product_arrange_dropdown my-2" onClick={() => setShowMenuItem(!showMenuItem)}>
            <i className="fa-solid fa-arrow-down-wide-short mr-2"></i>
            <h5 className="mr-2">Xếp theo:</h5>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="sortDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
               
              >
                {sortBy === "featured" ? "Nổi bật" : sortBy === "ascending" ? "Giá tăng dần" : "Giá giảm dần"}
              </button>
             {
              showMenuItem &&  <div className="dropdown-menu" aria-labelledby="sortDropdown">
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("featured")}
                >
                  Nổi bật
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("ascending")}
                >
                  Giá tăng dần
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("descending")}
                >
                  Giá giảm dần
                </button>
              </div>
             }
            </div>
          </div>
        </div>
        {/* Sản phẩm */}
        <div className="list-product my-2">
         {pcdata.map(item=>{
          return(
            <CardItem
            item={item} details={details}
          />
          )
         })}
        </div>
         
      </div>
       {/* Xem thêm */}
      {/* <div className="flex justify-content-center my-4">
            <button className="btn btn-outline-secondary w-25 xemthem_btn">Xem thêm</button>
         </div> */}
    </div>
  );
};

export default PCPage;
