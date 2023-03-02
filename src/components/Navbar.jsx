

// Navbar -> Search bar component 
function SearchBar({ setSearch }) {
    return (
      <div className="searchbar">
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <input type="text" placeholder="Search Wing.." onChange={(e) => {
          setSearch(e.target.value);
        }}/>
        <button type="submit" onClick={() => console.log("button")} >
          <span class="material-symbols-outlined">
            search
          </span>
        </button>
      </div>
    )
  }
  
  function NavbarMenuOption(){
    const options = ["Wingo Tv","Best Sellers", "Mobiles","Customer Service",
           "Today's Deals","Electronic","Prime","Wingo Pay","Fashion","New Release","Home & Kitchen","Beauty & Personal Care"
           ]
    return(
      <div className="navbar-menu-option">
        <ul>
          {
            options.map(option=>(
              <li><a href="#">{option}</a></li>
            ))
          }
        </ul>
      </div>
    )
  }
  // Navbar
  function Navbar({ setSearch, cart }) {
    return (
      <>
        <div className="navbar">
          <div className="logo">
            <a href="#"><span>Wingo</span> Shop</a>
          </div>
          <SearchBar setSearch={setSearch} />
          <div className="signin">
            <a href="/signin">Sign In</a>
          </div>
          <div className="cart">
            <a href="#">
              <span class="material-symbols-outlined">
                shopping_cart
              </span>
              <span class="cart-count">
                  {cart}
              </span>
            </a>
          </div>
        </div>
        <NavbarMenuOption />
      </>
    )
  }

export default Navbar;