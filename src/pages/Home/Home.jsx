import React, { useEffect, useState } from "react";
import Banner from "../../component/Banner/Banner";
import CategoryList from "../../component/CategoryList/CategoryList";
import UseDontation from "../../Hoook/UseDontation";

const Home = () => {
  const [state, setState] = useState(" ");

  const { data, loading } = UseDontation();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(data);
  }, [data]);
  //console.log(filterData);
  const handleSearch = () => {
    // if(state.trim() !=""){

    // sdfsdfsdf

    if (state.trim() !== "") {
      const filteredData = data.filter((item) =>
        item.category.toLowerCase().includes(state.toLowerCase())
      );
      setFilterData(filteredData)
    }else{
      setFilterData(data)
    }
  };
  console.log(filterData);
  return (
    <div className="">
      <Banner setState={setState} handleSearch={handleSearch} state={state}></Banner>
      <CategoryList filteredData={filterData}></CategoryList>
    </div>
  );
};

export default Home;
