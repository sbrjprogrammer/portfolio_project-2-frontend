import React from 'react'
import Header from '../componets/header/Header'
import Prodo from '../componets/prodology/Prodo'
import Courses from '../componets/courses/courses'
import AwardCourses from '../componets/awardCourses/awardCourses'
import Appfeature from '../componets/Appfeature/Appfeature'
import Search from '../componets/searchforCourse/Search'
import Teacher from '../componets/Teacher/Teacher'
import TeacherRecord from '../componets/TeacherRecord/Pricing'
import Pricing from '../componets/TeacherRecord/Pricing'
import Record from '../componets/record/Record'
import Enroll from '../componets/enrollnow/Enroll'
import Forms from '../componets/forms/Forms'
import Login from '../componets/Authentcation/login/login'

function Home() {
  return (

    <div>
  
      <Prodo/>
      <Courses/>
      <Search/>
      <AwardCourses/>
      <Appfeature/>
      <Teacher/>
     <Pricing/>
     <Record/>
     <Enroll/>
     <Forms/>
     {/* <Login/> */}
    </div>
  )
}

export default Home