import {
  faCircleInfo,
  faHome,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div className="flex justify-between space-x-4">
        <Link href="/TicketPage/help">
          <FontAwesomeIcon icon={faCircleInfo} className="icon" />
        </Link>
        <p className="text-default-text">zuhayrdanish2@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
