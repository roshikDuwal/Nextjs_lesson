import NotFound from '@/app/not-found';
import { db } from '@/config/db';
import React from 'react'

const SingleDoctor = async({props}:{props:any}) => {
    const params=await props.params;
    const [[doctor]]=await db.execute(`select * from tbldoctors where doctor_id =?`,[params.id])

    console.log(`SingleDOctor,`,doctor);

    if(!doctor) return NotFound();
    
  return (
    <div>{doctor.first_name}</div>
  )
}

export default SingleDoctor