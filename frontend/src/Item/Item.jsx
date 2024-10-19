import { useState } from "react";

export const Item = (itemId) => {

  const [itemData, setItemData] = useState();

  useEffect(() => {
    axiosInstance({
      method: "GET",
      url: "https://192.168.0.17:8080/item?item_id="+{itemId},
    }).then((res) => {
      setItemData(res.data.itemData);
    }).catch((error) => {
        console.log(error.code);
    });
  },[]);

  return (
    <>
      <h1>商品ページ</h1>
    </>
  );
};
