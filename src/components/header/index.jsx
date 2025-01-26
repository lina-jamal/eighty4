import {
  Head,
  Menu,
  Nav,
  Title,
  HeadLinks,
  Ul,
  Search,
  MenuOption,
} from "./theme";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { IconButton } from "@mui/material";
function Header() {
  return (
    <Nav>
      <Menu>
        {/* <Ul>
          <Link to="/">Shop</Link>
          <Link to="/">Promo</Link>
          <Link to="/">About</Link>
          <Link to="/">Blog</Link>
        </Ul> */}

        <div className="tilte">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/">
            <span>Dealerz.</span>
          </Link>
        </div>

        <Search>
          <input type="search" placeholder="Search what you need" />
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.707 19.293L17.025 15.611C18.4651 13.8095 19.1607 11.5249 18.9688 9.22654C18.777 6.92817 17.7123 4.79051 15.9935 3.25267C14.2746 1.71483 12.0321 0.893565 9.72666 0.957581C7.42118 1.0216 5.22773 1.96603 3.59688 3.59688C1.96603 5.22773 1.0216 7.42118 0.957581 9.72666C0.893565 12.0321 1.71483 14.2746 3.25267 15.9935C4.79051 17.7123 6.92817 18.777 9.22654 18.9688C11.5249 19.1607 13.8095 18.4651 15.611 17.025L19.293 20.707L20.707 19.293ZM10 17C8.61557 17 7.26219 16.5895 6.11104 15.8203C4.9599 15.0512 4.06269 13.9579 3.53288 12.6788C3.00307 11.3997 2.86444 9.99227 3.13454 8.6344C3.40464 7.27654 4.07132 6.02926 5.05029 5.05029C6.02926 4.07132 7.27654 3.40464 8.6344 3.13454C9.99227 2.86444 11.3997 3.00307 12.6788 3.53288C13.9579 4.06269 15.0512 4.9599 15.8203 6.11104C16.5895 7.26219 17 8.61557 17 10C16.9979 11.8559 16.2597 13.6351 14.9474 14.9474C13.6351 16.2597 11.8559 16.9979 10 17Z"
              fill="#9A9AB0"
            />
          </svg>
        </Search>
        <Ul>
          <Link to="/">Home</Link>
          <Link to="/">Tours</Link>
          <Link to="/">Air Tickets</Link>
          <Link to="/">Tips</Link>
          <Link to="/">Blogs</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </Ul>
      </Menu>

      {/* <p>Get started your exciting journey with us.
</p> */}
    </Nav>
  );
}
export default Header;

/*  <MenuOption>
          <IconButton size="large">
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0001 25.7609L2.6868 14.4476C1.18638 12.9473 0.343387 10.9125 0.343262 8.79072C0.343137 6.66893 1.18589 4.634 2.68613 3.13358C4.18638 1.63316 6.22121 0.790164 8.343 0.790039C10.4648 0.789914 12.4997 1.63267 14.0001 3.13291C15.5013 1.63437 17.5357 0.792711 19.6568 0.792711C21.7779 0.792711 23.8123 1.63437 25.3135 3.13291V3.13291C26.8114 4.6344 27.6526 6.66869 27.6526 8.78958C27.6526 10.9105 26.8114 12.9448 25.3135 14.4462L14.0001 25.7609ZM8.3428 3.45691C7.28786 3.45687 6.2566 3.76969 5.37946 4.35581C4.50232 4.94192 3.81871 5.775 3.41508 6.74968C3.01145 7.72435 2.90594 8.79683 3.1119 9.83147C3.31786 10.8661 3.82603 11.8164 4.57213 12.5622L14.0001 21.9902L23.4281 12.5622C23.9697 12.0328 24.3922 11.3941 24.6677 10.6886C24.9431 9.98314 25.0652 9.22709 25.0257 8.47078C24.9862 7.71447 24.7861 6.97524 24.4387 6.30228C24.0913 5.62932 23.6046 5.03807 23.0109 4.56786C22.4172 4.09766 21.7301 3.75929 20.9955 3.57527C20.2609 3.39126 19.4954 3.36581 18.7502 3.50063C18.005 3.63544 17.297 3.92743 16.6734 4.35716C16.0497 4.7869 15.5248 5.34451 15.1335 5.99291L14.0001 7.82224L12.8668 5.99291C12.399 5.21296 11.7353 4.56885 10.9418 4.12447C10.1482 3.6801 9.25227 3.45089 8.3428 3.45958V3.45691Z"
                fill="black"
              />
            </svg>
          </IconButton>
          <IconButton size="large">
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

<path
                d="M18.6667 17.3333H7.184L7.628 16H21.0053L24.4347 4H4.85867L3.65867 0H0V2.66667H1.67467L5.268 14.6467L4.324 17.4787C3.60214 17.6686 2.94796 18.057 2.43567 18.5999C1.92339 19.1427 1.57351 19.8183 1.42572 20.55C1.27794 21.2816 1.33818 22.04 1.59959 22.7392C1.86101 23.4383 2.31314 24.0502 2.9047 24.5054C3.49625 24.9606 4.20355 25.2409 4.94633 25.3145C5.68911 25.3881 6.43765 25.252 7.10702 24.9217C7.77639 24.5914 8.33979 24.0801 8.73331 23.4459C9.12682 22.8116 9.33469 22.0798 9.33333 21.3333C9.32891 20.8781 9.24592 20.427 9.088 20H14.912C14.7541 20.427 14.6711 20.8781 14.6667 21.3333C14.6667 22.1245 14.9013 22.8978 15.3408 23.5556C15.7803 24.2134 16.405 24.7261 17.1359 25.0289C17.8668 25.3316 18.6711 25.4108 19.447 25.2565C20.223 25.1021 20.9357 24.7212 21.4951 24.1618C22.0545 23.6024 22.4355 22.8896 22.5898 22.1137C22.7441 21.3378 22.6649 20.5335 22.3622 19.8026C22.0594 19.0717 21.5467 18.447 20.8889 18.0075C20.2312 17.5679 19.4578 17.3333 18.6667 17.3333V17.3333ZM20.8987 6.66667L18.9947 13.3333H7.66133L5.66133 6.66667H20.8987ZM6.66667 21.3333C6.66667 21.597 6.58847 21.8548 6.44196 22.0741C6.29545 22.2934 6.08721 22.4643 5.84358 22.5652C5.59994 22.6661 5.33185 22.6925 5.07321 22.641C4.81457 22.5896 4.57699 22.4626 4.39052 22.2761C4.20405 22.0897 4.07707 21.8521 4.02562 21.5935C3.97417 21.3348 4.00058 21.0667 4.10149 20.8231C4.20241 20.5795 4.37331 20.3712 4.59257 20.2247C4.81184 20.0782 5.06963 20 5.33333 20C5.68696 20 6.02609 20.1405 6.27614 20.3905C6.52619 20.6406 6.66667 20.9797 6.66667 21.3333ZM18.6667 22.6667C18.403 22.6667 18.1452 22.5885 17.9259 22.442C17.7066 22.2955 17.5357 22.0872 17.4348 21.8436C17.3339 21.5999 17.3075 21.3319 17.359 21.0732C17.4104 20.8146 17.5374 20.577 17.7239 20.3905C17.9103 20.2041 18.1479 20.0771 18.4065 20.0256C18.6652 19.9742 18.9333 20.0006 19.1769 20.1015C19.4205 20.2024 19.6288 20.3733 19.7753 20.5926C19.9218 20.8118 20 21.0696 20 21.3333C20 21.687 19.8595 22.0261 19.6095 22.2761C19.3594 22.5262 19.0203 22.6667 18.6667 22.6667Z"
                fill="black"
              />
            </svg>
            <div className="count">3</div>
          </IconButton>
          <IconButton size="large">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0002 14.0003C14.3187 14.0003 15.6076 13.6093 16.704 12.8768C17.8003 12.1442 18.6548 11.1031 19.1594 9.88488C19.6639 8.66671 19.796 7.32627 19.5387 6.03306C19.2815 4.73985 18.6466 3.55197 17.7142 2.61962C16.7819 1.68727 15.594 1.05233 14.3008 0.795093C13.0076 0.537859 11.6671 0.669881 10.4489 1.17446C9.23077 1.67905 8.18957 2.53353 7.45703 3.62986C6.72449 4.72619 6.3335 6.01512 6.3335 7.33366C6.33561 9.10112 7.03867 10.7956 8.28846 12.0454C9.53824 13.2952 11.2327 13.9982 13.0002 14.0003V14.0003ZM13.0002 3.33366C13.7913 3.33366 14.5646 3.56826 15.2224 4.00778C15.8802 4.44731 16.3929 5.07202 16.6957 5.80293C16.9984 6.53383 17.0776 7.3381 16.9233 8.11402C16.769 8.88995 16.388 9.60268 15.8286 10.1621C15.2692 10.7215 14.5564 11.1025 13.7805 11.2568C13.0046 11.4111 12.2003 11.3319 11.4694 11.0292C10.7385 10.7264 10.1138 10.2137 9.67428 9.55594C9.23476 8.89815 9.00016 8.12479 9.00016 7.33366C9.00016 6.2728 9.42159 5.25538 10.1717 4.50523C10.9219 3.75509 11.9393 3.33366 13.0002 3.33366V3.33366Z"
                fill="black"
              />
              <path
                d="M24.9815 24.4465C24.4008 21.7474 22.8738 19.3451 20.6764 17.6737C18.479 16.0023 15.7562 15.1721 13.0001 15.3332C10.244 15.1721 7.5212 16.0023 5.32381 17.6737C3.12642 19.3451 1.59942 21.7474 1.01879 24.4465L0.758789 25.9999H25.2415L24.9815 24.4465ZM4.13079 23.3332C4.99079 21.2999 7.26679 17.9998 13.0001 17.9998C18.6815 17.9998 20.9775 21.2972 21.8548 23.3332H4.13079Z"
                fill="black"
              />
            </svg>
          </IconButton>
          <IconButton size="large">
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 20.667H22.3747L21.3333 16.503V11.3337C21.3307 9.0912 20.5208 6.92464 19.0518 5.23036C17.5827 3.53608 15.5528 2.42734 13.3333 2.10699V0.666992H10.6667V2.10699C8.4472 2.42734 6.41727 3.53608 4.94824 5.23036C3.47921 6.92464 2.66929 9.0912 2.66667 11.3337V16.503L1.62533 20.667H0V23.3337H6.856C7.14703 24.4771 7.81074 25.491 8.74229 26.2151C9.67383 26.9393 10.8201 27.3324 12 27.3324C13.1799 27.3324 14.3262 26.9393 15.2577 26.2151C16.1893 25.491 16.853 24.4771 17.144 23.3337H24V20.667ZM5.29333 16.991L5.33333 11.3337C5.33333 9.56555 6.03571 7.86986 7.28596 6.61961C8.5362 5.36937 10.2319 4.66699 12 4.66699C13.7681 4.66699 15.4638 5.36937 16.714 6.61961C17.9643 7.86986 18.6667 9.56555 18.6667 11.3337V16.667L19.6373 20.667H4.37467L5.29333 16.991ZM12 24.667C11.534 24.6656 11.0765 24.5417 10.6735 24.3076C10.2706 24.0736 9.93619 23.7377 9.704 23.3337H14.296C14.0638 23.7377 13.7294 24.0736 13.3265 24.3076C12.9235 24.5417 12.466 24.6656 12 24.667V24.667Z"
                fill="black"
              />
            </svg>
          </IconButton>
        </MenuOption> */
