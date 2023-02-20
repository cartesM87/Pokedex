import React,{useState} from 'react'

function Image({url,alt,clas}) {
  const [loading, setLoading] = useState(true);
  return (
    <>
    {loading && <span className='loader my-[100px]'></span>}
    <img src={url} onLoad={() => setLoading(false)} className={`${clas}`} style={{ display: loading ? 'none' : 'block' }} alt={alt} />
    </>
  )
}

export default Image