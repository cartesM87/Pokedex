import React,{useState} from 'react'

function Image({url,alt,clas}) {
  const [loading, setLoading] = useState(true);
  return (
    <>
    {loading && <div className='w-[300px] h-[300px] bg-gray-500 bg-opacity-40 flex items-center justify-center mb-[100px] md:mb-[20px]'><span className='loader block'></span></div>}
    <img src={url} onLoad={() => setLoading(false)} className={`${clas}`} style={{ display: loading ? 'none' : 'block' }} alt={alt} />
    </>
  )
}

export default Image