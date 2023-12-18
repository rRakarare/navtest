import MainBar from "./Navbar/MainBar";
import Topbar from "./Navbar/Topbar";
import "./App.css";
import { useState } from "react";

const NavWrap = ({ children }) => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex h-screen w-full overflow-hidden relative">
        <MainBar open={open}  />
        <div className="flex flex-col w-full h-screen">
        <Topbar setOpen={setOpen}  />
          <div className="bg-purple-800 h-full overflow-auto flex flex-col">
          {children}
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <NavWrap>
      <div>asdqwe</div>
      <div className="overflow-auto h-full">
      <div className="bg-green-800 h-[4000px]">
            asdqwe123 dasdsadwq wqe wqe wq erwq sdf dasf gd ggdf fgfg ddf gfgd  gfdsdf sfd  fdgs fdgf gd fgd gfd fdgfd gfd g gfds gfdsgd f gdfgfd d gfgd f dgfsfd gsdfs g gfsd
          </div>
      </div>
      </NavWrap>
    </>
  );
}

export default App;
