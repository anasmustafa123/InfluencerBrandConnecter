"use client";

import { addNewInfluencerServise, addNewInfluencerServiseLines } from "@/lib/influencer_servise";
import { useState } from "react";


const get_currency_id = (currencies, currency_name) => {
    // console.log({currencies, currency_name})
    const currency = currencies.find(currency => currency.name === currency_name);
    return currency ? currency.id : null;
}

const get_currency_details = (currencies, currency_name) => {
    const currency = currencies.find(currency => currency.name === currency_name);
    return currency;
}

const add_service_to_db = async (newService, influencer_id, currencies) => {
    const currency_id = get_currency_id(currencies, newService.currency.name);
    const res = await addNewInfluencerServise(influencer_id, newService.title, currency_id, newService.price, newService.delivery_from, newService.delivery_to, newService.icon);
    // console.log("the newservice", newService)
    return res;
}

export function NewServise({setNewService, newService, setShowAddService, currencies, influencer_id}) {
    const [service_description_count, set_description_count] = useState(1);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <form onSubmit= {async (e) => {
                e.preventDefault();
                console.log("submitting", newService);
                const res_ofadd = await add_service_to_db(newService, influencer_id, currencies);
                if (! res_ofadd.success) {
                    // console.log(res_ofadd.message)
                    alert(res_ofadd.message);
                    return;
                }
                const linesadded = await addNewInfluencerServiseLines(newService.influencer_servise_line.map((s)=> ({ influencer_service_id: res_ofadd.data.id, name: s.name, count: s.count })));
                setShowAddService(false);
                // console.log({linesadded})
                if (! linesadded.success) {
                    // console.log(linesadded.message)
                    alert('Something went wrong');
                    return;
                }
                alert(`Service added: ${newService.title}`);
            }}
             className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-4">
                <h3 className="text-xl font-bold text-indigo-700 mb-2">Add New Service</h3>
                <input
                    type="text"
                    placeholder="Service Title"
                    value={newService.title}
                    onChange={e => setNewService(s => ({ ...s, title: e.target.value }))}
                    className="border rounded px-3 py-2"
                    required
                />
                <select
                    value={newService.icon}
                    onChange={e => setNewService(s => ({ ...s, icon: e.target.value }))}
                    className="border rounded px-3 py-2"
                    required
                >
                    <option value="">Select Icon</option>
                    <option value="📷">Camera</option>
                    <option value="🎥">Video</option>
                    <option value="📖">Book</option>
                    <option value="🧾">Article</option>
                    <option value="📝">Note</option>
                </select>
                <div className="flex gap-2">
                    <label className="flex flex-col text-sm">
                    Delivery Min
                    <input
                        type="number"
                        placeholder="Enter min delivery days"
                        value={newService.delivery_from}
                        onChange={e => setNewService(s => ({ ...s, delivery_from: Number(e.target.value) }))}
                        className="border rounded px-2 py-1"
                        required
                    />
                    </label>
                    <label className="flex flex-col text-sm">
                    Delivery Max
                    <input
                        type="number"           
                        value={newService.delivery_to}
                        placeholder="Enter max delivery days"
                        onChange={e => setNewService(s => ({ ...s, delivery_to: Number(e.target.value) }))}
                        className="border rounded px-2 py-1"
                        required
                    />
                    </label>
                </div>
                {[...Array(service_description_count)].map((_, i) => (
                    <div key={i} className="flex gap-2 items-end">
                        <label className="flex flex-col text-sm">
                        Number
                        <select
                            value={newService.influencer_servise_line?.[i]?.count || 1}
                            onChange={e =>
                            setNewService(s => {
                                const old_arr = [...(s.influencer_servise_line || [])];
                                old_arr[i] = { ...old_arr[i], count: Number(e.target.value) };
                                return { ...s, influencer_servise_line: old_arr };
                            })
                            }
                            className="border rounded px-2 py-1"
                            required
                        >
                            {[...Array(10)].map((_, n) => (
                            <option key={n + 1} value={n + 1}>
                                {n + 1}
                            </option>
                            ))}
                        </select>
                        </label>

                        <label className="flex flex-col text-sm">
                        Type
                        <input
                            type="text"
                            placeholder="Type (e.g. posts, reels, videos)"
                            value={newService.influencer_servise_line?.[i]?.name || ""}
                            onChange={e =>
                            setNewService(s => {
                                const old_arr = [...(s.influencer_servise_line || [])];
                                old_arr[i] = { ...old_arr[i], name: e.target.value };
                                return { ...s, influencer_servise_line: old_arr };
                            })
                            }
                            className="border rounded px-2 py-1"
                            required
                        />
                        </label>
                        {/* Add button */}
                    <button
                        type="button"
                        onClick={() => {
                            set_description_count(c => c + 1)
                        }}
                        className={`${service_description_count-1 != i ? 'hidden' : ''} mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600`}
                    >
                    + 
                    </button>
                        {/* Delete button for all lines except the first */}
                        {i > 0 && (
                        <button
                            type="button"
                            onClick={() => {
                            set_description_count(c => c - 1);
                            setNewService(s => {
                                const old_arr = [...(s.influencer_servise_line || [])];
                                old_arr.splice(i, 1);
                                return { ...s, influencer_servise_line: old_arr };
                            });
                            }}
                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            ✕
                        </button>
                        )}
                    </div>
                    ))}

                    

                
                <div className="flex gap-2">
                    <label className="flex flex-col text-sm flex-1">
                    Price
                    <input
                        type="number"
                        min={0}
                        placeholder="Amount"
                        value={newService.price || ""}
                        onChange={e => setNewService(s => ({ ...s, price: e.target.value }))}
                        className="border rounded px-2 py-1"
                        required
                    />
                    </label>
                    <label className="flex flex-col text-sm w-32">
                    Currency
                    <select
                        value={newService.currency.name || "dollar"}
                        onChange={e => setNewService(s => {
                            return { ...s, currency: {...newService.currency, ...get_currency_details(currencies, e.target.value) } }
                        })}
                        className="border rounded px-2 py-1"
                        required
                    >
                        {currencies.map((c) => (
                        <option key={c.id} value={c.name}>{c.abbreviation}</option>
                        ))}
                    </select>
                    </label>
                </div>
                <div className="flex gap-3 mt-2">
                <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600">Add</button>
                <button type="button" className="px-4 py-2 border rounded-lg font-medium hover:bg-gray-100" onClick={() =>{
                    setShowAddService(false);
                    
                }}>Cancel</button>
                </div>
            </form>
        </div>
    );
};