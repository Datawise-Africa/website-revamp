import {useState, useEffect, useRef} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import datawise_logo from "/assets/datawise-logo-dark.png"
import { navigation } from "../../constants";

const Header = () => {
    const [openNavigation, setOpenNavigation] = useState(false);
    const [isNavItemDropdown, setIsNavItemDropdown] = useState(false);
    const [navUrl, setNavUrl] = useState("");
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const pathname = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsNavItemDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const togggleNavigation = () => {
        setOpenNavigation(!openNavigation);
    }

    const handleNavItemClick = (e, item) => {
        e.preventDefault();

        if (item.hasDropdown) {
            setIsNavItemDropdown(!isNavItemDropdown)
        } else {
            navigate(item.url);
            if (openNavigation) {
                togggleNavigation();
            }
        }
    }

    const handleExploreDatasetsClick = () => {
        window.open('http://datalab.datawiseafrica.com', '_blank', 'noopener,noreferrer');
      };
  return (
    <div className='bg-[#0F2542] text-[#E5E7EB]'>
      <div className={`fixed top-0 left-0 w-full z-50 lg:backdrop-blur-sm ${openNavigation ? "bg-[#0F2542]" : "bg-[#0F2542]/90 backdrop-blur-sm"}`}>
        <div className='flex items-center px-5 lg:px-15 xl:px-20 max-lg:py-4'>
            <Link to='/' className='w-[12rem] xl:mr-12'>
                <img src={datawise_logo} alt="Datawise logo" loading="lazy" width={180} height={20} />
            </Link>

            <nav className={`${
                openNavigation ? "flex": "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#0F2542] lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row' ref={dropdownRef}>
                  {navigation.map((item) => {
                    return (
                        <div key={item.id} className='relative group'>
                            <Link 
                                to={item.url} 
                                className={`text-white px-4 py-2 ${
                                    item.url === pathname.pathname? "text-white" : "text-gray-400 hover:text-gray-300"
                                } group-hover:text-gray-300`}
                                onClick={(e) => handleNavItemClick(e, item)}>
                                {item.title}
                            </Link>
                        </div>
                    )
                  })}
                </div>
            </nav>
            <button onClick={handleExploreDatasetsClick} className='flex w-[12rem] xl:mr-12 bg-[#26A37E] text-[#E5E7EB] px-4 py-2 font-medium rounded-lg'>
                Explore Datasets
                <span className='ml-1 '>→</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Header
