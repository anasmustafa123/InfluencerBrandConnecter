"user client";


function get_service_content(content_array){
    const content_str = content_array.reduce((accumulator, service_line) => {
        return accumulator + ` ${accumulator ? "+" : ""} ${service_line.count} ${service_line.name}`
    }, "")
    return (<p className="mt-2 text-sm text-gray-600">{content_str}</p>)
}

export function ServiseWidget({service}) {
    return (
        <div key={service.id} className="relative bg-white/70 backdrop-blur-lg rounded-2xl border border-indigo-100 p-6 shadow-lg hover:shadow-xl transition flex flex-col">
            {/* <button
                className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-full text-pink-400 text-base font-bold transition-colors duration-150 hover:bg-pink-100 hover:text-pink-600 focus:outline-none"
                onClick={
                    // () => handleDeleteService(service.id)
                    () => {}
                }
                aria-label="Delete Service"
                style={{ boxShadow: 'none', border: 'none', background: 'none' }}
            >
            ×
            </button>    */}
            <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center text-3xl shadow">
                <span>{service.icon}</span>
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <div className="text-base font-bold text-indigo-700">{`${service.price} ${service.currency.icon}`}</div>
                </div>
                {get_service_content(service.influencer_servise_line)}
                {/* <p className="mt-2 text-sm text-gray-600">{service.desc}</p> */}
            </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
            {/* <div className="text-xs text-gray-500">Delivery: {service.delivery || "3–7 days"}</div> */}
            <div className="text-xs text-gray-500">Delivery: {`${service.delivery_from}–${service.delivery_to} days`}</div>
            <div className="flex items-center gap-2">
                {/* <button
                onClick={() => handleOrder(service)}
                className={`${props.userRole === "influencer" ? "hidden" : ""} px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-md text-sm font-semibold shadow hover:from-indigo-600 hover:to-pink-600`}
                >
                Order
                </button>
                <button
                    onClick={() => alert("Message about this service")}
                    className={`${props.userRole === "influencer" ? "hidden" : ""} px-4 py-1.5 border border-indigo-200 rounded-md text-sm font-medium bg-white/70 hover:bg-indigo-50 shadow`}
                >
                    Message
                </button> */}
            </div>
            </div>
        </div>
    );
} 