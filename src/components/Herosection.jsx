function Herosection() {
  return (
    <>
      <section className="flex items-center flex-col text-white gap-[21px] justify-center h-screen bg-red-200" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('/hero.jpg')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <h2 className="text-center text-white text-[52px] font-bold leading-[60px]">The Master collection of epic creations <br /><span className="special">Mukesha Gallery</span></h2>
        <p className="lg:w-[600px] font-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vitae non sed beatae ad, tenetur quam nam nostrum ipsum adipisci.</p>

        <div className="lg:w-[600px] h-[58px] px-[25px] gap-5 bg-[#f3f3f4] rounded-[50px] justify-center items-center inline-flex">
          {/* Icon here */}
          <i className="text-lg text-black bi bi-search" />

          <input type="search" className="w-full h-full text-black bg-transparent outline-none" placeholder="Search..." />

        </div>

      </section>
    </>
  )
}

export default Herosection