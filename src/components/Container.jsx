function Container({ children }) {
    return (
        <div className="w-[95%] mt-[32px] mx-auto flex  flex-col gap-[32px]">
            {children}
        </div>
    )
}

export default Container