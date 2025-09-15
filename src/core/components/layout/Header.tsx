import { useState } from "react";
import { IconMenuDeep } from "@tabler/icons-react";
import Logo from "@assets/w-logo.png";
import "./header.css";

type MenuProps = {
    label: string;
    url: string;
}

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    const menu: MenuProps[] = [
        { label: "Home", url: "/" },
        { label: "Browse Jobs", url: "/" },
        { label: "Contact", url: "/" },
    ];
    
    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }
    
    
    return (
        <header className="bg-[--main-color] fixed top-0 right-0 w-full z-[999]">
            <div className="obj-width flex justify-between items-center h-[120px]">
                <a href="/">
                    <img src={Logo} className="w-44" />
                </a>

                <ul className={`min-[700px]:flex justify-end items-center list-none menu-mobile ${toggleMenu && "max-[699px]:right-[10px] max-[699px]:opacity-100"}`}>
                    {menu.map((item, index) => (
                        <li 
                            key={index} 
                            className="text-white max-[699px]:text-[--main-color] ml-[40px] max-[699px]:p-4 min-[715px]:text-lg font-medium"
                        >
                            <a href={item.url}>{item.label}</a>
                        </li>
                        
                    ))}
                </ul>

                <IconMenuDeep 
                    onClick={handleToggleMenu}
                    className="text-white hidden max-[699px]:block max-[699px]:cursor-pointer max-[699px]:w-16 max-[699px]:h-16" 
                />
            </div>
        </header>
    );
};

export default Header;
