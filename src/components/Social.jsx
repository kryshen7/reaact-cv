import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const icons = {
    LinkedIn: FaLinkedin,
    Instagram: FaInstagram,
    Twitter: FaTwitter
};

function Social({ links }) {
    return (
        <footer className="social">
            {links.map((item, index) => {
                const Icon = icons[item.name];
                return (
                    <a key={index} href={item.url} target="_blank">
                        <Icon size={30} />
                    </a>
                );
            })}
        </footer>
    );
}

export default Social;
