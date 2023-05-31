import Image from 'next/image'
import React from 'react'
import style from '../style/card.module.css'
import Link from 'next/link'
const Card = () => {
    return (
        <>
            <div className="container">
                <div className="row py-5 mt-5 justify-content-center gap-2">
                    <h2 className='text-center'>Scientific Approach of Finding Best School</h2>
                    <h5 className='text-center pb-5'>Experience the Power of Data Analysis</h5>
                    <div className="col-md-6 "  style={{width:350}}>
                        <div class="card p-2">
                            <Link href={'/school-list/1'}>
                            <Image src="/mumbai.png" class="card-img-top" alt="..." width={400} height={300}/>
                            <p className={style.citytext}>Mumbai</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 " style={{width:350}}>
                        <div class="card p-2">
                            <Image src="/chenai.png" class="card-img-top " alt="..." width={350} height={300}/>
                            <p className={style.citytext}>Chenai</p>
                        </div>
                    </div>
                    <div className="col-md-6  " style={{width:350}}>
                        <div class="card p-2">
                            <Image src="/banglore.png" class="card-img-top" alt="..." width={350} height={300}/>
                            <p className={style.citytext}>Banglore</p>
                        </div>
                    </div>
                    <div className="col-md-6  " style={{width:350}}>
                        <div class="card p-2">
                            <Image src="/pune.png" class="card-img-top" alt="..." width={350} height={300}/>
                            <p className={style.citytext}>Pune</p>
                        </div>
                    </div>
                    <div className="col-md-6 " style={{width:350}}>
                        <div class="card p-2">
                            <Image src="/Lucknow.png" class="card-img-top" alt="..." width={350} height={300}/>
                            <p className={style.citytext}>Lucknow</p>
                        </div>
                    </div>
                    <div className="col-md-6  " style={{width:350}}>
                        <div class="card p-2">
                            <Image src="/Ahmedabad.png" class="card-img-top" alt="..." width={350} height={300}/>
                            <p className={style.citytext}>Ahmedabad</p>
                        </div>
                    </div>
                    <div className="col-md-6 " style={{width:350}}>
                        <div class="card p-2">
                            <Image src="/jaipur.png" class="card-img-top" alt="..." width={350} height={300}/>
                            <p className={style.citytext}>Jaipur</p>
                        </div>
                    </div>
                    <div className="col-md-6 " style={{width:350}}>
                        <div class="card p-2">
                         <Image src="/Dehradun.jpg" class="card-img-top" alt="..." width={350} height={300}/>
                            <p className={style.citytext}>Dehradun</p>
                        </div>
                    </div>
                    <div className="col-md-6" style={{width:350}}>
                        <div class="card p-2">
                            <Image src="/surat.png" class="card-img-top" alt="..." width={350} height={300}/>
                            <p className={style.citytext}>Surat</p>
                        </div>
                    </div>
                    <input class="btn btn-warning my-5 text-light" type="button" value="Other Cities" style={{width:200}}></input>
                </div>{/*row end*/}
            </div>
            <div className='bg-secondary text-light p-5 '>
                <p className='text-center fs-5'>&quot;We recently moved to Delhi and it was all confusing about finding school every one had deferent <br/> choice but your website made it so simple, Thank You.&quot;</p>
                <p></p>
            </div>

        </>
    )
}

export default Card