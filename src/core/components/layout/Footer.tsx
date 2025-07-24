import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import Logo from "@assets/w-logo.png";

const Footer = () => {    
    return (
        <footer className="bg-[--main-color] text-white py-12">
            <div className="obj-width">
                <div className="flex items-center text-start justify-between flex-wrap">
                    <div>
                        <img src={Logo} className="w-44 mb-4" />
                        <p>Search your desired job.</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="#"><IconBrandFacebook className="w-8 h-8" stroke={2} /></a>
                        <a href="#"><IconBrandTwitter className="w-8 h-8" stroke={2} /></a>
                        <a href="#"><IconBrandInstagram className="w-8 h-8" stroke={2} /></a>
                        <a href="#"><IconBrandGithub className="w-8 h-8" stroke={2} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
