import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>New Project</title>
        <meta property="og:title" content="New Project" />
      </Helmet>
      <div className="home-container1">
        <h1>linka</h1>
        <h1>linkb</h1>
        <h1>linkc</h1>
      </div>
      <div className="home-container2">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjUxNzM5Nzc3&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=300"
          className="home-image"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1651694426160-4af790b3f144?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY1MTczOTc3Nw&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=300"
          className="home-image1"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1651654912281-c650f88348ed?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNjUxNzM5Nzc3&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=300"
          className="home-image2"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1651676877879-47337d470b8d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY1MTczOTc3Nw&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=300"
          className="home-image3"
        />
      </div>
      <div className="home-container3">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
      <footer className="home-footer">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="home-image4"
        />
        <span className="home-text4">
          © 2021 teleportHQ, All Rights Reserved.
        </span>
        <div className="home-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon2">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon4">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>
      <div className="home-container4">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
      <div className="home-container5">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
      <div className="home-container6">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNjUxNzM5Nzc3&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=300"
          className="home-image5"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1651694426160-4af790b3f144?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY1MTczOTc3Nw&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=300"
          className="home-image6"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1651654912281-c650f88348ed?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNjUxNzM5Nzc3&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=300"
          className="home-image7"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1651676877879-47337d470b8d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY1MTczOTc3Nw&amp;ixlib=rb-1.2.1&amp;q=80&amp;h=300"
          className="home-image8"
        />
      </div>
    </div>
  )
}

export default Home
