/* Menu component displays top navigation bar with links
 * Left-side navigation bar: Home, Inventory and Help
 * Right-side navigation bar: User Name
*/
function Menu () {
  return (
    <div className="top-nav">
      <a href="#home" className="left-side">Home</a>
      <a href="#inventory" className="left-side">Inventory</a>
      <a href="#help" className="left-side">Help</a>
      <a href="#user" className="right-side"><span>User Name</span></a>
    </div>
  );
};

export default Menu;