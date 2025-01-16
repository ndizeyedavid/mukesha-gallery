function SingleGallery({ title, like, views, status, img }) {
    return (
        <>
            <div className="relative w-[315px]">
                {
                    status != "" ?
                        <span className="absolute top-2 left-2 px-[10px] py-[2px] bg-[#0d0c22]/70 text-white rounded-[14px]">{status}</span>
                        :
                        null
                }

                <img src={img} className="h-[250px] w-full object-cover rounded-lg" alt="gallery image" />

                <div className="flex items-center justify-between px-1 mt-2">

                    <h3 className="text-[#0d0c22] text-lg font-semibold leading-tight">{title}</h3>

                    <div className="flex items-center gap-3 text-[#545252]">
                        <div className="flex items-center gap-1">
                            {/* Icon here */}
                            <i className="bi bi-heart-fill" />
                            <span>{like}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            {/* Icon here */}
                            <i className="bi bi-eye" />
                            <span>{views}</span>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SingleGallery