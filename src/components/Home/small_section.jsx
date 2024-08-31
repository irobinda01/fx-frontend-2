import React from 'react';
import { AiOutlineBarChart } from "react-icons/ai";
import { FaRecycle } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

const Section = () => {
  return (
    <div className='icon-box'>
      <div className='vertical-1'></div>
      <div className='vertical-2'></div>
      <div className='icon-box-1'><AiOutlineBarChart className='icon-bar-chart'/></div>
      <div className='icon-box-2'>
        <h5>ASSETS MANAGEMENT</h5>
        <p>Bitstock Assets LLC has a long track record of managing the complexities of assets.</p>
      </div>
      <div className='icon-box-3'>
        <FaRecycle className='icon-recycle'/>
        <h5>INSTITUTIONAL MANAGEMENT</h5>
      </div>
      <div className='icon-box-4'>
        <BsPencilSquare className='icon-pencil-square'/>
        <h5>WEALTH MANAGEMENT</h5>
      </div>
    </div>
  )
}

export default Section