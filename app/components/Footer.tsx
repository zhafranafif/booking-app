'use client'

import Image from "next/image"
import Button from "./Button"

const Footer = () => {
  return (
      <div className="mt-80 bg-neutral-100 mb-0"
      >
          <div className="flex flex-row justify-between p-5">
              <div className="flex flex-col gap-5">
                  <Image
                      alt="Footer logo"
                      width={50}
                      height={50}
                      src="/images/BHLogo-removebg.png"
                  />
                  <div className="flex flex-row items-center gap-5">
                      <a href="">Trips</a>
                      <a href="">Favorites</a>
                      <a href="">Reservation</a>
                      <a href="">Properties</a>
                 </div>
              </div>
              <div className="flex flex-col gap-5">
                  <h3>Join our newsletter</h3>
                  <div className="flex flex-row items-center gap-5">
                      <input className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 p-1" placeholder="Enter your email" />
                      <Button label="Subscribe" onClick={() => {}}/>
                  </div>
              </div>
          </div>
          <hr />
          <div className="mt-5">
              <div className="flex flex-row justify-between p-5">
                  <span>&copy; 2023 BookHotel. All Right Reserved</span>
                  <div className="flex flex-row items-center gap-5">
                      <a href="">Terms</a>
                      <a href="">Privacy</a>
                      <a href="">Cookies</a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Footer