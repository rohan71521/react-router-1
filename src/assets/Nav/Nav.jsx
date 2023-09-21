import { Link } from "react-router-dom";


const Nav = () => {
    const routes = [
        { id: 1, link: "/", name: "Home" },
        { id: 2, link: "/about", name: "About" },
        { id: 3, link: "/services", name: "Services" },
        { id: 4, link: "/users", name: "Users" },
        { id: 5, link: "/posts", name: "Posts" },
      ];
    return (
        <div className="bg-black text-white flex h-24 justify-between items-center p-4">
            <div>
                <h3 className="text-3xl font-bold"><span className="text-5xl text-green-600">
                    H</span>ELLO</h3>
            </div>
          <div>
          {
                routes.map(route=>{
                 return   <Link className="
                 hover:underline mr-10" key={route.id} to={route.link}>{route.name}</Link>
                    // return <div>{route.name}</div>
                })
            }
          </div>
        </div>
    );
};

export default Nav;