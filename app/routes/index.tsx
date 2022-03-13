export default function Index() {
  return (
    <div className="background: #000">
        <div className="h-screen w-screen flex justify-center items-center bodyBackground">
          <div className="text-center">
              <div className="flex justify-center"><img src="/ice.png" /></div>
              <a className="text-white hover:text-blue-700 duration-300 text-7xl font-bold mb-4" href="https://ice.uy" target="_blank">ice.uy</a>
              {/* <p className="text-2xl text-gray-400 font-thin">it do be drippin doe</p> */}
              <div className="flex items-center justify-around mt-8">
                <a href="https://github.com/tinopai" target="_blank">
                  <img className="linkIcon" src="/github.svg"/>
                </a>
                <a href="https://instagram.com/ttinoob" target="_blank">
                  <img className="linkIcon" src="/instagram.svg"/>
                </a>
                <a href="https://open.spotify.com/user/b4rp9ca7dtbsfzsmre7cohytc" target="_blank">
                  <img className="linkIcon" src="/spotify.svg"/>
                </a>
                <a href="https://cpn.ac/users/tino" target="_blank">
                  <img className="linkIcon" src="/cpn.svg"/>
                </a>
              </div>
          </div>
        <footer className="Footer">
          <p>Domain for sale, for more information contact</p>
          <div className="space-x-1">
            <a className="link" href="mailto:tino@auth.party">tino@auth.party</a>
            <a>or</a>
            <a className="link" href="mailto:hello@ice.uy">hello@ice.uy</a>
          </div>
        </footer>
        </div>
    </div>
  );
}
