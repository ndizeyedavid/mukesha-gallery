import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection"
import Container from "./components/Container"
import SingleGallery from "./components/SingleGallery"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

function App() {
  return (
    <>

      <Navbar />
      {/* Hero section */}
      <Herosection />

      {/* main body container */}

      <Container>

        <section id="about" className="w-[600px] mx-auto mt-[30px] mb-[220px] flex flex-col items-center gap-5">

          <div className="flex flex-col items-center gap-4 text-center">

            <img src="/profile.jpg" className="w-[250px] h-[250px] object-cover rounded-full" alt="about image" />

            <h3 className="text-5xl font-bold">About Me</h3>

            <p className="text-gray-700"> ducimus dicta, quidem beatae sunt quaerat tempora eaque molestiae, voluptas totam enim velit illo consequatur possimus, excepturi sint.</p>

          </div>

          <hr className="w-full" />

          <div className="grid w-full grid-cols-2 rounded-[100px] overflow-hidden border-2">

            <div className="w-full text-center bg-red-300 border p-7">
              <span className="text-xl font-semibold">Photographer</span>
            </div>

            <div className="w-full text-center border bg-red-50 p-7">
              <span className="text-xl font-semibold">Graphic Design</span>
            </div>

          </div>


        </section>

        <h3 className="mb-2 text-5xl font-bold text-center">My Work</h3>

        <div className="flex justify-between">
          {/* select & filter */}
          <select className="px-[10px] outline-none border py-[7px] bg-white/0 rounded-lg shadow-[inset_0px_0px_0px_1px_rgba(231,231,233,1.00)]">
            <option value="popular">Popular</option>
            <option value="new">New</option>
            <option value="viewed">Most viewed</option>
          </select>

          <button className="flex gap-2 px-[10px] border py-[7px] bg-white/0 rounded-lg shadow-[inset_0px_0px_0px_1px_rgba(231,231,233,1.00)]">
            {/* Icon here */}
            <i className="bi bi-filter" />
            <span>Filters</span>
          </button>
        </div>

        {/* gallery container */}
        <div id="gallery" className="grid grid-rows-1 lg:grid-cols-4 gap-y-[50px] mb-[90px]">
          <SingleGallery title="Cactus juice" like="90" views="12K" status="" img="/hero.jpg" />
          <SingleGallery title="Mountain painting" like="9K" views="2.2M" status="Popular" img="/1.webp" />
          <SingleGallery title="Friendship hug" like="127" views="10K" status="" img="/2.webp" />
          <SingleGallery title="Odama Lorah" like="12" views="1.8K" status="New" img="/3.jpg" />
          <SingleGallery title="Flying whale" like="770" views="975K" status="popular" img="/4.jpg" />
          <SingleGallery title="Nature love" like="128" views="241K" status="" img="/5.jpg" />
          <SingleGallery title="Tranquil rocks" like="8" views="200" status="" img="/6.webp" />
          <SingleGallery title="My Camera" like="1" views="20" status="New" img="/7.jpg" />
          <SingleGallery title="Cool Cat" like="278K" views="14.8M" status="Popular" img="/8.jpg" />
        </div>

        {/* Contact section */}
        <Contact />

      </Container>

      {/* Footer */}
      <Footer />

    </>
  )
}

export default App;