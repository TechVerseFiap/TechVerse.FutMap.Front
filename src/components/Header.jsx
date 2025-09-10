import logo from "/Logo-Horizontal-Dark.png"   
import NotificationIcon from "./icons/NotificationIcon";
import SearchIcon from "./icons/SearchIcon";


export default function Header({isSearchBarActive = true }) {
  return (
    <header className="flex bg-white justify-between  items-center-safe rounded-b-[20px] p-5">
        <img src={logo} alt="Logo do futmap" className="size-1/5" />
        <div className={` 
            ${
                isSearchBarActive
                    ? "flex justify-between items-center-safe w-[15%]"
                    : ""
            }`
        }>
            {
                isSearchBarActive && (
                    <>
                       <SearchIcon className="w-5 h-5"/>
                        <span className="bg-gray-300 w-0.5 h-[30px]"></span>
                    </>
                )   
            }
            <NotificationIcon className="w-5 h-5"/>
        </div>
    </header>
  );
}                   