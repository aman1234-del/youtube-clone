// rfce

import React, { useEffect, useState } from 'react'
import Header from './Header'

import tmkoc from './images/tmkoc.jpg'

function SuggestedVideos(props){
  let title = props.videoId;
  return (
    <>
      <div className='suggested-video'>
        <div className='suggestion-image'>
          <img src={tmkoc} title={title}/>
        </div>
        <div className='suggestion-content'>
          <div className='video-info'>

            <p class="track-title margin-0 video-info-title">tmk episode -322</p>
            <p class="margin-0 smaller-fontsize">T-Series</p>
            <p class="margin-0 smaller-fontsize">230M views . 4 years ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Video() {
  let videos = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div>
      {/* <p>Video comp</p>
      <h4>Time Left : {seconds}</h4> */}
      <Header />

      <div className='video-main-page'>
      
      
        <div className='video-frame'>
          <iframe className='iframe-video' src="https://www.youtube.com/embed/dm7BSM7Y1z4?si=6EEwJdPjoNHNCqPL?rel=0&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
          <div><b>this is my most expensive unboxing ! *overlays*</b></div>

          <div className='chennel-logo'> <img className='logo' src= 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/143988819/original/21acaaf2794ea59826ccb1e051ff0ebc7bf9feeb/design-logo-for-gaming-youtube-channel.jpg' alt='logo'></img>
          <div className='ttt'><pre><b>tech burner</b> 
          <p>50M subscribers</p></pre>
          
          </div>

          </div>
          <div className='kkk'>
            <p> <b>1,474,779 </b> views  Nov 5, 2023  #43 on Trending
Humara naya product aa gaya hai !
Shop Now ► https://overlays.co/

🔥 Subscribe for Tabahi Videos

INSTAGRAM ►  

 / techburner  
TWITTER ►  

 / tech_burner  
FACEBOOK ►  

 / techburner1  
WEBSITE ► https://www.techburner.in

Music : http://share.epidemicsound.com/38jRWN</p>
          </div>
           </div>
        
        <div className='suggestions'>
       
          <p> Suggested Videos</p>
          {videos.map((videoId) => {
            return (<SuggestedVideos title={videoId} />);
          })}
        </div>
      </div>
    </div>
  )
}

export default Video

