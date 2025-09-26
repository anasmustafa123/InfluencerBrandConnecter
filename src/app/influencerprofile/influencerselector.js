"use client";
import { AddInfluencerPlatforms, getAllInfluencerPlatforms } from "@/lib/influencer_platforms";
import { getAllPlatforms } from "@/lib/platforms";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";


const SocialLinksSelector = ({ influencer_id }) => {
  const [selected, setSelected] = useState({});
  const [all_platforms, setAllPlatforms] = useState([]);
  const [influencer_platforms, setInfluencerPlatforms] = useState([]);
  const [selectedNewPlatform, setSelectedNewPlatform] = useState('');

  useEffect(
    () => {
      async function get_data () {
        const all_platforms = await getAllPlatforms(false);
        const allInfluencerPlatforms = await getAllInfluencerPlatforms(influencer_id);
        // console.log({all_platforms})
        // console.log({allInfluencerPlatforms})
        setAllPlatforms(all_platforms);
        setInfluencerPlatforms(all_platforms);
        
        if (allInfluencerPlatforms.success){
          setInfluencerPlatforms(allInfluencerPlatforms.data.map((pl) => ({...pl, edit_mode: false})));
        }
      }
      get_data();
    },
    [selected]
  )

  const handleSelectedPlatformsChange = (e) => {
    const selected_platform = e.target.value;
    setSelectedNewPlatform(
      all_platforms.find((pl) => pl.name === selected_platform)
    );
  };

  return (
    <>
    <div className="flex items-center mt-8 mb-4">
      <div className="flex justify-center flex-1 gap-2 items-center">
        <label for="inf_platforms" className="mr-11 text-sm font-medium text-gray-900 dark:text-white">Choose a Platform:</label>

        <select value={selectedNewPlatform.name} onChange={handleSelectedPlatformsChange} className="w-[80%]" name="inf_platforms" id="cars">
          {all_platforms.map((pl) => (
            <option value={pl.name}>{pl.display_name}</option>
          ))}
        </select>
      </div>
      <IoMdAddCircleOutline className="text-3xl cursor-pointer" />
    </div>
    
    {
      influencer_platforms.map((inf_platform, index) => (
        <div className="flex justify-between items-center gap-2 mb-2">
          {!inf_platform.edit_mode ?
          (
            <>
              <div
                className="flex-shrink border px-2 py-1 w-[40%]" 
              >
                {inf_platform.platform_id}
              </div>
              <div
                className="flex-shrink border px-2 py-1 w-[40%]" 
              >
                {inf_platform.url}
              </div>
            </>
          ) 
          :
          (
            <>
              <input
                type="text"
                value={inf_platform.platform_id}
                className="flex-shrink border px-2 py-1 w-[40%]" 
                // onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                value={inf_platform.url}
                className="flex-shrink border px-2 py-1 w-[40%]" 
                // onChange={(e) => handleChange(e)}
              />
            </>
         
          )}
          
          <MdOutlineModeEdit className="text-xl cursor-pointer" onClick={() => {
            const prev_inf_platforms = [...influencer_platforms];
            prev_inf_platforms[index].edit_mode = !prev_inf_platforms[index].edit_mode;
            setInfluencerPlatforms(prev_inf_platforms);
          }} />
          <MdDelete className="text-xl cursor-pointer" onClick={() => {
            // const prev_inf_platforms = [...influencer_platforms];
            // prev_inf_platforms.splice(index, 1);
            // setInfluencerPlatforms(prev_inf_platforms);
          }}/>
        </div>
      ))
    }

    <div className="flex justify-between items-center gap-2">
      <input
        type="text"
        className="flex-shrink border px-2 py-1 w-[80%]" 
        placeholder={`Enter ${selectedNewPlatform.display_name || ''} Link`}
        onChange={(e) => handleChange(e)}
      />
      <IoAddCircle className="text-xl cursor-pointer" 
      onClick={async()=>{
        if (selectedNewPlatform){
          const res = await AddInfluencerPlatforms(influencer_id, selectedNewPlatform.name, selectedNewPlatform.url, selectedNewPlatform.url);
          console.log([res])
          if (res.success){
            const prev_inf_platforms = [...influencer_platforms];
            prev_inf_platforms.push({platform_id: selectedNewPlatform.name, url: selectedNewPlatform.url, edit_mode: false});
            setInfluencerPlatforms(prev_inf_platforms);
          }else {
            alert(res.message)
          }
        }else {
          alert("Please select a platform")
        }
      }}
      />
    </div>

    </>
  );
};


export default SocialLinksSelector;
