function Footer() {
    return (
        <>
            <footer className="flex items-center justify-between px-10 py-5 border-t-2 rounded-lg">
                <span>&copy; 2024 Mukesha. All rights reserved</span>

                <div className="flex items-center gap-5">
                    <a href="https://facebook.com"><i className="relative text-2xl text-blue-600 transition-all bi bi-facebook hover:-top-2" /></a>
                    <a href="https://instagram.com"><i className="relative text-2xl text-pink-600 transition-all bi bi-instagram hover:-top-2" /></a>
                    <a href="https://tiktok.com"><i className="relative text-2xl text-black transition-all bi bi-tiktok hover:-top-2" /></a>
                    <a href="https://whatsapp.com"><i className="relative text-2xl text-green-600 transition-all bi bi-whatsapp hover:-top-2" /></a>
                    <a href="https://x.com"><i className="relative text-2xl text-black transition-all bi bi-twitter-x hover:-top-2" /></a>
                </div>

                <span>A mesh with ❤ by Pawanix</span>
            </footer>
        </>
    )
}

export default Footer;