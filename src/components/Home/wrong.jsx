<div className="background-img" style={{backgroundImage: `url(${props.slider[currentIndex].url})`}}>
  <div className='background-box'>
    <h1 className='text-4xl pb-5'>{props.slider[currentIndex].head}</h1>
    <p className='text-2xl pb-5'>{props.slider[currentIndex].body}</p>
    <p className='text-2xl pb-5'>{props.slider[currentIndex].foot}</p>
    <div className='background-btn-box'>
      <button className='background-btn1 text-3xl'>LOGIN</button>
      <button className='background-btn2 text-2xl'>GET STARTED</button>
    </div>
  </div>
</div>