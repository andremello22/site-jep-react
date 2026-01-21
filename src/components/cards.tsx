
export default function Cards({children}:any){


    return(
        <>
            <div className=" bg-gradient-to-r from-indigo-600 to-pink-500 p-[2px] rounded-xl shadow-[0_0_10px_rgba(99,102,241,0.6),0_0_15px_rgba(236,72,153,0.5)]  transition-transform 
    duration-2000
    ease-in-out
    hover:shadow-[0_0_10px_rgba(99,102,241,0.6),0_0_15px_rgba(236,72,153,0.5)]
    hover:scale-[1.03]
    hover:-translate-y-2
    hover:shadow-2xl
    overflow-hidden">
                <div className=" w-full h-full bg-white rounded-xl overflow-hidden ">
                    {children}
                </div>
            </div>
        
        </>
    )
}
