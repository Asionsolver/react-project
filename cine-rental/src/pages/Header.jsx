import { useContext, useState } from "react";
import MoonIcon from "../assets/icons/moon.svg";
import SunIcon from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import RingIcon from "../assets/ring.svg";
import CartIcon from "../assets/shopping-cart.svg";
import CartDetails from "../components/cine/CartDetails";
import { MovieContext, ThemeContext } from "../context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMood, setDarkMood } = useContext(ThemeContext);
  // console.log(state.cartData);

  const handleCartShow = () => {
    setShowCart(!showCart);
  };

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(!showCart)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={RingIcon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMood(darkMood => !darkMood)}
            >
              <img
                src={darkMood ? SunIcon : MoonIcon}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={CartIcon} width="24" height="24" alt="" />
              {state.cartData.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
