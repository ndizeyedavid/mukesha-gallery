
function Contact() {
    return (
        <>
            <section id="contact" className="flex flex-col items-center justify-center gap-4">

                <div className="flex flex-col gap-3 text-center">
                    <h2 className="text-[50px] font-bold">Was my work impressive?</h2>

                    <p className="text-lg">Do you have a question or feedback on me or my work?<br />Just fill out the form field below</p>
                </div>

                <form action="#" className="flex flex-col items-center justify-center w-[75%] gap-10 mb-[90px]">

                    <input type="text" className="w-full p-2 transition-all focus:border-[#4c51ea] text-black bg-transparent border-b outline-none" placeholder="I'd like to chat about...." />

                    <div className="grid w-full grid-cols-2 gap-x-[100px]">
                        <input type="text" className="w-full p-2 transition-all focus:border-[#4c51ea] text-black bg-transparent border-b outline-none" placeholder="Name" />
                        <input type="text" className="w-full p-2 transition-all focus:border-[#4c51ea] text-black bg-transparent border-b outline-none" placeholder="Email Address" />
                    </div>

                    <textarea placeholder="Message(remember short & sweet please)" className="w-full transition-all focus:border-[#4c51ea] border p-4 h-[200px] bg-white shadow-lg rounded outline-none"></textarea>

                    {/* <button className="px-[25px] py-[11px] bg-[#ea4c89] rounded-lg text-white">Feedback</button> */}
                    <input type="submit" value="Submit" className="px-[25px] py-[11px] bg-[#ea4c89] rounded-lg text-white" />

                </form>
            </section>
        </>
    )
}

export default Contact
