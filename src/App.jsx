import { useState } from "react";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import DownloadPage from "./components/pages/DownloadPage/DownloadPage";
import Glow from "./components/shared/Glow/Glow";


const App = () => {
  const [page,setPage] = useState("create")
  const handleChangePage = ()=>{
    console.log("Hello")
    if(page == "create"){
      setPage("download")
      return
    }
    setPage("create")
    console.log(page)

  }
  return (
<div className="container mx-auto px-4 py-8 max-w-6xl">
 <Navbar pageChange={handleChangePage} page={page}/>
 <Glow/>
 {
  page == 'create' && <Home/>
 }
 {
  page == 'download' && <DownloadPage/>
 }
</div>
  );
};

export default App;

