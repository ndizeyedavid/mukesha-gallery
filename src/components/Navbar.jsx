function Navbar() {
  return (
    <>
      <section className="flex items-center justify-between px-5 py-3 bg-white">

        <h3 className="text-[#0d0c22] text-3xl font-semibold" id="logo">Mukesha gallery</h3>

        <nav className="items-center hidden gap-5 lg:flex">
          <a href="#" className="text-[#000] text-normal font-semibold leading-tight">Home</a>
          <a href="#about" className="text-[#6e6d7a] text-normal font-normal leading-tight">About</a>
          <a href="#gallery" className="text-[#6e6d7a] text-normal font-normal leading-tight">Gallery</a>
        </nav>

        <button className="px-[25px] py-[11px] bg-[#ea4c89] rounded-lg text-white">Feedback</button>

      </section>

    </>
  )
}

export default Navbar