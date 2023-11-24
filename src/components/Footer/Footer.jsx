const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral-100 text-black font-medium">
      <aside>
        <img src="/MainLogo.png" />
        <p>
          ORGANIC FRUITS LTD.
          <br />
          Providing reliable Fruits since 1992
        </p>
      </aside>
      <nav>
        <header className="font-bold text-red-500 text-lg mb-1">
          Services
        </header>
        <a className="link link-hover">Fruits</a>
        <a className="link link-hover">Vegetables</a>
        <a className="link link-hover">Groceries</a>
        {/* <a className="link link-hover">Advertisement</a> */}
      </nav>
      <nav>
        <header className="font-bold text-red-500 text-lg mb-1">Company</header>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        {/* <a className="link link-hover">Press kit</a> */}
      </nav>
      <nav>
        <header className="font-bold text-red-500 text-lg mb-1 ">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
